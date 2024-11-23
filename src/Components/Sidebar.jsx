import React, { useContext } from 'react'
import { Icon } from '@iconify-icon/react';
import { SidebarContext } from '../Context/SidebarContext';
import { Link } from 'react-router-dom';

export default function Sidebar() {
const { isSidebarOpen, toggleSidebar } = useContext(SidebarContext);
  return (
    <div
    className={`fixed inset-y-0 left-0 z-20 w-64 bg-white transform ${
      isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
    } lg:relative lg:translate-x-0 transition-transform duration-200 ease-in-out`}
  >
        <Link to="/" className="py-3 flex items-center justify-center text-xl font-semibold border-b border-gray-300">
        Movie App
        </Link>
        <ul className="space-y-2 p-4 border-b border-gray-300 overflow-y-auto max-h-[calc(100vh-64px)] scroll-smooth">
            <p className='text-gray-400'>Categories</p>
            <li className="hover:bg-gray-300 rounded p-2 cursor-pointer flex items-center text-lg">
                <Icon icon="ph:film-strip-light" width={"30px"} height={"30px"} className="mr-2" />
                Newest Release
            </li>
            <li className="hover:bg-gray-300 rounded p-2 cursor-pointer flex items-center text-lg">
                <Icon icon="cil:star" width={"30px"} height={"30px"} className="mr-2" />
                Top Rated
            </li>
            <li className="hover:bg-gray-300 rounded p-2 cursor-pointer flex items-center text-lg">
                <Icon icon="stash:data-date-light" width={"30px"} height={"30px"} className="mr-2 scale-125" />
                Up Coming
            </li>


            <p className='text-gray-400 border-t border-gray-300 pt-3'>Genres</p>
            <li className="hover:bg-gray-300 rounded p-2 cursor-pointer flex items-center text-lg">
                <Icon icon="hugeicons:gun" width={"30px"} height={"30px"} className="mr-2" />
                Action
            </li>
            <li className="hover:bg-gray-300 rounded p-2 cursor-pointer flex items-center text-lg">
                <Icon icon="stash:compass-duotone" width={"30px"} height={"30px"} className="mr-2" />
                Adventure
            </li>
            <li className="hover:bg-gray-300 rounded p-2 cursor-pointer flex items-center text-lg">
                <Icon icon="material-symbols-light:robot-outline" width={"30px"} height={"30px"} className="mr-2 scale-125" />
                Animation
            </li>
            <li className="hover:bg-gray-300 rounded p-2 cursor-pointer flex items-center text-lg">
                <Icon icon="fontisto:laughing" width={"30px"} height={"30px"} className="mr-2" />
                Comedy
            </li>
            <li className="hover:bg-gray-300 rounded p-2 cursor-pointer flex items-center text-lg">
                <Icon icon="mdi:handcuffs" width={"30px"} height={"30px"} className="mr-2" />
                Crime
            </li>
            <li className="hover:bg-gray-300 rounded p-2 cursor-pointer flex items-center text-lg">
                <Icon icon="hugeicons:camera-video" width={"30px"} height={"30px"} className="mr-2" />
                Documentary
            </li>
            <li className="hover:bg-gray-300 rounded p-2 cursor-pointer flex text-lg">
                <Icon icon="bi:heartbreak" width={"30px"} height={"30px"} className="mr-2" />
                Drama
            </li>
            <li className="hover:bg-gray-300 rounded p-2 cursor-pointer flex items-center text-lg">
                <Icon icon="emojione-monotone:family" width={"30px"} height={"30px"} className="mr-2" />
                Family
            </li>
            <li className="hover:bg-gray-300 rounded p-2 cursor-pointer flex items-center text-lg">
                <Icon icon="clarity:wand-line" width={"30px"} height={"30px"} className="mr-2" />
                Fantasy
            </li>
            <li className="hover:bg-gray-300 rounded p-2 cursor-pointer flex items-center text-lg">
                <Icon icon="wpf:ghost" width={"30px"} height={"30px"} className="mr-2" />
                Horror
            </li>
            <li className="hover:bg-gray-300 rounded p-2 cursor-pointer flex items-center text-lg">
                <Icon icon="icons8:spy" width={"30px"} height={"30px"} className="mr-2 scale-125" />
                Mystery
            </li>
            <li className="hover:bg-gray-300 rounded p-2 cursor-pointer flex items-center text-lg">
                <Icon icon="solar:ufo-outline" width={"30px"} height={"30px"} className="mr-2 scale-110" />
                Science Fiction
            </li>
            <li className="hover:bg-gray-300 rounded p-2 cursor-pointer flex items-center text-lg">
                <Icon icon="fa:tv" width={"30px"} height={"30px"} className="mr-2" />
                TV Movie
            </li>
            <li className="hover:bg-gray-300 rounded p-2 cursor-pointer flex items-center text-lg">
                <Icon icon="hugeicons:sword-03" width={"30px"} height={"30px"} className="mr-2" />
                War
            </li>
        </ul>
        {isSidebarOpen && (
        <div
          className="fixed inset-0 opacity-50 lg:hidden z-10"
          onClick={toggleSidebar}
        ></div>
        )}
    </div>

    

  )
}
