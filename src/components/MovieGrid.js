import React from "react"
import MovieCard from "./MovieCard"
import Link from "next/link"

const MovieGrid = ({ movies, handleMovieClick }) => {
  if (!movies.length) return null

  return (
    <div className=" grid min-h-full  xl:grid-cols-3 md:grid-cols-2 grid-cols-1 px-5 lg:w-[60%] w-[80%] mb-8">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} onClick={handleMovieClick} />
      ))}
    </div>
  )
}

export default MovieGrid
