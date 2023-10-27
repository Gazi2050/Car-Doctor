import { useLoaderData } from "react-router-dom";


const Checkout = () => {
    const service = useLoaderData();
    const { title, _id } = service;
    console.log(_id)
    return (
        <div>
            <h2>Book Service:{title}</h2>
            <form>
                <div className="space-y-5 bg-slate-200 p-20 rounded-md w-[80%] mx-auto my-5">
                    <div className="space-x-5 flex">
                        <input type="text" placeholder="First Name" className="input input-bordered w-full " />
                        <input type="text" placeholder="Last Name" className="input input-bordered w-full " />
                    </div>

                    <div className="space-x-5 flex">
                        <input type="text" placeholder="Your Phone" className="input input-bordered w-full " />
                        <input type="text" placeholder="Your Email" className="input input-bordered w-full " />
                    </div>
                    <input type="text" placeholder="Your Message" className="input input-bordered w-full py-10" />
                    <button type="submit" className="btn w-full bg-[#FF3811] text-white hover:bg-black">Order Confirm</button>
                </div>
            </form>
        </div>
    );
};

export default Checkout;