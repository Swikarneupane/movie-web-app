import React from "react"
import { Inter } from "next/font/google"
const inter = Inter({ subsets: ["latin"] })

const Footer = () => {
  return (
    <div>
      <div
        className={`text-gray-700 ${inter.className} z-20 absolute text-xs sm:text-sm text-center w-full mx-auto py-2`}>
        Developed by{" "}
        <strong>
          <a href="https://www.swikarneupane.com.np/" target="_blank">
            Swikar Neupane
          </a>
        </strong>{" "}
        using{" "}
        <strong>
          <a href="https://www.themoviedb.org/" target="_blank">
            TMDB API
          </a>
        </strong>
      </div>
    </div>
  )
}

export default Footer
