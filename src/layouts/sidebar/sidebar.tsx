const SideBar = ()=> {
    return (
        <div className="h-screen flex overflow-hidden bg-gray-100">
      {/* Sidebar */}
      <div className="flex flex-col w-64">
        {/* Sidebar component */}
        <div className="flex flex-col h-0 flex-1 border-r border-gray-200 bg-white">
          {/* Sidebar header */}
          <div className="flex items-center justify-center h-16 px-4 bg-gray-900 text-white">
            Dashboard
          </div>
          {/* Sidebar content */}
          <div className="flex-1 flex flex-col overflow-y-auto">
            {/* Sidebar links */}
            <nav className="flex-1 px-2 py-4 bg-gray-100">
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 rounded">
                Dashboard
              </a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 rounded">
                Orders
              </a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 rounded">
                Products
              </a>
              <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200 rounded">
                Customers
              </a>
            </nav>
          </div>
          {/* Sidebar footer */}
          <div className="flex-shrink-0 flex items-center justify-center h-16 px-4 border-t border-gray-200 bg-gray-900 text-white">
            {/* Sidebar footer content */}
          </div>
        </div>
      </div>
    </div>
    )
}

export default SideBar