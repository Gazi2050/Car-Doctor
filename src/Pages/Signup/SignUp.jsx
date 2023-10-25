import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'

const SignUp = () => {
    const handleSignUp = e => {
        e.preventDefault();
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="w-1/2 mr-12">
                        <img src={img} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSignUp} className="card-body">
                            <h1 className="text-3xl font-bold text-center">Sign Up</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input name='password' type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Show password</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button type='submit' className="btn bg-[#FF3811] text-white hover:bg-black">Register</button>
                            </div>
                        </form>
                        <div className="rounded-b-xl flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
                            <span className="text-sm font-medium text-gray-600 dark:text-gray-200">Already have an account? </span>

                            <Link to='/login' className="mx-2 text-sm font-bold text-[#FF3811] hover:underline">Login</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;