import { createContext, useEffect, useState } from "react"
import auth from "../Fairebase/fairebase.config";
import { createUserWithEmailAndPassword,onAuthStateChanged,signInWithEmailAndPassword, signInWithPopup, signOut ,GoogleAuthProvider } from "firebase/auth";
const googleProvider = new GoogleAuthProvider();
export const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

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
        return signOut(auth)
    }
    // Observe user state

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser)
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
    }
  return (
    <AuthContext.Provider value={authInfo }>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider