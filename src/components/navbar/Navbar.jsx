import { Link, useNavigate } from "react-router-dom"
import logo from '../../assets/img/ALogo.jpg'
import { useDispatch, useSelector } from "react-redux"
import { removeItem } from "../../helpers/persistance-storage";
import { logoutUser } from "../../slice/auth";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { TiWarning } from "react-icons/ti";
import { IoChatbubbles } from "react-icons/io5";
import { IoChatbubblesOutline } from "react-icons/io5";
import { PiBellSimpleRinging } from "react-icons/pi";

const Navbar = () => {
  const {loggedIn,user} = useSelector(state => state.auth);
  const navigate = useNavigate()
  const dispatch = useDispatch()
   const loggoutHandler = () =>{
    dispatch(logoutUser())
    removeItem("token")
    navigate('/login')
   }

   const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <header>

<div className={`${isMenuOpen ? 'h-[50vh] bg-black fixed right-0 left-0  z-50' : 'h-[100px] bg-black'} w-full transation-all md:block md:w-auto`} >
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          {/* <img  src={logo} className=" w-[175px]" alt="Flowbite Logo" /> */}
          Home
        </Link>
         <div className='flex items-center gap-8'>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg  hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded={isMenuOpen}
            onClick={handleMenuToggle}
          >
            <span className="sr-only">Open main menu</span>
            {isMenuOpen ? (
              'X'
            ) : (
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
            </svg>
            )
          
            }
          </button>

          
         </div>
      </div>
         <div className="w-full h-full flex items-center justify-center mb-10 ">
         {
            isMenuOpen ? (
              <ul>
            <li>
              <Link className="text-[20px] text-white" to='/'>Bosh Sahifa</Link>
            </li>
            <li>
              <Link className="text-[20px] text-white" to='/'>Bosh Sahifa</Link>
            </li>
            <li>
              <Link className="text-[20px] text-white" to='/'>Bosh Sahifa</Link>
            </li>
            <li>
              <Link className="text-[20px] text-white" to='/'>Bosh Sahifa</Link>
            </li>
            <li>
              <Link className="text-[20px] text-white" to='/'>Bosh Sahifa</Link>
            </li>
          </ul>
            ) : ''
          }
         </div>
  </div>
        <div className="bg-[#22AAD8] h-[10vh] flex items-center justify-center">
         <div className="container d-flex flex-column flex-md-row align-items-center  mb-4  pt-2">
         <Link to='/'>
            {/* <img src={logo} alt="" width={100} height={20}/> */}
            <h1>Home</h1>
        </Link>
      <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
        {loggedIn ? (
          <>
          <ul className="flex items-center gap-3">
            <li className="bg-white rounded-[50%] h-[50px] w-[50px] flex items-center justify-center">
              <Link to={'/'} >
              <TiWarning className="text-[#FEA910] text-[30px]"/>
              </Link>
            </li>
            <li className="bg-white rounded-[50%] h-[50px] w-[50px] flex items-center justify-center">
              <Link to={'/'} >
              <IoChatbubblesOutline className=" text-[30px]"/>
              </Link>
            </li>
            <li className="bg-white rounded-[50%] h-[50px] w-[50px] flex items-center justify-center">
              <Link to={'/'} >
              <PiBellSimpleRinging className=" text-[30px]"/>
              </Link>
            </li>
            <li>
              <p className="me-3 py-2 m-0 link-body-emphasis text-decoration-none">{user.username}</p>
            </li>
            <li>
              <button className="btn btn-outline-danger" onClick={loggoutHandler}>Logout</button>
            </li>
          </ul>
          </>
        ): (
          <>
            <Link to='/login' className="me-3 py-2 link-body-emphasis text-decoration-none">Login</Link>
            <Link to='/register' className="me-3 py-2 link-body-emphasis text-decoration-none">Register</Link>
          </>
        )}
    
        {/* <a className="py-2 link-body-emphasis text-decoration-none" href="#">Pricing</a> */}
      </nav>
         </div>
    </div>
    </header>
  )
}

export default Navbar