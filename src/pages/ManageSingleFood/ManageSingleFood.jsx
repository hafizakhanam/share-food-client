import { useLoaderData } from "react-router-dom";


const ManageSingleFood = () => {
    const requestData = useLoaderData();

    const { foodImage, foodName, donatorImage,  donatorName, donatorEmail, foodQty, pickLocation, notes, expDate, uID } = requestData; 
    return (
        <div className="py-24 bg-white">
            <div className="max-w-[1380px] mx-auto px-4">
                <div className="overflow-x-auto min-h-screen">
                <h2 className="text-5xl font-extrabold mb-20 text-center text-blue-950">Manage - {foodName}</h2>
                    <ul>
                        <li><strong>Requester Name: </strong></li>
                        <li><strong>Requester Image: </strong></li>
                        <li><strong>Requester Email: </strong></li>
                        <li><strong>Request Date: </strong></li>
                        <li><strong>Status: </strong></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ManageSingleFood;