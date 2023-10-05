import { Link } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";


const Login = () => {

const handleLogin = e => {
    e.preventDefault()
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password)
}


    return (
        <div>
            <Navbar></Navbar>
            <h2 className="text-2xl font-semibold text-center">Please Login</h2>

            <form onSubmit={handleLogin} className="card-body">
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
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                        <p className="text-center mt-4 font-medium">Do not have an account<Link to="/register" className="text-red-500"> Register</Link></p>
        </div>
    );
};

export default Login;