import React from "react"
import MovieCard from "./MovieCard"
import Link from "next/link"

const MovieGrid = ({ movies, handleMovieClick }) => {
  if (!movies.length) return null

  return (
    <div className=" grid grid-cols-3 px-5 w-[60%] mb-8">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} onClick={handleMovieClick} />
      ))}
    </div>
  )
}

export default MovieGrid
