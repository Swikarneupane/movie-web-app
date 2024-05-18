import React from "react"
import ModalLink from "./ModalLink"

const Modal = ({ movie, onClose, ref }) => {
  if (!movie) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center p-4">
      <div className="bg-gray-200 p-4  max-w-xl w-full">
        <div>
          <h3 className="font-bold text-2xl mb-3">{movie.original_title}</h3>
          <p className="mb-3">{movie.overview}</p>
          <p>
            <span className=" font-semibold">Rating:</span>{" "}
            {movie.popularity.toFixed(1)}
          </p>
          <p className="mb-3">
            <span className=" font-semibold">Release Date:</span>{" "}
            {movie.release_date}
          </p>
        </div>
        <div className="flex flex-row justify-between">
          <button
            onClick={onClose}
            className="px-2 py-1 bg-blue-500 cursor-pointer text-white w-max">
            Close
          </button>
          <ModalLink id={movie.id} />
        </div>
      </div>
    </div>
  )
}

export default Modal
