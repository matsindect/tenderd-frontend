import { Outlet } from "react-router-dom";

const  MainScreen = () =>{
  return (
    <>
      {/* Main content */}
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        {/* Main content component */}
        <div className="relative z-10 flex-shrink-0 flex h-16 bg-white border-b border-gray-200">
          {/* Main content header */}
          <button className="px-4 text-gray-500 focus:outline-none focus:bg-gray-100 focus:text-gray-600 md:hidden">
            {/* Mobile menu button */}
            <svg
              className="h-6 w-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          {/* Main content title */}
          <div className="flex justify-center flex-1">Dashboard</div>
            
        </div>
        {/* Main content area */}
        <main className="flex-1 relative z-0 overflow-y-auto focus:outline-none">
          {/* Main content goes here */}
          <Outlet/>
        </main>
      </div>
    </>
  );
}

export default MainScreen;