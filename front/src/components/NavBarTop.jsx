import React from 'react'
import { CiSearch } from "react-icons/ci"
import Switcher from './Switcher'

const NavBarTop = () => {
  return (
    <div className="flex flex-row h-12 rounded w-full p-1 items-center justify-between shadow  shadow-gray-400 dark:shadow-gray-700">
        
        <div> <Switcher /></div>
    </div>
  )
}

export default NavBarTop