import { useEffect } from "react";
import Banner from "../Banner/Banner";
import OurStory from "../OurStory/OurStory";
import Testimonials from "../Testimonials/Testimonials";
import AOS from "aos";
import "aos/dist/aos.css";
import FeaturedFoods from "../FeaturedFoods/FeaturedFoods";


const Home = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
      }, []);
    return (
        <div>
            <Banner></Banner>
            <OurStory></OurStory>
            <FeaturedFoods></FeaturedFoods>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;