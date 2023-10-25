import { BsFillCalendarDateFill } from "react-icons/bs";
import { PiPhoneCallFill } from "react-icons/pi";
import { FaLocationDot } from "react-icons/fa6";
const Contact = () => {
    return (
        <div className="bg-black p-12 text-white rounded-lg lg:flex md:flex justify-evenly items-center space-y-10 lg:space-y-0 md:space-y-0">
            <div className="flex justify-center items-center mr-4">
                <div>
                    <BsFillCalendarDateFill className="text-4xl m-1 text-[#FF3811]" />
                </div>
                <div>
                    <p className="text-sm">We are open monday-friday</p>
                    <h3 className="text-xl lg:text-2xl font-semibold">7:00 am - 9:00 pm</h3>
                </div>
            </div>
            <div className="flex justify-center items-center mr-4">
                <div>
                    <PiPhoneCallFill className="text-4xl m-1 text-[#FF3811]" />
                </div>
                <div>
                    <p className="text-sm">Have a question?</p>
                    <h3 className="text-xl lg:text-2xl font-semibold">+2546 251 2658</h3>
                </div>
            </div>
            <div className="flex justify-center items-center mr-4 md:mr-0 lg:mr-0">
                <div>
                    <FaLocationDot className="text-4xl m-1 text-[#FF3811]" />
                </div>
                <div>
                    <p className="text-sm">Need a repair? our address</p>
                    <h3 className="text-xl lg:text-2xl font-semibold">Liza Street, New York</h3>
                </div>
            </div>

        </div>
    );
};

export default Contact;