require('dotenv').config()
const express = require('express')
const cors = require('cors')
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const app = express()
const port = process.env.PORT || 3000
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

app.use(express.json())


app.use(cors());

app.use(cookieParser());


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
   console.log("HEADERS:", req.headers.authorization);

   const token = res.headers.authorization?.split(' ')[1] ;

   if(!token){
          return res.status(401).json({ message: 'Unauthorized access' });
   }

   jwt.verify(token, process.env.ACCESS_TOKEN_SECRET , (err,decoded)=>{
     if(err){
            return res.status(403).json({ message: 'Forbidden access' });
     }
     req.res = decoded ;
     next()
   })
}
    
//  users releted API 

    app.get('/users' , verifyToken ,async(req,res)=>{
    
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

    app.patch('/users/admin/:id', async(req,res)=>{
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

    app.delete('/carts/:id',async(req,res)=>{
      const id = req.params.id;
      const query = { _id : new ObjectId(id)}
      const result = await cartCollection.deleteOne(query)
      res.send(result)
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
