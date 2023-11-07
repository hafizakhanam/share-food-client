import Swal from 'sweetalert2'
import { AuthContext } from "../../providers/AuthProvider";
import { useContext } from "react";

const AddFood = () => {
    const { user } = useContext(AuthContext);
    const handleAddFood = event => {
        event.preventDefault();

        const form = event.target;

        const uID = user.uid;

        const foodImage = form.foodImage.value;
        const foodName = form.foodName.value;
        const donatorImage = form.donatorImage.value;
        const donatorName = form.donatorName.value;
        const donatorEmail = form.donatorEmail.value;
        const foodQty = form.foodQty.value;
        const pickLocation = form.pickLocation.value;
        const expDate = form.expDate.value;
        const notes = form.notes.value;

        const newFood = { foodImage, foodName, donatorImage,  donatorName, donatorEmail, foodQty, pickLocation, notes, expDate, uID }

        //console.log(newProduct);

        // send data to the server
        fetch('http://localhost:5000/food', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newFood)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Food Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                    })
            }
        })
    }
    return (
        <div className="py-24 bg-white">
            <div className="max-w-[1280px] mx-auto px-4">
                <h2 className="text-5xl font-extrabold mb-20 text-center text-blue-950">Add a Food</h2>
                    <form onSubmit={handleAddFood}>
                        {/* form name and quantity row */}
                        <div className="md:flex mb-8">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Food Image</span>
                                </label>
                                <input type="text" name="foodImage" className="input input-bordered w-full bg-white" />
                            </div>
                            <div className="form-control md:w-1/2 ml-4">
                                <label className="label">
                                    <span className="label-text">Food Name</span>
                                </label>
                                <input type="text" name="foodName" className="input input-bordered w-full bg-white" />
                            </div>
                        </div>
                        {/* form supplier row */}
                        <div className="md:flex mb-8">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Donator Image URL</span>
                                </label>
                                <input type="text" name="donatorImage" className="input input-bordered w-full bg-white" />
                            </div>
                            
                            <div className="form-control md:w-1/2 ml-4">
                                <label className="label">
                                    <span className="label-text">Donator Name</span>
                                </label>
                                <input type="text" name="donatorName" className="input input-bordered w-full bg-white" />
                            </div>
                        </div>
                        {/* form category and details row */}
                        <div className="md:flex mb-8">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Donator Email</span>
                                </label>
                                <input type="email" name="donatorEmail" className="input input-bordered w-full bg-white" />
                            </div>
                            <div className="form-control md:w-1/2 ml-4">
                                <label className="label">
                                    <span className="label-text">Food Quantity</span>
                                </label>
                                <input type="number" name="foodQty" className="input input-bordered w-full bg-white" />
                            </div>

                        </div>
                        {/* form Photo url row */}
                        <div className="md:flex mb-8">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Expired Date</span>
                                </label>
                                <input type="date" name="expDate" className="input input-bordered w-full bg-white" />
                            </div>
                            <div className="form-control md:w-1/2 ml-4">
                                <label className="label">
                                    <span className="label-text">Pickup Location</span>
                                </label>
                                <input type="text" name="pickLocation" className="input input-bordered w-full bg-white" />
                            </div>
                        </div>

                        <div className="mb-8">
                            <div className="form-control md:w-full">
                                <label className="label">
                                    <span className="label-text">Additional Notes</span>
                                </label>
                                <input type="text" name="notes" className="input input-bordered w-full bg-white" />
                            </div>
                        </div>
                        <input type="submit" value="Add Food" className="btn btn-block bg-blue-950 mt-8" />

                    </form>
            </div>
        </div>
    );
};

export default AddFood;