import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Swal from 'sweetalert2'



const FoodRequest = () => {
    const { user } = useContext(AuthContext);
    const uID = user?.uid;
    console.log(uID)
    const [requestData, setRequestData] = useState([]);

    useEffect( ()=>{
        fetch(`https://share-food-server.vercel.app/request/${uID}`)
        .then(res => res.json())
        .then(data => setRequestData(data))
    },[])

    const handleDelete = id =>{
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) { 
                fetch(`https://share-food-server.vercel.app/request/${id}`, {
                    method: 'DELETE'
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if(data.deletedCount > 0){
                        Swal.fire({
                            title: 'Deleted!',
                            text: 'Request Deleted Successfully',
                            icon: 'success',
                            confirmButtonText: 'Ok'
                        })
                        const remaining = requestData.filter(request => request._id !== id);
                        setRequestData(remaining);
                    }
                })
            }
        });
    }
    return (

        <div className="py-24 bg-white">
            <div className="max-w-[1280px] mx-auto px-4">
                <div className="overflow-x-auto min-h-screen">
                <h2 className="text-blue-950 font-bold text-4xl my-16 text-center underline">Requested Food List</h2>
                    <table className="table text-black">
                        {/* head */}
                        <thead className="text-black">
                        <tr>
                            <th>SL</th>
                            <th>Donar Name</th>
                            <th>Pickup Location</th>
                            <th>Expire Date</th>
                            <th>Request Date</th>
                            <th>Your Donation Amount</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                                requestData.map((request, index) => <tr key={request._id}>
                                    <th>
                                        <label>{(index + 1)}</label>
                                    </th>
                                    <td>{request.donatorName}</td>
                                    <td>{request.pickLocation}</td>
                                    <td>{request.expDate}</td>
                                    <td>{request.reqDate}</td>
                                    <td>{request.donationMoney}</td>
                                    <td><div className="badge bg-blue-950">Pending</div></td>
                                    <td>
                                        <div className="flex items-center">
                                            <button className="btn bg-pink-800 w-[30px] h-[30px] ml-2" onClick={() =>  handleDelete(request._id)}>X</button>
                                        </div>
                                    </td>
                                </tr>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default FoodRequest;