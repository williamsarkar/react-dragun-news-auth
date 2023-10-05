import { useContext } from "react";
import AuthProvider, { AuthContext } from "../Providers/AuthProvider";
import { Navigate } from "react-router-dom";


const PrivateRout = ({children}) => {
    const {user} = useContext(AuthContext);

if(user){
    return childredn;
}
        

    return <Navigate to="/login"></Navigate>;
};

export default PrivateRout;