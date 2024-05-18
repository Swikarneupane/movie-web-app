import React, { useEffect, useState } from "react"
import { BASE_URL_M } from "@/components/constant"
import { Inter } from "next/font/google"
import Link from "next/link"
const inter = Inter({ subsets: ["latin"] })

const ModalLink = ({ id }) => {
  const [iFrame, setIFrame] = useState("")
  //   const [selectedMovie, setSelectedMovie] = useState(null)
  const getIframe = async () => {
    try {
      const response = await fetch(`${BASE_URL_M}/${id}`, {
        mode: "no-cors",
      })
      if (!response.ok) {
        throw new Error("Network response was not ok")
      }
      const data = await response.json()
      setIFrame(data)
      //     .then((response) => await response.json())
      //       .then((data) => setIFrame(data.results))
      //     .catch((error) => console.log("Error fetching movies: ", error));
      // if (!response.ok) {
      //   throw new Error('Network response was not ok');
      // }
      // const data = await response.json();
      // return data;
    } catch (error) {
      console.error("Error fetching iframe data:", error)
      return null
    }
  }

  useEffect(() => {
    getIframe()
  }, [])

  //   function handleCloseModal() {
  //     setSelectedMovie(null)
  //   }

  //   function handleMovieClick(movie) {
  //     setSelectedMovie(movie)
  //   }

  return (
    <div
      className={`flex items-center ${inter.className} justify-center w-max px-2 py-1 bg-blue-500 cursor-pointer text-white`}>
      <button>Watch for free</button>
      <div>
        {/* <h1>Embed {type}</h1> */}
        {iFrame && <div dangerouslySetInnerHTML={{ __html: iFrame.embed }} />}
      </div>
    </div>
  )
}

export default ModalLink
