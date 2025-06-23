import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="container my-5">
      <div className="flex flex-col items-center space-y-6 max-w-2xl mx-auto">
        <Link to="/portfolio" className="group">
          <img 
            src="/images/home/revit.jpg" 
            alt="Revit" 
            className="w-full object-cover group-hover:opacity-80 transition-opacity duration-200"
          />
        </Link>
        <Link to="/art-work" className="group">
          <img 
            src="/images/home/hand_drawing.jpg" 
            alt="Hand Drawing" 
            className="w-full object-cover group-hover:opacity-80 transition-opacity duration-200"
          />
        </Link>
        <Link to="/portfolio" className="group">
          <img 
            src="/images/home/office.jpg" 
            alt="Office" 
            className="w-full object-cover group-hover:opacity-80 transition-opacity duration-200"
          />
        </Link>
      </div>
    </div>
  )
}

export default Home
