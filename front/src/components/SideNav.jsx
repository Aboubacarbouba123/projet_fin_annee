import React from 'react'
import { IoPersonSharp } from "react-icons/io5";
import { FaHome, FaRulerCombined, FaTree, FaTruck, FaWarehouse  } from "react-icons/fa";
import {GiCrosscutSaw} from "react-icons/gi"
import {IoMdPerson } from "react-icons/io"
import { LuTrees } from "react-icons/lu";
import { GiCircularSawblade } from "react-icons/gi";
import { NavLink } from 'react-router-dom'



const SideNav = () => {
  const CustomNavLink = ({ to, exact, children }) => {
    return (
      <NavLink
        exact={exact}
        to={to}
        className={({ isActive }) =>
          `navitems gap-2 p-2 flex justify-start hover:bg-gray-100  dark:hover:bg-gray-700 ${
            isActive
              ? "dark:bg-gray-700 bg-gray-200 shadow-sm shadow-gray-400 dark:shadow-gray-100"
              : "text-black dark:text-white"
          }`
        }
      >
        {children}
      </NavLink>
    );
  };
  
  return (
    <div className='flex flex-col w-full'>
        {/* <div className='flex flex-col h-40 gap-2 justify-center bg-gray-200 dark:bg-gray-700'>
          <div className='h-30 flex justify-center items-center'> 
            <div className="photoProfile h-20 w-20 text-white bg-gray-900 rounded-[50%] flex justify-center items-center"><IoPersonSharp  size={42}/></div>
          </div>
          <div  className='flex justify-center'>username</div>
        </div> */}
        <div className='flex h-full flex-col overflow-clip p-4'>
          <div className="">
          <CustomNavLink to={'/home'}><FaHome size={18}/> Home</CustomNavLink> 
          <CustomNavLink to={'/grume'}> <FaTree size={18}/>Grume</CustomNavLink> 
          <CustomNavLink to={'/pack'}><FaWarehouse/>Pack</CustomNavLink> 
          <CustomNavLink to={'/chauffeur'}><FaTruck/> Chauffeur</CustomNavLink> 
          <CustomNavLink to={'/essence'}><FaTree size={18}/>Essence</CustomNavLink> 
          <CustomNavLink to={'/scerie'}><GiCrosscutSaw  size={18}/>Scierie</CustomNavLink> 
          <CustomNavLink to={'/gardien'}><IoMdPerson  size={18}/>Gardien</CustomNavLink> 
          <CustomNavLink to={'/bile-transformation'}><GiCircularSawblade size={18}/>Transformation Bile</CustomNavLink> 
          <CustomNavLink to={'/bileEssence'}><LuTrees size={18}/>Bile Essence</CustomNavLink> 
          <CustomNavLink to={'/billonage'}><FaTree size={18}/>Billonage</CustomNavLink> 
          <CustomNavLink to={'/cubage'}><FaRulerCombined size={18}/>Cubage</CustomNavLink> 
          <CustomNavLink to={'/colisage'}><FaTree size={18}/>Colisage</CustomNavLink>  
          </div>

        </div>
    </div>
  )
}

export default SideNav