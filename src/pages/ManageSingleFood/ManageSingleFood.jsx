import { useLoaderData } from "react-router-dom";


const ManageSingleFood = () => {
    const foodData = useLoaderData();

    const { foodName, donatorName, donatorImage, donatorEmail, uID } = foodData; 
    
    return (
        <div className="py-24 bg-white">
            <div className="max-w-[1280px] mx-auto px-4">
                <div className="overflow-x-auto min-h-screen">
                <h2 className="text-5xl font-extrabold mb-20 text-center text-blue-950">Manage - {foodName}</h2>
                    <ul className="text-black">
                        <li className="mb-3"><strong>Requester Name: </strong>{donatorName}</li>
                        <li className="mb-3 flex"><strong>Requester Image: </strong><img className="w-20 ml-2" src={donatorImage} /></li>
                        <li className="mb-3"><strong>Requester Email: </strong>{donatorEmail}</li>
                        <li className="mb-3"><strong>Request Date: </strong></li>
                        <li className="mb-3"><strong>Status: </strong><button className="btn bg-pink-800">Pending</button></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ManageSingleFood;