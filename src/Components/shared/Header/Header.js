import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../../firebase.init";
import CustomLink from "../../Page/Active/CustomLink";
import {  signOut } from 'firebase/auth';
import './Header.css'

const Header = () => {
  let navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);
  const logOutBtn = (e) =>{
    e.preventDefault();
      signOut(auth);
  }
  return (
    <nav className="bg-slate-200  shadow fixed z-50 w-full">
    <div className="container mx-auto w-full navbar px-4">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex="0" className="btn btn-ghost lg:hidden"> 
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex="0"
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-slate-400 rounded w-52"
          >
            <li>
              <CustomLink className='text-base my-2' to={"/"}>Home</CustomLink>
            </li>
            <li>
              <CustomLink className='text-base my-2' to={"/about"}>About</CustomLink>
            </li>
            <li>
              <CustomLink className='text-base my-2' to={"/appointment"}>Appointment</CustomLink>
            </li>
            <li>
              <CustomLink className='text-base my-2' to={"/reviews"}>Reviews</CustomLink>
            </li>
            <li>
              <CustomLink className='text-base my-2' to={"/contact"}>Contact Us</CustomLink>
            </li>
          </ul>
        </div>
        <Link to={'/'} className="btn btn-ghost normal-case text-xl">Doctors Portal</Link>
      </div>
      <div className="navbar-end">
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <li>
              <CustomLink to={"/"}>Home</CustomLink>
            </li>
            <li>
              <CustomLink to={"/about"}>About</CustomLink>
            </li>
            <li>
              <CustomLink to={"/appointment"}>Appointment</CustomLink>
            </li>
            <li>
              <CustomLink to={"/reviews"}>Reviews</CustomLink>
            </li>
            <li>
              <CustomLink to={"/contact"}>Contact Us</CustomLink>
            </li>
          </ul>
        </div>
        {
          user?<button onClick={logOutBtn} className="text-black font-semibold">log Out</button> :
          <Link to={'/login'} >Login</Link>
        }
        
      </div>
    </div>
    </nav>
  );
};

export default Header;
