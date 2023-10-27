import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
const BookService = () => {
    const service = useLoaderData();
    const { title, _id, price } = service;
    const { user } = useContext(AuthContext)
    const handleBookOrder = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = form.email.value;
        const Price = form.Price.value;
        const Order = { _id, name, date, email, Price };
        console.log(Order)
    };
    return (
        <div>
            <h2 className="text-2xl font-bold text-center mt-5">Book Service</h2>
            <form onSubmit={handleBookOrder}>
                <div className="space-y-5 bg-slate-200 p-20 rounded-md w-[80%] mx-auto my-5">
                    <p className="text-xl font-semibold">Service: {title}</p>
                    <div className="space-x-5 flex">
                        <input type="text" name="name" defaultValue={user?.displayName} placeholder="First Name" className="input input-bordered w-full " />
                        <input type="date" name="date" className="input input-bordered w-full " />
                    </div>

                    <div className="space-x-5 flex">
                        <input type="email" name="email" defaultValue={user?.email} placeholder="Your Email" className="input input-bordered w-full " />
                        <input type="text" name="Price" defaultValue={'$' + price} className="input input-bordered w-full " />
                    </div>
                    <button type="submit" className="btn w-full bg-[#FF3811] text-white hover:bg-black">Order Confirm</button>
                </div>
            </form>
        </div>
    );
};

export default BookService;