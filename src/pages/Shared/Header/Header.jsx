import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";

const Header = () => {
    const {user, logOut} = useContext(AuthContext);
    console.log(user)
    const handleLogout = () =>{
        logOut()
        .then(result =>{
            console.log('Logged In Successful')
        })
        .catch(error =>{
            console.log(error.message);
        })
    }
    const links = <>
        <li>
            <NavLink to="/">Home</NavLink>
        </li>
        <li>
            <NavLink to="/foods">Available Foods</NavLink>
        </li>
        <li>
            <NavLink to="/addFood">Add Food</NavLink>
        </li>
        <li>
            <NavLink to="/manageFoods">Manage Foods</NavLink>
        </li>
        <li>
            <NavLink to="/foodRequest">Food Request</NavLink>
        </li>
    </>
    return (
        <header className="header z-10 relative bg-blue-950">
            <div className="max-w-[1380px] mx-auto">
                <div className="navbar">
                    <div className="navbar-start justify-between lg:justify-normal">
                        <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}
                        </ul>
                        </div>
                        <a className="w-48 inline-block" href="/"><img src="https://i.ibb.co/QnWPcHs/logo-footer.png" alt="Good Food" /></a>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {links}
                        </ul>
                    </div>
                    <div className="navbar-end">
                        
                        {
                            user ? <>
                            <div className="user-info">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className="w-7 rounded-full">
                                        {
                                            user.photoURL ? <>
                                                <img className="max-w-5" src={user.photoURL} />
                                            </>
                                            : <img className="max-w-5" src="https://i.ibb.co/TH1VvtS/585e4bf3cb11b227491c339a.png" />
                                        }
                                    
                                    </div>
                                </label>
                                <span className="user-email">{user.displayName ? user.displayName : user.email}</span>
                            </div>
                            
                            <button onClick={handleLogout} className="btn bg-pink-800 capitalize">Logout</button>
                            
                            </> 
                            : <div className="m-0">
                                <Link to="/login"><button onClick={handleLogout} className="btn ml-2 bg-pink-800 capitalize">Login</button></Link>
                                <Link to="/registration"><button className="btn ml-2 bg-pink-800 capitalize">Registration</button></Link>
                            </div>
                            
                        }
                        
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;