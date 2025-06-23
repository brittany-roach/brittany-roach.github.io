import { Link, useLocation } from 'react-router-dom'

const NavMenu = () => {
  const location = useLocation()

  const isActive = (path: string) => {
    if (path === '/' && location.pathname === '/') return true
    if (path !== '/' && location.pathname.startsWith(path)) return true
    return false
  }

  return (
    <>
      <nav className="flex flex-col md:flex-row items-center justify-between bg-white py-4 space-y-4 md:space-y-0">
        <div className="flex flex-wrap justify-center md:justify-start space-x-4 md:space-x-6">
          <Link 
            to="/" 
            className={`nav-link transition-colors duration-200 ${
              isActive('/') && location.pathname === '/' 
                ? 'active' 
                : 'text-gray-600 hover:text-purple-300 hover:border-b-2 hover:border-gray-500'
            }`}
          >
            Home
          </Link>
          <Link 
            to="/portfolio" 
            className={`nav-link transition-colors duration-200 ${
              isActive('/portfolio') 
                ? 'active' 
                : 'text-gray-600 hover:text-purple-300 hover:border-b-2 hover:border-gray-500'
            }`}
          >
            Portfolio
          </Link>
          <Link 
            to="/art-work" 
            className={`nav-link transition-colors duration-200 ${
              isActive('/art-work') 
                ? 'active' 
                : 'text-gray-600 hover:text-purple-300 hover:border-b-2 hover:border-gray-500'
            }`}
          >
            Art Work
          </Link>
          <Link 
            to="/about" 
            className={`nav-link transition-colors duration-200 ${
              isActive('/about') 
                ? 'active' 
                : 'text-gray-600 hover:text-purple-300 hover:border-b-2 hover:border-gray-500'
            }`}
          >
            About
          </Link>
        </div>

        <Link to="/" className="mt-4 md:mt-0">
          <img 
            src="/images/logo_wide.jpg" 
            alt="Logo" 
            className="h-16 md:h-25 w-auto object-contain"
            style={{ height: '100px' }}
          />
        </Link>
      </nav>

      <div className="divider mt-5" />
    </>
  )
}

export default NavMenu
