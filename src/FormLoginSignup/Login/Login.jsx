import { useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate,  validateCaptcha } from 'react-simple-captcha';


const Login = () => {
    const [disabled,setDisabled] =useState(true)
    const captchaRef = useRef(null)

    const FromHandel = e => {
        e.preventDefault();
        const email = e.target.email.value ;
        const password = e.target.password.value ;
        const result = {email,password}
        console.log(result);    
    }

    const Captchahandel = () =>{
        const userCaptchaValue  = captchaRef.current.value ;

        if (validateCaptcha( userCaptchaValue )==true) {
         setDisabled(false)
        }else {
          setDisabled(true)
        } 
        
    } 
    
    useEffect(()=>{
        loadCaptchaEnginge(6); 
    },[])
  return (
        <div className="hero bg-base-200 w-5/6 mx-auto min-h-[90vh] mt-10 shadow-2xl">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card bg-base-100 md:w-1/2 w-full  max-w-sm shrink-0 shadow-2xl">
                <div className="card-body">
                    <h2 className="text-3xl font-bold text-center">Login</h2>
                    <form onSubmit={FromHandel}>
                        <fieldset className="fieldset">   
                            <div>
                                <label className="label">Email</label>
                                <input type="email" name="email" className="input" placeholder="Email" />
                            </div>
                            <div>
                                <label className="label">Password</label>
                                <input type="password" name="password" className="input" placeholder="Password" />
                            </div>
                            <div>
                                <label className="label">
                                    <LoadCanvasTemplate />
                                </label>
                                <input type="text" name="captcha" ref={captchaRef} className="input" placeholder="Captchea" />
                                <button onClick={Captchahandel}  className="btn btn-outline btn-primary btn-xs w-full mt-2">Primary</button>
                            </div>
                            
                            <button type="submit" disabled={disabled} className="btn btn-neutral btn-bg-blue mt-4 ">Sign In</button>
                        </fieldset>
                    </form>
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