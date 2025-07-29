

import { FaGoogle } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const SignUp = () => {
    const { createUser,GoogleSignIn } = useAuth()
    const navigate = useNavigate()
    const FromHandel = e => {
        e.preventDefault();
        const form = e.target 
        const email = form.email.value 
        const password = form.password.value 
        const result = {email,password}
        console.log(result); 
        
        createUser(email , password)
        .then(result => {
            console.log('user',result.user);
            navigate('/login')
        })
        .catch(error => console.log(error.message))
    }

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
                    <form onSubmit={FromHandel}>
                        <fieldset className="fieldset">   
                            <div>
                                <label className="label">Email</label>
                                <input type="email" name='email' className="input" placeholder="Email" />
                            </div>
                            <div>
                                <label className="label">Password</label>
                                <input type="password" name='password'  className="input" placeholder="Password" />
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