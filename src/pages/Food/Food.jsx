import { Link } from "react-router-dom";
import { motion } from "framer-motion"

const Food = ({food}) => {
    const { _id, foodImage, foodName, donatorImage, donatorName, foodQty, pickLocation, notes, expDate } = food;
    return (
        
        <motion.div whileHover={{ scale: 0.9 }} className="card bg-blue-50">
            <img className="rounded-t-lg max-h-60" src={foodImage} alt="Image" />
            
            <div className="card-body flex justify-between bg-blue-950 rounded-b-lg">
                
                <h2 className="card-title text-3xl font-semibold text-center block mb-6">{foodName}</h2>
                <h3 className="text-base font-bold">Food Quantity: <span className="font-normal">for {foodQty} person</span></h3>
                <h3 className="text-base font-bold">Pickup Location: <span className="font-normal">{pickLocation}</span></h3>
                <h3 className="text-base font-bold">Expired Date: <span className="font-normal">{expDate}</span></h3>
                <h3 className="text-base font-bold">Additional Notes: <span className="font-normal">{notes}</span></h3>
                <div className="flex align-center justify-center mt-8">
                    <h3 className="text-xl font-semibold">Donor: </h3>
                    <img className="rounded-full mx-5 max-h-8" src={donatorImage} alt="Image" />
                    <h3 className="text-base">{donatorName}</h3>
                </div>
                <Link to={`/food/${_id}`}><button className="btn bg-pink-800 mt-5 w-full">Details</button></Link>

            </div>
        </motion.div>
        
    );
};

export default Food;