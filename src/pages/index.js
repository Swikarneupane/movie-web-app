import Image from "next/image"
import { Inter, Modak } from "next/font/google"
import { BASE_URL } from "@/components/constant"
import { useState } from "react"
import { SearchParamsContext } from "next/dist/shared/lib/hooks-client-context.shared-runtime"
import MovieGrid from "@/components/MovieGrid"
import Modal from "@/components/Modal"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  const [query, setQuery] = useState("")
  const [movies, setMovies] = useState({})
  const [selectedMovie, setSelectedMovie] = useState(null)
  const getMovies = async (query) => {
    try {
      const response = await fetch(
        `${BASE_URL}/search/movie?api_key=${
          process.env.NEXT_PUBLIC_API_KEY
        }&query=${encodeURIComponent(query)}`
      )
      return await response.json()
    } catch (err) {
      console.log(err)
      return []
    }
  }

  const handleSearch = async (e) => {
    e.preventDefault()
    if (!query) return
    const results = await getMovies(query)
    setMovies(results.results)
  }

  function handleMovieClick(movie) {
    setSelectedMovie(movie)
  }

  function handleCloseModal() {
    setSelectedMovie(null)
  }

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
      Hello! Welcome to movie db
      <form onSubmit={handleSearch}>
        <input
          name="moviename"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className=" border-2 border-black p-1"
          placeholder="Search for a movie..."
        />
        <button type="submit" className=" bg-fuchsia-800 p-2 text-white">
          Search
        </button>
      </form>
      {/* Movie details here! */}
      <MovieGrid movies={movies} handleMovieClick={handleMovieClick} />
      <Modal movie={selectedMovie} onClose={handleCloseModal} />
    </main>
  )
}
