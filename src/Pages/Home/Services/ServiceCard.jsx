
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Link } from "react-router-dom";
const ServiceCard = ({ service }) => {
    const { _id, title, img, price } = service;
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
                        <Link to={`/BookService/${_id}`}>
                            <BsFillArrowRightCircleFill className="text-[#FF3811] text-3xl hover:text-black" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;