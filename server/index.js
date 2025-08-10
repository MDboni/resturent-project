require('dotenv').config()
const express = require('express')
const cors = require('cors')
const jwt = require('jsonwebtoken');
const app = express()
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)
const port = process.env.PORT || 3000
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

app.use(express.json())


const allowedOrigins = ['http://localhost:5173'];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  
}));



app.get('/', (req, res) => {
  res.send('Hello World!')
})



const uri = `mongodb+srv://${process.env.USER}:${process.env.PASS}@cluster0.lum0bq6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {

    const userCollection = client.db("Bistro-Bos").collection("users");
    const menuCollection = client.db("Bistro-Bos").collection("menu");
    const cartCollection = client.db("Bistro-Bos").collection("FoodOrders");
    
    // JWT releted api 
app.post('/jwt', async (req, res) => {
  const user = req.body ;
  const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET , {
    expiresIn:'1h'
  })
  res.send({ token })
});

// Middaleware 

const verifyToken = (req,res,next) =>{

 const authHeader= req.headers.authorization;
 console.log('Incomaing Auth Header:', authHeader);
 if(!authHeader){
      return res.status(401).json({ message: 'Unauthorized access: No token' });
 }

 const token = authHeader.split(' ')[1];
 jwt.verify(token, process.env.ACCESS_TOKEN_SECRET , (error ,decoded)=>{
  if(error){
    console.error("❌ Token verification failed", error);
      return res.status(403).json({ message: 'Forbidden access' });
  }
  req.decoded = decoded; 
  next()
 }) 

}

app.get('/users/admin/:email',verifyToken , async(req,res)=>{
  const email = req.params.email ;
  if(email !== req.decoded.email){
    return res.status(403).send({message:'Unauthorized'})
  }
  const query = {email:email} ;
  const user = await userCollection.findOne(query) ;
  let admin = false ;
  if(user){
    admin = user?.role === 'admin'
  }
  res.send({ admin }) ;
})

const verifyAdmin = async (req,res,next)=>{
  const email = req.decoded.email ;
  const query = {email:email} ;
  const user = await userCollection.findOne(query);
  const isAdmin = user?.role === 'admin' ;
  if(!isAdmin){
    return res.status(403).send({message:'forbidden access'})
  }
  next()
}

    
//  users releted API 

    app.get('/users' , verifyToken ,verifyAdmin,async(req,res)=>{
    
      const result = await userCollection.find().toArray() ;
      res.send(result)
    })

    app.post('/users',async(req,res)=>{
      const user = req.body

      // same user database aye set hobe na 
      const query = {email : user.email}
      const existingUser = await userCollection.findOne(query)

      if(existingUser){
        return res.send({message :'usere already created'})
      }
      const result = await userCollection.insertOne(user)
      res.send(result)
    })

    app.delete('/users/:id',async(req,res)=>{
      const id = req.params.id ;
      const quary = {_id : new ObjectId(id)}
      const result = await userCollection.deleteOne(quary)
      res.send(result)
    })

    app.patch('/users/admin/:id',verifyToken,verifyAdmin, async(req,res)=>{
      const id = req.params.id ;
      const filter = {_id : new ObjectId(id)}
      const updateDoc = {
        $set : {
          role: 'admin'
        }
      }
      const result = await userCollection.updateOne(filter,updateDoc)
      res.send(result)
    })


    app.get('/menu',async(req,res)=>{
       const result = await menuCollection.find().toArray();
        res.send(result)
    })

    app.post('/menu',async(req,res)=>{
      const item = req.body ;
      const result = await menuCollection.insertOne(item) ;
      res.send(result) 
    })
    
    app.delete('/menu/:id',verifyToken,verifyAdmin,  async(req,res)=>{
      const item = req.params.id ;
      const query = { _id : new ObjectId(item)}
      const result = await menuCollection.deleteOne(query)
      res.send(result)
    })

    app.post('/carts', async(req,res)=>{
      const gett = req.body 
      const result = await cartCollection.insertOne(gett)
      res.send(result)
    })

    app.get('/carts',async(req,res)=>{
      const email = req.query.email ;
      const query = { email : email }
      const result = await cartCollection.find(query).toArray();
      res.send(result)
    })

    app.delete('/carts/:id',verifyToken,verifyAdmin,async(req,res)=>{
      const id = req.params.id;
      const query = { _id : new ObjectId(id)}
      const result = await cartCollection.deleteOne(query)
      res.send(result)
    })

    // Payment Intent 

    app.post('/create-payment-intent',async(req,res)=>{
      const { price } = req.body ;
      const amount = parseInt(price * 100) ;

      const paymentIntent = await stripe.paymentIntents.create({
        amount: amount ,
        currency: 'usd',
        payment_method_types: ['card']
      })

      res.send({
        clientSecret: paymentIntent.client_secret
      })
    })

    await client.connect();

    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
