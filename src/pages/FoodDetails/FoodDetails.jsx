import {  useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'
import { AuthContext } from "../../providers/AuthProvider";
import { useContext } from "react";

const FoodDetails = () => {
    const foodData = useLoaderData();
    const { _id, foodImage, foodName, donatorName, donatorEmail, foodQty, pickLocation, notes, expDate } = foodData;
    const { user } = useContext(AuthContext);

    const date = new Date();

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const currentDate = `${year}-${month}-${day}`;

    const handleRequest = event =>{
        event.preventDefault();
        const form = event.target;

        const uID = user.uid;
        const uEmail = user?.email;

        const foodImage = form.foodImage.value;
        const foodName = form.foodName.value;
        const foodId = form.foodId.value;
        const donatorName = form.donatorName.value;
        const donatorEmail = form.donatorEmail.value;
        const pickLocation = form.pickLocation.value;
        const expDate = form.expDate.value;
        const reqDate = form.reqDate.value;
        const notes = form.notes.value;
        const donationMoney = form.donationMoney.value;

        const requestData ={ foodImage, foodName, foodId, donatorName, donatorEmail, uID, uEmail, pickLocation, expDate, reqDate, notes, donationMoney }
        //console.log(request);

        // send data to the server
        fetch('https://share-food-server.vercel.app/request', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(requestData)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    position: "top-end",
                    width: 300,
                    text: 'Request Added Successfully',
                    confirmButtonText: 'Ok'
                    })
            }
        })
    }
    return (
        <div className="m-0">
            <div className="py-40 bg-white">
                <div className="max-w-[1340px] mx-auto px-4">
                    <h2 className="text-blue-950 font-bold text-2xl mb-2 underline">Donor Information:</h2>
                        <ul>
                            <li><p className="text-[#0B0B0BB2] text-justify"><span className="text-lg font-semibold text-blue-950">Donar Name:</span> {donatorName}</p></li>
                            <li><p className="text-[#0B0B0BB2] text-justify"><span className="text-lg font-semibold text-blue-950">Food Pickup Location:</span> {pickLocation}</p></li>
                        </ul>
                    <h2 className="text-blue-950 font-bold text-4xl my-16 text-center underline">{foodName}</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <img className="text-center rounded-lg w-full" src={foodImage} alt="Image" />
                        <div className="pl-8">
                            <h2 className="card-title text-lg font-semibold text-blue-950">Food Quantity: <span className="text-sm">{foodQty}</span></h2>
                            <h2 className="card-title text-lg font-semibold text-blue-950 mb-5">Expired Date: <span className="text-sm">{expDate}</span></h2>
                            <p>Details: {notes}</p>

                            <button className="btn mt-4 bg-pink-800" onClick={()=>document.getElementById('my_modal_4').showModal()}>Request Food</button>
                            <dialog id="my_modal_4" className="modal">
                                <div className="modal-box w-9/12 max-w-4xl">
                                    
                                    <form method="dialog">
                                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                    </form>
                                    
                                    <h2 className="text-white font-bold text-3xl mb-4 text-center">{foodName}</h2>
                                    <form onSubmit={handleRequest}>
                                        {/* form name and quantity row */}
                                        <div className="md:flex mb-1">
                                            <div className="form-control md:w-1/2">
                                                <label className="label">
                                                    <span className="label-text">Food Image</span>
                                                </label>
                                                <input type="text" name="foodImage" defaultValue={foodImage} className="input h-10 input-bordered w-full bg-white" readOnly />
                                            </div>
                                            <div className="form-control md:w-1/2 ml-4">
                                                <label className="label">
                                                    <span className="label-text">Food Name</span>
                                                </label>
                                                <input type="text" name="foodName" defaultValue={foodName} className="input h-10 input-bordered w-full bg-white" readOnly />
                                            </div>
                                        </div>
                                        {/* form supplier row */}
                                        <div className="md:flex mb-1">
                                            <div className="form-control md:w-1/2">
                                                <label className="label">
                                                    <span className="label-text">Food ID</span>
                                                </label>
                                                <input type="text" name="foodId"  defaultValue={_id} className="input h-10 input-bordered w-full bg-white" readOnly />
                                            </div>
                                            
                                            <div className="form-control md:w-1/2 ml-4">
                                                <label className="label">
                                                    <span className="label-text">User email</span>
                                                </label>
                                                <input type="text" name="userEmail"  defaultValue={user?.email} className="input h-10 input-bordered w-full bg-white" readOnly />
                                            </div>
                                        </div>
                                        {/* form category and details row */}
                                        <div className="md:flex mb-1">
                                            <div className="form-control md:w-1/2">
                                                <label className="label">
                                                    <span className="label-text">Donator email</span>
                                                </label>
                                                <input type="text" name="donatorEmail"  defaultValue={donatorEmail} className="input h-10 input-bordered w-full bg-white" readOnly />
                                            </div>
                                            <div className="form-control md:w-1/2 ml-4">
                                                <label className="label">
                                                    <span className="label-text">Donator Name</span>
                                                </label>
                                                <input type="text" name="donatorName" defaultValue={donatorName} className="input h-10 input-bordered w-full bg-white" readOnly />
                                            </div>
                                        </div>
                                        {/* form Photo url row */}
                                        <div className="md:flex mb-1">
                                            <div className="form-control md:w-1/2">
                                                <label className="label">
                                                    <span className="label-text">Request Date</span>
                                                </label>
                                                <input type="date" name="reqDate" defaultValue={currentDate} className="input h-10 input-bordered w-full bg-white" readOnly />
                                            </div>
                                            <div className="form-control md:w-1/2 ml-4">
                                                <label className="label">
                                                    <span className="label-text">Expire Date</span>
                                                </label>
                                                <input type="date" name="expDate" defaultValue={expDate} className="input h-10 input-bordered w-full bg-white" readOnly />
                                            </div>
                                        </div>

                                        <div className="mb-1">
                                            <div className="form-control md:w-full">
                                                <label className="label">
                                                    <span className="label-text">Pickup Location</span>
                                                </label>
                                                <input type="text" name="pickLocation" defaultValue={pickLocation} className="input h-10 input-bordered w-full bg-white" readOnly />
                                            </div>
                                        </div>

                                        <div className="md:flex mb-1">
                                            <div className="form-control md:w-1/2">
                                                <label className="label">
                                                    <span className="label-text">Additional Notes</span>
                                                </label>
                                                <input type="text" name="notes" className="input h-10 input-bordered w-full bg-white" />
                                            </div>
                                            <div className="form-control md:w-1/2 ml-4">
                                                <label className="label">
                                                    <span className="label-text">Donation Money</span>
                                                </label>
                                                <input type="number" name="donationMoney" className="input h-10 input-bordered w-full bg-white" />
                                            </div>
                                        </div>
                                        <input type="submit" value="Send Request" className="btn btn-block bg-pink-800 mt-4" />

                                    </form>
                                </div>
                            </dialog>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        

    );
};

export default FoodDetails;