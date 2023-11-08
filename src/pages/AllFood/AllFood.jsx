import { useLoaderData } from "react-router-dom";
import Food from "../Food/Food";
import { useState } from "react";
import { useEffect } from "react";
import Carousel from "react-elastic-carousel";

const AllFood = () => {
    const foods = useLoaderData();

    const [data, setData] = useState([]);
    const [isSorted, setIsSorted] = useState(false);
    const [isSearch, setIsSearch] = useState(false);

    useEffect(()=>{
      handleSort();
      handleSearch();
    },[isSorted, isSearch])

    const handleSort = () => {
      if (isSorted) {
        const sortedData = [...foods].sort((a, b) => {
          return a.expDate.localeCompare(b.expDate, undefined, { sensitivity: 'base' });
        });
        setData(sortedData);
      } else {
        setData(foods);
      }
    }
    const handleSearch = () => {
      if (isSorted) {
        const sortedData = [...foods].sort((a, b) => {
          return a.expDate.localeCompare(b.expDate, undefined, { sensitivity: 'base' });
        });
        setData(sortedData);
      } else {
        setData(foods);
      }
    }
  
    return (
      <div className="py-24 bg-white">
        <div className="max-w-[1280px] mx-auto px-4">
          <Carousel itemsToShow={1}>
            <img src="https://i.ibb.co/sWj6CFG/footer-banner.webp" />
            <img src="https://i.ibb.co/sWj6CFG/footer-banner.webp" />
            <img src="https://i.ibb.co/sWj6CFG/footer-banner.webp" />
          </Carousel>
          
          <h2 className="text-center text-blue-950 font-bold text-5xl my-16">Foods</h2>
          <div className="mb-8 text-right flex justify-between">
              <form onSubmit={handleSearch}>
                    <div className="form-control w-[300px] inline-block">
                      <input type="search" placeholder="Search here" name="search" className="input input-bordered border-pink-800 w-full bg-white" />
                    </div>
                    <input type="submit" value="Search" className="btn inline-block bg-pink-800 ml-2" />
              </form>
              <button className="btn bg-pink-800" onClick={()=>setIsSorted(!isSorted)}>Sort by Expire Date</button>
          </div>
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