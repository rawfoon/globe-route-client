import React, { useContext, useState } from "react";
import logo from "../../../Assets/Logo/logo.png";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import {FaServicestack, FaBlogger, FaArrowCircleRight, FaEdit, FaHome, FaPlusCircle, FaRegRegistered, FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa';
import { Link } from "react-router-dom";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [toggleMenu , setToggleMenu] = useState(false)

  const handleToggle = () =>{
    if(!toggleMenu){
      setToggleMenu(!toggleMenu)
      // console.log('clicked');
    }
    setToggleMenu(!toggleMenu)
  }


  const menuItem = <>
  <Link to='/' className="px-4 py-2 mr-3 rounded flex text-md items-center hover:bg-violet-400"><FaHome className="md:hidden mr-3"/>Home</Link>
  <Link to='/services' className="px-4 py-2 mr-3 rounded flex text-md items-center hover:bg-violet-400"><FaServicestack  className="md:hidden mr-3"/>Services</Link>
  <Link to='/blogs' className="px-4 py-2 mr-3 rounded flex text-md items-center hover:bg-violet-400"><FaBlogger className="md:hidden mr-3"/>Blogs</Link>
  
  </>


  const handleSignOut = () => {
    logOut()
      .then(() => {
        console.log("logged out");
      })
      .catch((error) => console.error(error));
  };

  return (
    <header className="p-4 dark:bg-slate-900 dark:text-gray-100">
      <div className="container flex justify-between h-16 mx-auto">
        <Link to='/'
          
          className="flex items-center p-2"
        >
          <img src={logo} className=" h-full rounded-full mr-5 " alt="" />
          <h1 className="text-xl md:text-4xl">Globe Route Travels</h1>
        </Link>
        <ul className="items-stretch hidden space-x-3 lg:flex lg:items-center">

          
        {menuItem}



        </ul>
        <div className="items-center flex-shrink-0 hidden lg:flex">
          {
            user?
            <>
            <Link to='addservices' className="px-4 py-2 mr-1 rounded flex text-md items-center hover:bg-violet-400">Add Service</Link>
            <Link to='myreviews' className="px-4 py-2 mr-1 rounded flex text-md items-center hover:bg-violet-400">My Reviews</Link>
             <button onClick={handleSignOut} className="px-4 py-2 mr-3 rounded flex text-md items-center border rounded-full dark:border-violet-400 hover:bg-violet-400 dark:bg-transparent">
                 
                 <FaArrowCircleRight className="mr-2 " /> <span>Log Out</span>
                         </button>
                         <Link to="" title={user?.displayName}>
              {user?.photoURL ? (
                <>
                  <img
                    className="rounded-full hover:scale-110"
                    src={user.photoURL}
                    style={{ height: "40px", width: '40px' }}
                    data-tip={user?.displayName}

                  />
                  
                </>
              ) : (
                <FaUser
                  style={{ fontSize: "40px" }}
                  className='hover:scale-125'
                  data-tip={user?.displayName}

                ></FaUser>
              )}
            </Link>
            </>
            :
            <>
            <Link to='/login' className="self-center px-8 py-3 rounded mr-3 hover:bg-violet-400">Login</Link>
          <Link to='/register' className="self-center px-8 py-3 font-semibold rounded dark:bg-violet-500 dark:hover:bg-violet-600 dark:text-s-900 ">
            Register
          </Link>
            
            </>
          }
        </div>
        <button onClick={handleToggle} className="p-4 lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="w-6 h-6 dark:text-gray-100"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>


      {/* toggle menu */}

    <div className={`${!toggleMenu ?  'hidden' : ''}`}>
    <div className="h-full w-full p-3 space-y-2 md:hidden  dark:bg-gray-900 dark:text-gray-100">
	<div className="flex items-center p-2 space-x-4">
		{
      user? 
      <>
      <img src={user?.photoURL} alt="" className="w-12 h-12 rounded-full dark:bg-gray-500" />
		<div>
			<h2 className="text-lg font-semibold">{user.displayName}</h2>
			
		</div>
      </>
      :
      <>
      <FaUser className="w-12 h-12 rounded-full dark:bg-gray-500" />
		<div>
			<h2 className="text-lg font-semibold">User</h2>
			
		</div>
      </>
    }
	</div>
	<div className="divide-y divide-gray-700">
		<ul className="pt-2 pb-4 space-y-1 text-sm">


{menuItem}
	
		</ul>
		<ul className="pt-4 pb-2 space-y-1 text-sm">
			{
        user ?
        <>
        <li>
				<Link to='/addservices' className="flex items-center p-2 space-x-3 rounded-md">
					<FaPlusCircle/>
					<span>Add Service</span>
				</Link>
			</li>
        <li>
				<Link to='/myreviews' className="flex items-center p-2 space-x-3 rounded-md">
					<FaEdit/>
					<span>My Reviews</span>
				</Link>
			</li>
			<li>
				<Link onClick={handleSignOut} className="flex items-center p-2 space-x-3 rounded-md">
					<FaSignOutAlt/>
					<span>Logout</span>
				</Link>
			</li>
        </>
        :
        <>
        <li>
				<Link to='/login' className="flex items-center p-2 space-x-3 rounded-md">
					<FaSignInAlt/>
					<span>Add Service</span>
				</Link>
			</li>
        <li>
				<Link to='/myreviews' className="flex items-center p-2 space-x-3 rounded-md">
					<FaRegRegistered/>
					<span>Register</span>
				</Link>
			</li>
			
        
        </>
      }
		</ul>
	</div>
</div>
    </div>
    </header>
  );
};

export default Header;
