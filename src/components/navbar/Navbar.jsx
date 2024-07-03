import { Link, useNavigate } from "react-router-dom"
import logo from '../../assets/img/ALogo.jpg'
import { useDispatch, useSelector } from "react-redux"
import { removeItem } from "../../helpers/persistance-storage";
import { logoutUser } from "../../slice/auth";

const Navbar = () => {
  const {loggedIn,user} = useSelector(state => state.auth);
  const navigate = useNavigate()
  const dispatch = useDispatch()
   const loggoutHandler = () =>{
    dispatch(logoutUser())
    removeItem("token")
    navigate('/login')
   }
  return (
    <header>
       <div className="w-full bg-black h-[80px]"></div>
        <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom container pt-2">
        <Link to='/'>
            <img src={logo} alt="" width={100} height={20}/>
        </Link>
      <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
        {loggedIn ? (
          <>
          <p className="me-3 py-2 m-0 link-body-emphasis text-decoration-none">{user.username}</p>
          <button className="btn btn-outline-danger" onClick={loggoutHandler}>Logout</button>
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
    </header>
  )
}

export default Navbar