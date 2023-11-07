import { Link, useLoaderData } from "react-router-dom";
import Food from "../Food/Food";

const FeaturedFoods = () => {

    const foods = useLoaderData();
    const sortedFood = foods.sort((a,b) => {
        console.log(a, b);
        return b.foodQty - a.foodQty;
    })
    
    const featuredItems = sortedFood.slice(0,6);
    console.log(featuredItems)
    return (
        <div className="py-24 bg-white">
            <div className="max-w-[1280px] mx-auto px-4">
                <h2 className="text-center text-blue-950 font-bold text-5xl mb-16">Featured Foods</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {
                       featuredItems.map(food => <Food key={food._id} food={food}></Food>)
                    }
                </div> 
                <div className="text-center">
                    <button className="btn bg-pink-800 mt-12"><Link to="/foods">Show All</Link></button>
                </div>
            </div> 
        </div>
    );
};

export default FeaturedFoods;