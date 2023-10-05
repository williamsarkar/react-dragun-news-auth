import { Link } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import { AuthContext } from "../../Providers/AuthProvider";
import { useContext } from "react";


const Register = () => {

const {createUser}=useContext(AuthContext)


const handleRegister = e =>{
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    console.log(form.get('email'));

    const email =form.get('email');
    const password =form.get('password');
    console.log(email, password);

    createUser (email, password )
    .then(result=>{
     console.log(result.user)

    })
    .catch(error=>{
        console.error(error)
    })
}


    return (
        <div>
            <Navbar></Navbar>
            <h2 className="text-2xl font-semibold text-center">Please Register</h2>

            <form onSubmit={handleRegister} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text"> Your Name</span>
                    </label>
                    <input type="text" placeholder="Enter your name" name="name" className="input input-bordered" required />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <input type="text" placeholder="Enter your photo url" name="Photo URL" className="input input-bordered" required />
                </div>

                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input type="password" placeholder="password" name="password" className="input input-bordered" required />
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                </div>
                <div className="form-control mt-6">
                    <button className="btn btn-primary">Register</button>
                </div>
            </form>
            <p className="text-center mt-4 font-medium">Already have an account<Link to="/login" className="text-red-500"> Login</Link></p>
        </div>
    );
};

export default Register;