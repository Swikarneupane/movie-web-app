import React from "react"

const Modal = ({ movie, onClose }) => {
  if (!movie) return null

  return (
    <div>
      <p>
        <p>Movie Name: {movie.original_title}</p>
        <p>Movie Description: {movie.overview}</p>
        <p>Popularity: {movie.popularity}</p>
        <p>Release Date: {movie.release_date}</p>
      </p>
      <button onClick={onClose}>Close</button>
    </div>
  )
}

export default Modal
