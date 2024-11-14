import React, { useState } from 'react';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="h-screen flex relative">
      <div
        className={`fixed inset-y-0 left-0 z-20 w-64 bg-gray-800 text-white transform ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        } lg:relative lg:translate-x-0 transition-transform duration-200 ease-in-out`}
      >
        <div className="p-4 text-lg font-semibold border-b border-gray-700">
          Sidebar
        </div>
        <ul className="space-y-2 p-4">
          <li className="hover:bg-gray-700 rounded p-2 cursor-pointer">Home</li>
          <li className="hover:bg-gray-700 rounded p-2 cursor-pointer">Movies</li>
          <li className="hover:bg-gray-700 rounded p-2 cursor-pointer">Cast</li>
          <li className="hover:bg-gray-700 rounded p-2 cursor-pointer">Settings</li>
        </ul>
      </div>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 lg:hidden z-10"
          onClick={closeSidebar}
        ></div>
      )}

      <div className="flex-1 bg-gray-100 overflow-auto">
        <div className="flex items-center bg-gray-800 text-white p-4 lg:hidden">
          <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="text-white focus:outline-none"
          >
            ☰
          </button>
          <h1 className="ml-4 text-lg font-semibold">Main Content</h1>
        </div>

        <div className="p-6">
          <h2 className="text-2xl font-bold">Main Content Area</h2>
          <p className="mt-4">
            This is the main content area. It will adjust according to the screen size and the sidebar.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
