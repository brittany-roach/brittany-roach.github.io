import ModalCarousel from '../components/ModalCarousel'

const ArtWork = () => {
  const images = [
    {
      imagePath: "/images/artwork/drawing_of_picture.jpg",
      description: "Hand Rendering - re-creation of magazine photo"
    },
    {
      imagePath: "/images/artwork/textbook_drawing.jpg",
      description: "Hand Rendering - re-creation of textbook photo. (Magic Marker- Richard McGarry & Greg Madsen)"
    },
    {
      imagePath: "/images/artwork/magazine_sketch.jpg",
      description: "Hand Rendering - re-creation of magazine photo"
    },
    {
      imagePath: "/images/artwork/kitchen_sketch.jpg",
      description: "Hand Drawing of kitchen (Designed by Brittany Roach)"
    }
  ]

  return (
    <div className="container text-center my-5 py-4">
      <div className="flex justify-center">
        <ModalCarousel images={images} />
      </div>
    </div>
  )
}

export default ArtWork
