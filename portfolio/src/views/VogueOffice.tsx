import Carousel from '../components/Carousel'
import Modal from '../components/Modal'

const VogueOffice = () => {
  const images = [
    {
      large: "/images/portfolio/vogueoffice/v_lg_1.jpg",
      small: "/images/portfolio/vogueoffice/v_sm_1.jpg",
      alt: "Reception Area"
    },
    {
      large: "/images/portfolio/vogueoffice/v_lg_2.jpg",
      small: "/images/portfolio/vogueoffice/v_sm_2.jpg",
      alt: "Closed Office"
    },
    {
      large: "/images/portfolio/vogueoffice/v_lg_3.jpg",
      small: "/images/portfolio/vogueoffice/v_sm_3.jpg",
      alt: "Open Offices"
    }
  ]

  return (
    <div className="container my-5">
      <div className="flex justify-center">
        <div className="w-3/4">
          <Carousel images={images} />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-4 text-sm text-gray-600 leading-relaxed">
              <p>
                Vogue's management team asked for a new functional layout that will embrace the several work ethics that take place throughout the company.
                An office space for 37 people was to be designed to accommodate for the wide variety of daily task.
                It is essential the redesigned space accommodates for the needs of every employee and influences productivity.
              </p>
              <p>
                An open concept layout was designed to encourage creativity, collaboration and productivity.
                Work areas vary throughout the space to accommodate for the needs of employees, depending on the type of tasks that will be taking place.
                The finishes of the space were inspired by the beach. Cool colours and fabrics with organic "wave-like" patterns were incorporated to reflect the water.
                Browns were incorporated to reflect the sand at the beach. With having a beach inspired office it will embrace employees to feel calm while working.
                With incorporating these new philosophies on innovation in a workspace Vogues new office space reflects their successes as a business and work ethics.
              </p>
            </div>

            <div className="space-y-4">
              <Modal 
                imagePath="/images/portfolio/vogueoffice/v_first_floor.jpg" 
                description="Vogue Office - First Floor Plan"
                buttonText="First Floor Plan"
              />
              <Modal 
                imagePath="/images/portfolio/vogueoffice/v_second_floor.jpg" 
                description="Vogue Office - Second Floor Plan"
                buttonText="Second Floor Plan"
              />
              <Modal 
                imagePath="/images/portfolio/vogueoffice/diploma.jpeg" 
                description="Vogue Office - Award"
                buttonText="View Award"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VogueOffice
