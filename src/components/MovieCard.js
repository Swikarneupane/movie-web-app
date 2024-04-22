import React from "react"
import Image from "next/image"

const MovieCard = ({ movie, onClick }) => {
  const imageUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`
  return (
    <div onClick={() => onClick(movie)}>
      <Image
        src={imageUrl}
        alt={movie.title}
        height={500}
        width={500}
        objectFit="cover"
        className="rounded-md"
      />
      <h3>{movie.title}</h3>
    </div>
  )
}

export default MovieCard
