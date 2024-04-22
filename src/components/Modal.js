import React from "react"

const Modal = ({ movie, onClose }) => {
  if (!movie) return null
  return (
    <div>
      Information here
      <button onClick={onClose}>Close</button>
    </div>
  )
}

export default Modal
