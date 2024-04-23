import MovieGrid from "@/components/MovieGrid"
import React, { useEffect, useState } from "react"
import { BASE_URL } from "@/components/constant"
import Modal from "@/components/Modal"
import { Inter } from "next/font/google"
const inter = Inter({ subsets: ["latin"] })

const Popular = () => {
  const [movies, setMovies] = useState([])
  const [selectedMovie, setSelectedMovie] = useState(null)
  useEffect(() => {
    fetch(
      `${BASE_URL}/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => setMovies(data.results))
      .catch((error) =>
        console.log("Error fetching movies in Now Playing: ", error)
      )
  }, [])

  function handleCloseModal() {
    setSelectedMovie(null)
  }

  function handleMovieClick(movie) {
    setSelectedMovie(movie)
  }

  return (
    <div
      className={`flex items-center ${inter.className} justify-center w-full pt-8`}>
      <main className="flex items-center justify-center flex-col w-[90%]">
        <h1 className="font-semibold text-3xl text-center">Popular Movies</h1>
        <MovieGrid movies={movies} handleMovieClick={handleMovieClick} />
        {selectedMovie && (
          <Modal movie={selectedMovie} onClose={handleCloseModal} />
        )}
      </main>
    </div>
  )
}

export default Popular
