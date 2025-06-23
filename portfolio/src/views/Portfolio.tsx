import { Link } from 'react-router-dom'

const Portfolio = () => {
  return (
    <div className="container text-center my-5">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
        <div className="flex flex-col items-center">
          <Link to="/portfolio/douglas-reno">
            <img 
              src="/images/portfolio/home_renovation.jpg" 
              alt="Home Renovation" 
              className="img-square hover:opacity-80 transition-opacity duration-200"
            />
          </Link>
          <p className="mt-2 text-sm text-gray-700">Home Renovation</p>
        </div>

        <div className="flex flex-col items-center">
          <Link to="/portfolio/vogue-office">
            <img 
              src="/images/portfolio/vogue_office.jpg" 
              alt="Office" 
              className="img-square hover:opacity-80 transition-opacity duration-200"
            />
          </Link>
          <p className="mt-2 text-sm text-gray-700">Office</p>
        </div>

        <div className="flex flex-col items-center">
          <Link to="/portfolio/mulberry-community-project">
            <img 
              src="/images/portfolio/health_care_community.jpg" 
              alt="Health Care Community" 
              className="img-square hover:opacity-80 transition-opacity duration-200"
            />
          </Link>
          <p className="mt-2 text-sm text-gray-700">Health Care Community</p>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
