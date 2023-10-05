import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged } from "firebase/auth";
import app from "../firebase/firebase.config"



export const AuthContext = createContext(null);

const auth = getAuth(app);




const AuthProvider = ({children}) => {
const [user, setUser] = useState(null);
const [loading, setLoading] = useState()


const createUser = (email, password)=>{
    return createUserWithEmailAndPassword (auth, email, password);
}


useEffect(()=>{
    onAuthStateChanged(auth, currentUser=>{
        console.log('user on the useState changed', currentUser );
        setUser(currentUser);
    });
   
return () =>{
    return()=>{
        // unSubscribe();
    }
}

},[])

const authInfo = {
    user,
    createUser,
    // logOut
}

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;