import React from "react"
import MovieCard from "./MovieCard"

const MovieGrid = ({ movies, handleMovieClick }) => {
  if (!movies.length) return null

  return (
    <div className="border-2 border-black">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} onClick={handleMovieClick} />
      ))}
    </div>
  )
}

export default MovieGrid
