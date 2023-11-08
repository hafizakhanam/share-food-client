import { useState } from "react";
import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";


const ManageSingleFood = () => {
    const foodData = useLoaderData();

    const { foodName, uID } = foodData; 

    const [requestData, setRequestData] = useState([]);
    useEffect( ()=>{
        fetch(`http://localhost:5000/manage-food/${uID}`)
        .then(res => res.json())
        .then(data => setRequestData(data))
    },[])
    
    return (
        <div className="py-24 bg-white">
            <div className="max-w-[1380px] mx-auto px-4">
                <div className="overflow-x-auto min-h-screen">
                <h2 className="text-5xl font-extrabold mb-20 text-center text-blue-950">Manage - {foodName}</h2>
                    <ul className="text-black">
                        <li className="mb-3"><strong>Requester Name: </strong></li>
                        <li className="mb-3"><strong>Requester Image: </strong></li>
                        <li className="mb-3"><strong>Requester Email: </strong></li>
                        <li className="mb-3"><strong>Request Date: </strong></li>
                        <li className="mb-3"><strong>Status: </strong></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ManageSingleFood;