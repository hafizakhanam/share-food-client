import { Link } from "react-router-dom";


const Footer = () => {
    const date = new Date();
    let year = date.getFullYear();
    return (
        <div className="bg-blue-900">
            <div className="max-w-[1280px] mx-auto px-4 py-12">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="logo">
                        <a className="w-48 inline-block" href="/"><img src="https://i.ibb.co/QnWPcHs/logo-footer.png" alt="Good Food" /></a>
                    </div>
                    <div className="contact">
                        <ul>
                            <li><strong>Address: </strong>223 – 8th Avenue SW Calgary, AB T2P 1B5</li>
                            <Link to="#"><li><strong>Phone: </strong>403.265.3665</li></Link>
                            <Link to="#"><li><strong>Email: </strong>info@good-food.com</li></Link>
                        </ul>
                    </div>
                    <div className="icon">
                        <ul className="flex md:justify-end">
                            <Link to="#"><li><img className="w-14" src="https://i.ibb.co/KxJdb4W/instagram-icon-white-on-gradient.png" /></li></Link>
                            <Link to="#"><li><img className="w-10 ml-3" src="https://i.ibb.co/D4KCpr9/facebook-logo-2019.png" /></li></Link>
                            <Link to="#"><li><img className="w-10 ml-5 mt-2" src="https://i.ibb.co/vJk7sbQ/Logo-of-Twitter-svg.png" /></li></Link> 
                        </ul>
                    </div>
                </div> 
            </div>
            <footer className="py-8 bg-blue-950 text-center">
                <p>© {year} Good Food</p>
            </footer>
        </div>
    );
};

export default Footer;