import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { FaUserCircle } from "react-icons/fa";
import Swal from "sweetalert2";

const Navbar = () => {

  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(result => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Logout successfully !',
          showConfirmButton: false,
          timer: 1500
        })
      })
      .catch(error => {

      })
  }

  return (
    <div className="bg-[#2e2e2e]">
      <div className="navbar text-white lg:container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black rounded-box w-52 font-semibold">
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li>
                <Link>ALL TOYS</Link>
              </li>
              {
                user ? <li>
                  <Link to="/addToy">ADD TOY</Link>
                </li> : ""
              }
              {
                user ? <li>
                  <Link>My TOY</Link>
                </li> : ""
              }
              <li>
                <Link>BLOG</Link>
              </li>
            </ul>
          </div>
          <Link to="/" className="">
            <img className="w-2/4" src="https://i.ibb.co/d6jRFLd/logo-2.png" alt="" />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-semibold">
            <li>
              <Link>HOME</Link>
            </li>
            <li>
              <Link>ALL TOYS</Link>
            </li>
            {
              user ? <li>
                <Link to="/addToy">ADD TOY</Link>
              </li> : ""
            }
            {
              user ? <li>
                <Link>MY TOY</Link>
              </li> : ""
            }
            <li>
              <Link>BLOG</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          {
            user ?
              <div className="flex items-center gap-3">
                <div className="tooltip  tooltip-left" data-tip={user.displayName}>
                  {
                    user.photoURL ? <img className="rounded-full h-12 w-12" src={user.photoURL}></img> : <FaUserCircle className="h-12 w-12"></FaUserCircle>
                  }
                </div>
                <Link onClick={handleLogOut} to="/login" className="btn btn-ghost font-semibold text-base">Log out</Link>
              </div> :
              <div className="flex items-center gap-3">
                <Link to="/login" className="btn btn-ghost font-semibold text-base">Login</Link>
              </div>

          }
          {/* <Link to="/login" className="btn btn-ghost font-semibold text-base">Login</Link> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
