import {  useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
import { AuthContext } from "../../providers/AuthProvider";
import { useContext } from "react";


const ManageFood = () => {
    //const foods = useLoaderData();

    const { user } = useContext(AuthContext);
    const uID = user?.uid;
    const [manageFoods, setManageFoods] = useState([]);
    console.log(uID)
    useEffect( ()=>{
        fetch(`https://share-food-server.vercel.app/manage-food/${uID}`)
        .then(res => res.json())
        .then(data => setManageFoods(data))
    },[])

    const handleDelete = _id =>{
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
              fetch(`https://share-food-server.vercel.app/food/${_id}`, {
                method: 'DELETE'
              })
              .then(res => res.json())
              .then(data => {
                console.log(data)
                if(data.deletedCount > 0){
                    Swal.fire({
                        title: "Deleted!",
                        text: "Your food has been deleted.",
                        icon: "success"
                    });
                    const remainingFoods = manageFoods.filter(food => food._id !== _id);
                    setManageFoods(remainingFoods);
                }
              })
            }
        });
    }
    
    return (
        <div className="py-24 bg-white">
            <div className="max-w-[1420px] mx-auto px-4">
                <div className="overflow-x-auto min-h-screen">
                    <table className="table text-black">
                        {/* head */}
                        <thead className="text-black">
                        <tr>
                            <th>Food Image</th>
                            <th>Food Name</th>
                            <th>Donator Image</th>
                            <th>Donar Name</th>
                            <th>Donator Email</th>
                            <th>Food Quantity</th>
                            <th>Expire Date</th>
                            <th>Pickup Location</th>
                            <th>Additional Notes</th>
                            <th>Action</th>
                            <th>Manage Food</th>
                        </tr>
                        </thead>
                        <tbody>
                            {
                            manageFoods.map((food) => <tr key={food._id}>
                                <td><img src={food.foodImage} /></td>
                                <td>{food.foodName}</td>
                                <td><img className="w-12" src={food.donatorImage} /></td>
                                <td>{food.donatorName}</td>
                                <td>{food.donatorEmail}</td>
                                <td>{food.foodQty}</td>
                                <td>{food.expDate}</td>
                                <td>{food.pickLocation}</td>
                                <td>{food.notes}</td>
                                <td>
                                    <div className="flex items-center">
                                        <Link className="w-[40px]" to={`/updateFood/${food._id}`}><img src="https://i.ibb.co/vj7LcH5/9349889.png" /></Link>
                                        <button className="btn bg-pink-800 w-[30px] h-[30px] ml-2" onClick={() =>  handleDelete(food._id)}>X</button>
                                    </div>
                                </td>
                                <td>
                                    <Link className="w-[40px]" to={`/manageFood/${food._id}`}><button className="btn bg-pink-800">Manage</button></Link>
                                </td>
                            </tr>)}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageFood;