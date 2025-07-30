import { useEffect, useRef,  } from 'react';
import { loadCaptchaEnginge,   validateCaptcha } from 'react-simple-captcha';
import useAuth from '../../Hooks/useAuth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle } from "react-icons/fa6";
import { useForm } from 'react-hook-form';


const Login = () => {
    
    // const [disabled,setDisabled] =useState(true)
    const captchaRef = useRef(null)
    const { signIn ,GoogleSignIn } = useAuth()
    const location = useLocation()
    const from = location.state?.from || "/";
    const navigate = useNavigate()

    const {register, handleSubmit, watch, formState: { errors },} = useForm()
    const onSubmit = (data) => {
        const { email , password } = data ;
        signIn(email,password)
        .then(result => {
            console.log('user',result.user);
            navigate(from)
        })
        .catch(error => console.log(error.message))  
    }

    // const FromHandel = e => {
    //     e.preventDefault();
    //     const email = e.target.email.value ;
    //     const password = e.target.password.value ;
    //     const result = {email,password}
    //     console.log(result);    
        
    //     signIn(email,password)
    //     .then(result => {
    //         console.log('user',result.user);
    //         e.target.reset()
    //         navigate('/')
    //     })
    //     .catch(error => console.log(error.message))
    // }

    const Captchahandel = () =>{
        const userCaptchaValue  = captchaRef.current.value ;

        if (validateCaptcha( userCaptchaValue )==true) {
         setDisabled(false)
        }else {
          setDisabled(true)
          alert("Captcha does not match. Please try again.");
        } 
        
    } 
    const handleGoogleSignIn = () => {
        GoogleSignIn()
        .then(result => {
            console.log('Google user:', result.user);
        })
        .catch(error => console.error(error));
    };
    
    useEffect(()=>{
        loadCaptchaEnginge(6); 
    },[])

  return (
        <div className="hero bg-base-200 w-5/6 mx-auto min-h-[90vh] mt-10 shadow-2xl">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card bg-base-100 md:w-1/2 w-full  max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h2 className="text-3xl font-bold text-center">Login</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <fieldset className="fieldset">   
                            <div>
                                <label className="label">Email</label>
                                <input type="email" {...register("email")} className="input" placeholder="Email" />
                            </div>
                            <div>
                                <label className="label">Password</label>
                                <input type="password" {...register("password")} className="input" placeholder="Password" />
                            </div>
                            <div>
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input type="text" name="captcha" ref={captchaRef} className="input" placeholder="Captchea" />
                                <button onClick={Captchahandel}  className="btn btn-outline btn-primary btn-xs w-full mt-2">Primary</button>
                            </div>
                            
                            <button type="submit" disabled={false} className="btn btn-neutral btn-bg-blue mt-4 ">Sign In</button>
                        </fieldset>
                    </form>
                    <div className='text-center items-center'>
                        <h2 className='text-center'>New hare ? <Link to={`/signup`} className='font-bold'>Create a New Account</Link></h2>
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
                <h1 className="text-5xl font-bold">Login now!</h1>
                <p className="py-6">
                    Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                    quasi. In deleniti eaque aut repudiandae et a id nisi.
                </p>
                </div>
            </div>
            
        </div>
  )
}

export default Login