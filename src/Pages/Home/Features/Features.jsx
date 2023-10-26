import { BsFillPeopleFill } from "react-icons/bs";
import { AiOutlineFieldTime, AiFillSafetyCertificate } from "react-icons/ai";
import { BiSupport } from "react-icons/bi";
import { HiMiniWrenchScrewdriver, HiCube } from "react-icons/hi2";

const Features = () => {
    const iconStyle = {
        color: "#FF3811",
        transition: "color 0.3s",
    };

    const containerStyle = {
        border: "1px solid #FF3811",
        textAlign: "center",
        borderRadius: "0.5rem",
        padding: "1rem",
        transition: "border-color 0.3s, background-color 0.3s",
    };

    const handleMouseEnter = (event) => {
        event.currentTarget.style.backgroundColor = "#FF3811";
        event.currentTarget.style.color = "white";
        event.currentTarget.style.borderColor = "black";
        event.currentTarget.querySelector(".icon").style.color = "white";
    };

    const handleMouseLeave = (event) => {
        event.currentTarget.style.backgroundColor = "transparent";
        event.currentTarget.style.color = "black";
        event.currentTarget.style.borderColor = "#FF3811";
        event.currentTarget.querySelector(".icon").style.color = "#FF3811";
    };

    return (
        <div className="p-2">
            <div className="text-center space-y-5">
                <h3 className="text-[#FF3811] font-bold">Core Features</h3>
                <h1 className="text-3xl font-bold">Why Choose Us</h1>
                <p>
                    the majority have suffered alteration in some form, by injected humour, or randomized <br /> words which do not look even slightly believable.
                </p>
            </div>
            <div className="md:flex md:space-x-3 md:space-y-0 lg:flex justify-center items-center space-y-3 lg:space-x-3 mt-5">
                <div
                    style={containerStyle}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <BsFillPeopleFill className="mx-auto text-4xl icon" style={iconStyle} />
                    <p className="font-bold">Expert Team</p>
                </div>
                <div
                    style={containerStyle}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <AiOutlineFieldTime className="mx-auto text-4xl icon" style={iconStyle} />
                    <p className="font-bold">Timely Delivery</p>
                </div>
                <div
                    style={containerStyle}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <BiSupport className="mx-auto text-4xl icon" style={iconStyle} />
                    <p className="font-bold">24/7 Support</p>
                </div>
                <div
                    style={containerStyle}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <HiMiniWrenchScrewdriver className="mx-auto text-4xl icon" style={iconStyle} />
                    <p className="font-bold">Best Equipment</p>
                </div>
                <div
                    style={containerStyle}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <AiFillSafetyCertificate className="mx-auto text-4xl icon" style={iconStyle} />
                    <p className="font-bold">100% Guarantee</p>
                </div>
                <div
                    style={containerStyle}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                >
                    <HiCube className="mx-auto text-4xl icon" style={iconStyle} />
                    <p className="font-bold">Timely Delivery</p>
                </div>
            </div>
        </div>
    );
};

export default Features;
