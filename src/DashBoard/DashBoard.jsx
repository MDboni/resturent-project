import { NavLink, Outlet } from 'react-router-dom';
import { FaAllergies, FaShoppingCart } from "react-icons/fa";
import { FaBookBookmark, FaContao, FaManatSign, FaMarsAndVenus, FaShapes, FaSitemap } from 'react-icons/fa6';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';

const DashBoard = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* Sidebar (Mobile + Desktop) */}
      <div className={`fixed md:relative z-20 bg-amber-600 text-white pt-5 transition-transform duration-300 ease-in-out
        ${menuOpen ? 'translate-x-0' : '-translate-x-full'} 
        md:translate-x-0 md:w-64 w-60 min-h-screen pl-6`}>
        
        <h2 className='text-2xl font-bold'>Bistrow Boos</h2>
        <p className='text-xl font-semibold italic' style={{ letterSpacing: '6px' }}>Resturant</p>
        
        <ul className="menu mt-10 space-y-4">
          <li>
            <NavLink to='cart' className="flex items-center gap-2 "><FaShoppingCart /> My Cart</NavLink>
          </li>
          <li>
            <NavLink to='additem' className="flex items-center gap-2 "><FaSitemap /> Add Item</NavLink>
          </li>
          <li>
            <NavLink to='/' className="flex items-center gap-2 "><FaManatSign /> Manage Item</NavLink>
          </li>
          <li>
            <NavLink to='booking' className="flex items-center gap-2 "><FaBookBookmark /> Manage Booking</NavLink>
          </li>
          <li>
            <NavLink to='users' className="flex items-center gap-2 "><FaAllergies /> All Users</NavLink>
          </li>
          <div className='divider '></div>
          <li>
            <NavLink to='/' className="flex items-center gap-2 "><FaAllergies /> Home</NavLink>
          </li>
          <li>
            <NavLink to='users' className="flex items-center gap-2 "><FaMarsAndVenus /> Menu</NavLink>
          </li>
          <li>
            <NavLink to='users' className="flex items-center gap-2 "><FaShapes /> Shope</NavLink>
          </li>
          <li>
            <NavLink to='users' className="flex items-center gap-2 "><FaContao /> Contact</NavLink>
          </li>

        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Mobile Header */}
        <div className="md:hidden bg-amber-600 text-white p-4 flex items-center justify-between">
          <h2 className="text-xl font-bold">Dashboard</h2>
          <button onClick={() => setMenuOpen(!menuOpen)}>
            <FaBars size={24} />
          </button>
        </div>

        {/* Page Content */}
        <div className="p-4 md:p-10 mt-2 md:mt-0">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
