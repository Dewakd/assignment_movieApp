import React, { useContext } from 'react'
import { SidebarContext } from '../Context/SidebarContext';

export default function Navbar() {
  const { toggleSidebar} = useContext(SidebarContext);
  return (
    <div className="sticky top-0 flex items-center justify-between bg-gray-800 text-white p-4 lg:hidden">
    <h1 className="ml-4 text-lg font-semibold">Movie App</h1>
    <button
        onClick={() => toggleSidebar()}
        className="text-white focus:outline-none"
    >
        ☰
    </button>
</div>
  )
}
