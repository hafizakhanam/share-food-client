import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateFood = () => {
    const foodData = useLoaderData();

    const { _id, foodImage, foodName,  donatorName, donatorImage, donatorEmail, foodQty, expDate, pickLocation, notes } = foodData;

    const handleUpdateProduct = event => {
        event.preventDefault();
        const form = event.target;

        const foodImage = form.foodImage.value;
        const foodName = form.foodName.value;
        const donatorName = form.donatorName.value;
        const donatorImage = form.donatorImage.value;
        const donatorEmail = form.donatorEmail.value;
        const foodQty = form.foodQty.value;
        const pickLocation = form.pickLocation.value;
        const expDate = form.expDate.value;
        const notes = form.notes.value;

        const updateFood = { foodImage, foodName, donatorName, donatorImage, donatorEmail, foodQty, pickLocation, notes, expDate }

        //console.log(updateFood);

        // send data to the server
        fetch(`https://share-food-server.vercel.app/food/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateFood)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.modifiedCount > 0){
                Swal.fire({
                    title: 'Success!',
                    text: 'Food Updated Successfully',
                    icon: 'success',
                    confirmButtonText: 'OK'
                    })
            }
        })
    }
    return (
        <div className="py-24 bg-white">
            <div className="max-w-[1280px] mx-auto px-4">
                <h2 className="text-5xl font-extrabold mb-20 text-center text-blue-950">Update - {foodName}</h2>
                    <form onSubmit={handleUpdateProduct}>
                        <div className="md:flex mb-8">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Food Image</span>
                                </label>
                                <input type="text" name="foodImage" defaultValue={foodImage} className="input input-bordered w-full bg-white" />
                            </div>
                            <div className="form-control md:w-1/2 ml-4">
                                <label className="label">
                                    <span className="label-text">Food Name</span>
                                </label>
                                <input type="text" name="foodName" defaultValue={foodName} className="input input-bordered w-full bg-white" />
                            </div>
                        </div>
                        {/* form supplier row */}
                        <div className="md:flex mb-8">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Donator Image URL</span>
                                </label>
                                <input type="text" name="donatorImage" defaultValue={donatorImage} className="input input-bordered w-full bg-white" />
                            </div>
                            
                            <div className="form-control md:w-1/2 ml-4">
                                <label className="label">
                                    <span className="label-text">Donator Name</span>
                                </label>
                                <input type="text" name="donatorName" defaultValue={donatorName} className="input input-bordered w-full bg-white" />
                            </div>
                        </div>
                        {/* form category and details row */}
                        <div className="md:flex mb-8">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Donator Email</span>
                                </label>
                                <input type="text" name="donatorEmail" defaultValue={donatorEmail} className="input input-bordered w-full bg-white" />
                            </div>
                            <div className="form-control md:w-1/2 ml-4">
                                <label className="label">
                                    <span className="label-text">Food Quantity</span>
                                </label>
                                <input type="text" name="foodQty" defaultValue={foodQty} className="input input-bordered w-full bg-white" />
                            </div>

                        </div>
                        {/* form Photo url row */}
                        <div className="md:flex mb-8">
                            <div className="form-control md:w-1/2">
                                <label className="label">
                                    <span className="label-text">Expired Date</span>
                                </label>
                                <input type="text" name="expDate" defaultValue={expDate} className="input input-bordered w-full bg-white" />
                            </div>
                            <div className="form-control md:w-1/2 ml-4">
                                <label className="label">
                                    <span className="label-text">Pickup Location</span>
                                </label>
                                <input type="text" name="pickLocation" defaultValue={pickLocation} className="input input-bordered w-full bg-white" />
                            </div>
                        </div>

                        <div className="mb-8">
                            <div className="form-control md:w-full">
                                <label className="label">
                                    <span className="label-text">Additional Notes</span>
                                </label>
                                <input type="text" name="notes" defaultValue={notes} className="input input-bordered w-full bg-white" />
                            </div>
                        </div>
                        <input type="submit" value="Update Food" className="btn btn-block bg-pink-800 mt-8" />

                    </form>
            </div>
        </div>
    );
};

export default UpdateFood;