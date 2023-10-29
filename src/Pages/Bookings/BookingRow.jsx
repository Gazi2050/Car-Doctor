import { FcAutomatic } from "react-icons/fc";

const BookingRow = ({ booking }) => {
    const { customerName, email, bookingDate, service, price, img } = booking;
    return (
        <tr>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
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
                <button className="btn btn-ghost btn-xs">details</button>
            </th>
        </tr>
    );
};

export default BookingRow;