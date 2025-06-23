import { useState } from 'react'

interface ImageData {
  imagePath: string
  description: string
}

interface ModalCarouselProps {
  images: ImageData[]
}

const ModalCarousel = ({ images }: ModalCarouselProps) => {
  const [showModal, setShowModal] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)

  const toggleModal = (index: number = 0) => {
    setCurrentIndex(index)
    setShowModal(!showModal)
    // Prevent body scroll when modal is open
    if (!showModal) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }
  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-5 justify-center">
        {images.map((image, index) => (
          <div 
            key={index}
            className="cursor-pointer"
            onClick={() => toggleModal(index)}
          >
            <img 
              src={image.imagePath} 
              alt={image.description} 
              className="w-48 h-48 object-cover"
            />
          </div>
        ))}
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="relative max-w-4xl max-h-full">
              <img 
                src={images[currentIndex].imagePath} 
                alt={images[currentIndex].description} 
                className="max-w-full max-h-full object-contain cursor-pointer"
                onClick={() => toggleModal()}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 p-4">
                <p className="text-white text-center">{images[currentIndex].description}</p>
              </div>
            </div>
            
            {/* Previous Button */}
            <button 
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl hover:text-gray-300"
              onClick={prevImage}
            >
              &#8249;
            </button>
            
            {/* Next Button */}
            <button 
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl hover:text-gray-300"
              onClick={nextImage}
            >
              &#8250;
            </button>
            
            {/* Close Button */}
            <button 
              className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300"
              onClick={() => toggleModal()}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default ModalCarousel
