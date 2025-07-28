import { Link } from "react-router-dom"

const Navbar = ({children}) => {
    
  return (
    <div>
        <div className="max-w-xl">
            <div className="navbar fixed z-10 bg-black opacity-[0.60] shadow-sm text-white">
            <div className="navbar-start ml:3 lg:ml-20 ">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm text-black font-semibold dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-start">
                    <li><Link to={`/`}>Home</Link></li>
                    <li><Link to={`/ourmenu`}>Our Menu</Link></li>
                    <li><Link to={`/ourshope`}>Our shope</Link></li>
                    <li><Link to={`/shop/Salad`}>shope</Link></li>
                </ul>
                </div>
                <a className=" text-xl font-semibold"><span className="text-yellow-500">R</span>esturant</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal  px-1">
                <li><Link to={`/`}>Home</Link></li>
                <li><Link to={`/ourmenu`}>Our Menu</Link></li>
                <li><Link to={`/ourshope`}>Our shope</Link></li>
                <li><Link to={`/shop/Salad`}>shope</Link></li>
                </ul>
            </div>
            <div className="navbar-end mr-4 lg:mr-20">
                <Link to={`/login`} className="btn">Login</Link>
            </div>
        </div>
        </div>
        {children}
    </div>
  )
}

export default Navbar