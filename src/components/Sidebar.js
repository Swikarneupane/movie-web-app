import Link from "next/link"
import React, { useState } from "react"
import { Inter } from "next/font/google"
const inter = Inter({ subsets: ["latin"] })
import { useOutsideClick } from "@/customHooks/useOutsideClick"

const navItems = [
  {
    href: "/",
    title: "Home",
  },
  {
    href: "/nowplaying",
    title: "Now Playing",
  },
  {
    href: "/popular",
    title: "Popular",
  },
  {
    href: "/toprated",
    title: "Top Rated",
  },
  {
    href: "/upcoming",
    title: "Upcoming",
  },
]
const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false)
  function closeSidebar() {
    setIsOpen(true)
  }
  const handleClickOutside = () => {
    setIsOpen(false)
  }
  const ref = useOutsideClick(handleClickOutside)
  return (
    <div
      ref={ref}
      className={`fixed py-2 px-5 gap-3 ${inter.className} ${
        isOpen ? "h-full bg-gray-100" : "h-max "
      }`}>
      <button
        className={`${isOpen ? "mb-5" : "mb-0"}`}
        onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <svg
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15">
            <path d="M1.5 1.5l12 12m-12 0l12-12" stroke="currentColor"></path>
          </svg>
        ) : (
          <svg
            viewBox="0 0 15 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            width="15"
            height="15">
            <path
              d="M0 5.5h15m-15-4h15m-15 8h15m-15 4h15"
              stroke="currentColor"></path>
          </svg>
        )}
      </button>
      {isOpen && (
        <div className="transition-all duration-300 mt-5">
          <nav className="flex flex-col gap-2">
            {navItems.map((item) => (
              <Link key={item.href} onClick={closeSidebar} href={item.href}>
                {item.title}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </div>
  )
}

export default Sidebar
