import { useLoaderData } from "react-router-dom";
import Food from "../Food/Food";
import { useState } from "react";
import { useEffect } from "react";

const AllFood = () => {
    const foods = useLoaderData();

    const [data, setData] = useState([]);
    const [isSorted, setIsSorted] = useState(false);

    useEffect(()=>{
      handleSort();
    },[isSorted])

    const handleSort = () => {
      if (isSorted) {
        const sortedData = [...foods].sort((a, b) => {
          return a.foodName.localeCompare(b.foodName, undefined, { sensitivity: 'base' });
        });
        setData(sortedData);
      } else {
        setData(foods);
      }
    }
  
    return (
        <div className="py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-4">
          <h2 className="text-center text-blue-950 font-bold text-5xl mb-16">Foods</h2>
          <div className="mb-8 text-right"><button className="btn border border-white" onClick={()=>setIsSorted(!isSorted)}>Sort by Name</button></div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {
                data?.map(food => <Food key={food._id} food={food}></Food>)
              }
          </div>
        </div>
      </div>
    );
};

export default AllFood;