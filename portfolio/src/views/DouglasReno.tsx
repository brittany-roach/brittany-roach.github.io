import Carousel from '../components/Carousel'
import Modal from '../components/Modal'

const DouglasReno = () => {
  const images = [
    {
      large: "/images/portfolio/douglasreno/dr_lg_1.jpg",
      small: "/images/portfolio/douglasreno/dr_sm_1.jpg",
      alt: "Douglas Home Reno Living Room Area"
    },
    {
      large: "/images/portfolio/douglasreno/dr_lg_2.jpg",
      small: "/images/portfolio/douglasreno/dr_sm_2.jpg",
      alt: "Douglas Home Reno Kitchen"
    },
    {
      large: "/images/portfolio/douglasreno/dr_lg_3.jpg",
      small: "/images/portfolio/douglasreno/dr_sm_3.jpg",
      alt: "Douglas Home Reno Bathroom Vanity"
    },
    {
      large: "/images/portfolio/douglasreno/dr_lg_4.jpg",
      small: "/images/portfolio/douglasreno/dr_sm_4.jpg",
      alt: "Douglas Home Reno Bathroom"
    }
  ]

  return (
    <div className="container my-5">
      <div className="flex justify-center">
        <div className="w-5/6">
          <Carousel images={images} />

          <div className="space-y-4 text-sm text-gray-600 leading-relaxed">
            <p>
              A couple had recently purchased a 1960's style ranch home in an exclusive London neighbourhood.
              They wanted to update the home to accommodate for their needs and to reflect their personal style.
              Mrs. Douglas is a trained chief that owns a high-end kitchen boutique. She is fun, energetic and loves to entertain.
              Mr. Douglas is the CEO of an environmental engineering firm in London.
            </p>
            <p>
              The homes new layout must be open-concept, must include more windows, and to use eco-friendly materials.
              Other wants for the home is to have a high-end kitchen, outdoor living space to cook and entertain and a luxury ensuite.
            </p>
            <p>
              The homes new layout is open concept but still allows for privacy in each room.
              The kitchen and bathroom have been design to meet the requirements of the National Kitchen and Bath Association.
              The new style of the interior has a retro-modern feel to it. To reflect the 1960's style of home, retro-inspired fabric and colours where used throughout the home.
            </p>
          </div>

          <div className="mt-8">
            <Modal 
              imagePath="/images/portfolio/douglasreno/dr_plan.jpg" 
              description="Douglas Home Reno- First Floor Plan"
              buttonText="View Floor Plan"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default DouglasReno
