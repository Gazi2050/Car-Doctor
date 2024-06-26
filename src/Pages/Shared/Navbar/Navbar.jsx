import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FiSearch } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { AuthContext } from '../../../Providers/AuthProvider';
const Navbar = () => {

    const { user, logOut } = useContext(AuthContext)

    const [isOpen, setIsOpen] = useState(false);

    const handleLogout = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error))
    }

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <nav className="relative bg-white shadow dark:bg-gray-800">
                <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">
                    <div className="flex items-center justify-between">
                        <Link to="/" className='flex'>
                            <img
                                className="w-12"
                                src="/wrench.png"
                                alt=""
                            />
                            <p className='text-xl font-bold m-1'>Car Doctor</p>
                        </Link>
                        <div className="flex md:hidden lg:hidden">
                            <button
                                onClick={toggleMenu}
                                type="button"
                                className="text-gray-500 dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                                aria-label="toggle menu"
                            >
                                {isOpen ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 8h16M4 16h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>

                    <div
                        className={`absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-800 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center ${isOpen ? 'translate-x-0 opacity-100' : 'opacity-0 -translate-x-full'
                            }`}
                    >
                        <div className="flex flex-col md:flex-row md:mx-6">
                            <Link
                                to="/"
                                className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
                            >
                                Home
                            </Link>
                            <Link
                                to="/about"
                                className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
                            >
                                About
                            </Link>
                            <Link
                                to="/services"
                                className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
                            >
                                Services
                            </Link>
                            <Link
                                to="/blog"
                                className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
                            >
                                Blog
                            </Link>
                            <Link
                                to="/contact"
                                className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
                            >
                                Contact
                            </Link>
                            {user?.email ?
                                <>
                                    <Link
                                        to="/Bookings"
                                        className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
                                    >
                                        My Bookings
                                    </Link>

                                    <span>
                                        <button onClick={handleLogout} className='btn btn-sm btn-outline text-[#FF3811]'>
                                            LogOut
                                        </button>
                                    </span>

                                </>
                                :
                                <Link
                                    to="/Login"
                                    className="my-2 text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-4 md:my-0"
                                >
                                    Login
                                </Link>}
                        </div>

                        <div className="m-2 flex-row  md:block">
                            <Link
                                to="/your-link"
                                className="text-lg relative text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300"
                            >
                                <FiSearch />
                            </Link>

                        </div>
                        <div className="m-2 flex-col  md:block">
                            <Link
                                to="/your-link"
                                className="text-lg relative text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300"
                            >
                                <HiOutlineShoppingBag />
                            </Link>
                        </div>
                        <div className="m-2 flex-col  md:block">
                            <Link
                                to="/your-link"
                                className="text-lg relative text-gray-700 transition-colors duration-300 transform dark:text-gray-200 hover:text-gray-600 dark:hover:text-gray-300"
                            >
                                <button className='btn btn-outline text-[#FF3811]'>Appointment</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </nav >
        </div >
    );
};

export default Navbar;
