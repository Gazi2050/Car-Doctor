import img from '../../assets/images/login/login.svg'

const Login = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="w-1/2 mr-12">
                        <img src={img} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body">
                            <h1 className="text-3xl font-bold text-center">Login</h1>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-[#FF3811] text-white hover:bg-black">Login</button>
                            </div>
                        </form>
                        <div className="rounded-b-xl flex items-center justify-center py-4 text-center bg-gray-50 dark:bg-gray-700">
                            <span className="text-sm font-medium text-gray-600 dark:text-gray-200">Don't have an account? </span>

                            <a href="#" className="mx-2 text-sm font-bold text-[#FF3811] hover:underline">Register</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;