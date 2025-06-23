import Carousel from '../components/Carousel'
import Modal from '../components/Modal'

const MulberryProject = () => {
  const images = [
    {
      large: "/images/portfolio/mulberryproject/mcp_lg_1.jpg",
      small: "/images/portfolio/mulberryproject/mcp_sm_1.jpg",
      alt: "Exterior of Home"
    },
    {
      large: "/images/portfolio/mulberryproject/mcp_lg_2.jpg",
      small: "/images/portfolio/mulberryproject/mcp_sm_2.jpg",
      alt: "Living Area"
    },
    {
      large: "/images/portfolio/mulberryproject/mcp_lg_3.jpg",
      small: "/images/portfolio/mulberryproject/mcp_sm_3.jpg",
      alt: "Kitchen"
    },
    {
      large: "/images/portfolio/mulberryproject/mcp_lg_4.jpg",
      small: "/images/portfolio/mulberryproject/mcp_sm_4.jpg",
      alt: "Bedroom"
    }
  ]

  return (
    <div className="container my-5">
      <div className="flex justify-center">
        <div className="w-5/6">
          <Carousel images={images} />

          <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
            <p>
              The goal for this project was to ensure the residence accommodated for all three types of intellectual diversities, autism, Down syndrome and dementia,
              because each has their own individual needs. Another huge aspect was to not make this residence feel like a hospital or nursing home; it is supposed to feel like a home.
            </p>
            <p>
              An open concept layout was most suitable for the residence.
              Residence are able to "preview" what is ahead of them so they can determine if they want to enter the space or not, giving them a greater sense of independence.
              The home also consists of private and interactive areas. The snoozlen room is an area for individuals to escape when life feels overwhelming.
              The open common room is there for residence when they feel interactive.
            </p>
          </div>

          <div className="mt-8 text-center">
            <Modal 
              imagePath="/images/portfolio/mulberryproject/mcp_plan.jpg" 
              description="Mulberry Community - Floor Plan"
              buttonText="View Floor Plan"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MulberryProject
