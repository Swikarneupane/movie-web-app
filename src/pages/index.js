import Image from "next/image"
import { Inter } from "next/font/google"
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
        `${BASE_URL}/search/movie?api_key=${process.env.NEXT_PUBLIC_API_KEY}&query=${encodeURIComponent(query)}`
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
      className={`flex min-h-screen flex-col gap-2 items-center justify-center p-10 ${inter.className}`}>
      <p className="text-xl font-medium">
        {!movies.length ? "Welcome to MoviFlix" : "MoviFlix"}
      </p>
      <form onSubmit={handleSearch}>
        <input
          name="moviename"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className=" border-2 border-black p-1 mr-1 hover:border-2 hover:border-black focus:border-2 focus:outline-none"
          placeholder="Search for a movie..."
        />
        <button
          type="submit"
          className=" bg-black px-3 p-1 border-2 border-black text-white md:hover:text-black md:hover:bg-white duration-300">
          Search
        </button>
      </form>
      <MovieGrid movies={movies} handleMovieClick={handleMovieClick} />
      <Modal movie={selectedMovie} onClose={handleCloseModal} />
    </main>
  )
}
