import { useState } from 'react'

interface CarouselImage {
  large: string
  small: string
  alt: string
}

interface CarouselProps {
  images: CarouselImage[]
}

const Carousel = ({ images }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
  }

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="relative mb-32">
      {/* Main Image */}
      <div className="relative overflow-hidden rounded-lg">
        <img 
          src={images[currentIndex].large} 
          alt={images[currentIndex].alt}
          className="w-full h-96 object-cover"
        />
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-3xl hover:text-gray-300 bg-black bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center"
      >
        &#8249;
      </button>
      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-3xl hover:text-gray-300 bg-black bg-opacity-50 rounded-full w-12 h-12 flex items-center justify-center"
      >
        &#8250;
      </button>

      {/* Indicators */}
      <div className="absolute -bottom-24 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-20 h-12 rounded overflow-hidden ${
              index === currentIndex ? 'ring-2 ring-blue-500' : ''
            }`}
          >
            <img 
              src={image.small} 
              alt={image.alt}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  )
}

export default Carousel
