import { NavLink, Outlet } from 'react-router-dom';
import { FaAllergies, FaShoppingCart } from "react-icons/fa";
import { FaBookBookmark, FaManatSign, FaSitemap } from 'react-icons/fa6';

const DashBoard = () => {
    return (
      <div className="flex  min-h-screen">
        {/* Sidebar */}
        <div className="w-64 pl-10 pt-5 bg-amber-600">
          <h2 className='text-2xl font-bold'>Bistrow Boos</h2>
          <p className='text-xl font-semibold italic' style={{ letterSpacing: '6px' }}>Resturant</p>
          <ul className="menu mt-10">
            <li className="flex  gap-2">
              
              <NavLink to='cart'><FaShoppingCart /> My Cart</NavLink>
              <NavLink to='additem'><FaSitemap /> Add item</NavLink>
              <NavLink to='cart'><FaManatSign /> Manage Item</NavLink>
              <NavLink to='cart'><FaBookBookmark /> Manage Booking</NavLink>
              <NavLink to='cart'><FaAllergies /> All User</NavLink>
            </li>
          </ul>
        </div>

        {/* Outlet renders nested component */}
        <div className="flex-1 p-10">
          <Outlet />
        </div>
      </div>
    );
};

export default DashBoard;
