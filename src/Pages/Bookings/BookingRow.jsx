import { FcAutomatic } from "react-icons/fc";

const BookingRow = ({ booking, handleDelete, handleBookingConfirm }) => {
    const { _id, customerName, email, bookingDate, service, price, img, status } = booking;



    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-outline">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    {img ? ( // Check if 'img' is present in the booking object
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={img} />
                            </div>
                        </div>
                    ) : <FcAutomatic className="text-5xl" />}
                    <div>
                        <div className="font-bold">{customerName}</div>
                        <div className="text-sm opacity-50">{email}</div>
                    </div>
                </div>
            </td>
            <td>
                {service}
                <br />
                <span className="badge badge-ghost badge-sm">{bookingDate}</span>
            </td>
            <td>{price}</td>
            <th>
                {
                    status === 'confirm' ? <span className="font-bold text-primary">Confirmed</span> :
                        <button onClick={() => handleBookingConfirm(_id)} className="btn btn-ghost btn-xs">Please Confirm</button>
                }
            </th>
        </tr>
    );
};

export default BookingRow;