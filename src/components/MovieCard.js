import React from "react"
import Image from "next/image"

const MovieCard = ({ movie, onClick }) => {
  const imageUrl = `https://image.tmdb.org/t/p/w300${movie.poster_path}`
  const truncatedTitle =
    movie.title.length > 25 ? movie.title.substring(0, 22) + "..." : movie.title
  return (
    <div
      onClick={() => onClick(movie)}
      className="w-[100%] cursor-pointer flex flex-col items-center justify-center my-10">
      <div className="relative">
        <Image
          src={imageUrl}
          alt={movie.title}
          height={128}
          width={192}
          objectFit="cover"
          className="rounded-sm w-[90%]"
        />
      </div>
      <h3 className="font-medium">{truncatedTitle}</h3>
    </div>
  )
}

export default MovieCard
