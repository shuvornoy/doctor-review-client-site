import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../assets/logo.png';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import './Header.css'

const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then()
            .catch();
    }

    const menuItems = <>
        <li className='font-semibold'><Link to='/'>Home</Link></li>
        <li className='font-semibold'><Link to='/Services'>Services</Link></li>
       
        {
            user?.email ?
                <>
                    
                    
                   
                   
                </>
                :
                <Link to='/login'></Link>
        }
         <li className='font-semibold'><Link to='/'>blog</Link></li>
    </>

    return (
        <div className="navbar h-20 mb-12 py-12 bg-base-100 backround">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
                <Link to="/" className=" normal-case ">
                    <img src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            <div className="navbar-end">
                <button className="">
                {
            user?.email ?
                <>   
                        <Link to='/addServices'><button className='btn btn-outline '>add services</button></Link>
                        <Link to='/review'><button className='btn btn-outline mx-3'>my review</button></Link>
                        <button className='btn btn-outline ' onClick={ handleLogOut }>Sign Out</button>
   
                </>
                :
                <button className='btn btn-outline '><Link to='/login'>Login</Link></button>
        }
                </button>
            </div>
        </div>
    );
};

export default Header;