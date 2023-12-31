const Banner = () => {
    return (
        <div className="py-24 md:py-40 banner-area bg-no-repeat bg-center bg-cover" style={{ 
            backgroundImage: `url('https://i.ibb.co/4PthRbH/gallery-banner.jpg')` 
          }}>
            <div className="max-w-[400px] mx-auto px-4">
                <div className="bg-blue-950 bg-opacity-50 p-12 rounded-lg">
                    <h1 data-aos="fade-left" className="text-white font-medium text-5xl text-center leading-[4rem]">Share your<br/><span className="uppercase font-bold">Food</span><br/>with others</h1>
                </div>
            </div>
        </div>
    );
};

export default Banner;