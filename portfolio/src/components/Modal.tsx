import { useState } from 'react'

interface ModalProps {
  imagePath: string
  description: string
  buttonText?: string
}

const Modal = ({ imagePath, description, buttonText = "View Plan" }: ModalProps) => {
  const [showModal, setShowModal] = useState(false)

  const toggleModal = () => {
    setShowModal(!showModal)
    if (!showModal) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }

  return (
    <>
      <button
        onClick={toggleModal}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded transition-colors duration-200"
      >
        {buttonText}
      </button>

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
          <div className="relative max-w-4xl max-h-full p-4">
            <img 
              src={imagePath} 
              alt={description} 
              className="max-w-full max-h-full object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 p-4">
              <p className="text-white text-center">{description}</p>
            </div>
            
            {/* Close Button */}
            <button 
              className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300"
              onClick={toggleModal}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default Modal
