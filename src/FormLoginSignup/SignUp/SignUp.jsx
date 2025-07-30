

import { FaGoogle } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const SignUp = () => {

    const {register, handleSubmit,watch,formState: { errors }, } = useForm()
    
    const onSubmit = (data) => {
        const {name, email , password } = data ;
        createUser(email , password)
        .then((result)=> {
            console.log('User created:', result.user);
            navigate('/');
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Registration Successfully",
                showConfirmButton: false,
                timer: 1500
            });
        })
        .catch((error) => {
            console.error('Signup error:', error.message);
      });
    }
    

    const { createUser,GoogleSignIn } = useAuth()
    const navigate = useNavigate()

    // const handleSubmit = e => {
    //     e.preventDefault();
    //     const form = e.target 
    //     const email = form.email.value 
    //     const password = form.password.value 
    //     const result = {email,password}
    //     console.log(result); 
        
    //     createUser(email , password)
    //     .then(result => {
    //         console.log('user',result.user);
    //         navigate('/login')
    //     })
    //     .catch(error => console.log(error.message))
    // }

    const handleGoogleSignIn = () => {
       GoogleSignIn()
        .then(result => {
            console.log('Google user:', result.user);
        })
        .catch(error => console.error(error));
    }
  return (
       <>
         <div className="hero bg-base-200 w-5/6 mx-auto min-h-[90vh] mt-10 shadow-2xl">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card bg-base-100 md:w-1/2 w-full  max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h2 className="text-3xl font-bold text-center">SignUp</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <fieldset className="fieldset">   
                            <div>
                                <label className="label">Name</label>
                                <input type="text" {...register("name", { required: true })} name='name' className="input" placeholder="Name" />
                                {errors.name && <span>This field is required</span>}
                            </div>
                            <div>
                                <label className="label">email</label>
                                <input type="email" {...register("email", { required: "Email Address is required" })}
                                 aria-invalid={errors.mail ? "true" : "false"} name='email' className="input" placeholder="Email" />
                                 {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                            </div>
                            <div>
                                <label className="label text-2xl font-semibold">Gender Selection</label>
                                <select {...register("gender")}>
                                    <option value="female">female</option>
                                    <option value="male">male</option>
                                    <option value="other">other</option>
                                </select>
                            </div>
                            <div>
                                <label className="label">Password</label>
                                <input type="password" {...register("password", { required: true , pattern:{
                                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{6,}$/,
                                    message: "Password must have at least 1 uppercase, 1 lowercase, 1 number, 1 special character, and be 6+ characters"

                                } })} name='password'  className="input" placeholder="Password" />
                                {errors.password && <span>{errors.password.message}</span>}
                            </div>
                            <button type="submit"  className="btn btn-neutral btn-bg-blue mt-4 ">Sign Up</button>
                        </fieldset>
                    </form>

                     <div className='text-center items-center'>
                        <h2 className='text-center'>Already Registered ? <Link to={`/login`} className='font-bold'>Go to Login</Link></h2>
                        <p>Or Sign in With</p>
                        <div className='w-5/6 mx-auto text-2xl'>
                            <button onClick={handleGoogleSignIn} className='btn btn-outline btn-secondary  flex items-center justify-center gap-2'>
                                <FaGoogle /> 
                            </button>
                        </div>

                    </div>
                </div>
                </div>
                <div className="text-center md:w-1/3  lg:text-left">
                <h1 className="text-5xl font-bold">Sign Up now!</h1>
                <p className="py-6">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                    quasi. In deleniti eaque aut repudiandae et a id nisi.
                </p>
                </div>
            </div>
        </div>
       </>
  )
}

export default SignUp