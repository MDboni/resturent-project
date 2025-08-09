import { useForm } from "react-hook-form"
import SectionTitle from "../../Component/SectionTitle"
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAxiosSecure from "../../Hooks/useAxiosSecure";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING ;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const AddItemPage = () => {
    const { register, handleSubmit, watch, formState: { errors },} = useForm()
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()
    const onSubmit = async(data) => {
      console.log(data)
     
       const formData = new FormData();
          formData.append('image', data.image[0]);

      const res = await axiosPublic.post(image_hosting_api,formData,{
        headers:{
          'content-type':'multipart/form-data'
        }
      })
      if(res.data.success){
        const menuItem = {
          name : data.name ,
          category : data.category ,
          price : parseFloat(data.price),
          recipe: data.recipe ,
          image:  res.data.data.display_url
        }
        // 
        
        const menuresponse = await axiosSecure.post('/menu', menuItem);
        console.log(menuresponse.data);
        if(menuresponse.data.insertedId){

        }
        
      }
      console.log(res.data);
      
    }
  return (
    <div>
        <SectionTitle      
            subTitle='---Item Add---'
            maintitle='ITEM CREATE'
        />
        <form  onSubmit={handleSubmit(onSubmit)}>
         
         <div className="w-4/6 mx-auto">
              <div>
                    <label className="fieldset-legend">Recipe name?</label>
                    <input {...register("name")} type="text" className="input w-full" placeholder="Type here" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                {/* category  */}
                    <div>
                          <label className="fieldset-legend">Category?</label>
                          <select {...register("category")} defaultValue="Server location" className="select select-neutral">
                              <option disabled={true}>Create Iteme</option>
                              <option>Offerd</option>
                              <option>Salad</option>
                              <option>pizza</option>
                              <option>drinks</option>
                              <option>dessert</option>
                          </select>
                    </div>
                      {/* Price  */}
                      <div>
                          <label className="fieldset-legend">Price?</label>
                          <input {...register("price")} type="text" className="input w-full" placeholder="Price here" />
                    </div>
                    
              </div>
              {/* textAriea  */}
              <div>
                <textarea {...register("recipe")} className="textarea w-full my-3" placeholder="Text Details"></textarea>
              </div>
              <div>
                <input {...register("image")} type="file" className="file-input file-input-ghost" />
              </div>
         
              <div className="my-4">
                <input type="submit" value="Add Item" className="btn btn-primary w-full" />
              </div>
         </div>
          
        </form>
      </div>
  )
}

export default AddItemPage