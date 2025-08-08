import { createContext, useEffect, useState } from "react"
import auth from "../Fairebase/fairebase.config";
import { createUserWithEmailAndPassword,onAuthStateChanged,signInWithEmailAndPassword, signInWithPopup, signOut ,GoogleAuthProvider, updateProfile } from "firebase/auth";
import useAxiosPublic from "../Hooks/useAxiosPublic";
const googleProvider = new GoogleAuthProvider();
export const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const AxiosPublic = useAxiosPublic() 

    // Create User
    const createUser = (email,password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth , email ,password)
    }
    
    // Sign in user 
    const signIn = (email,password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth , email ,password)
    }

    // GoogleSignIn

    const GoogleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }

    // Sign Out
    const logOut = () =>{
        setLoading(true)
        localStorage.removeItem('access-token');
        return signOut(auth)
    }

    // update user Profile 

    const updateUserProfile  = (name,photoURL) =>{
        if(auth.currentUser) {
            return updateProfile(auth.currentUser , {
                displayName : name ,
                photoURL: photoURL || null
            })
        }else{
            return Promise.reject("No user is currently signed in.")
        }
    }
    // Observe user state

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
            if(currentUser){
                const userInfo = { email : currentUser.email}
                AxiosPublic.post('/jwt', userInfo)
                    .then(res => {
                        if(res.data.token){
                           localStorage.setItem('access-token',res.data.token)
                           console.log(res.data.token);
                        }
                    })
    
            }else{
                localStorage.removeItem('access-item')
            }
            setLoading(false)
        })
        return () => unsubscribe() ;
    },[])

    const authInfo  = {
            user,
            loading,
            createUser,
            signIn,
            GoogleSignIn,
            logOut,
            updateUserProfile 
    }
  return (
    <AuthContext.Provider value={authInfo }>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider