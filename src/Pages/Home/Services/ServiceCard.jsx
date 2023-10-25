
import { BsFillArrowRightCircleFill } from "react-icons/bs";
const ServiceCard = ({ service }) => {
    const { title, img, price } = service;
    return (
        <div>
            <div className="card w-full h-full bg-white border-2 rounded-lg ">
                <figure className="p-6">
                    <img src={img} alt="Shoes" className="rounded-lg" />
                </figure>
                <div className="card-body ">
                    <h2 className="card-title">{title}</h2>
                    <p className="text-xl text-[#FF3811] font-semibold">Price: {price}</p>
                    <div className="card-actions  ml-auto ">
                        <BsFillArrowRightCircleFill className="text-[#FF3811] text-3xl hover:text-black cursor-pointer" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;