import { useState } from "react"

function NavBar() {
  const [clic, setClic] = useState(false)

  const toggleMenu = () => {
    setClic(!clic)
  }

  return (
    <div className="flex justify-evenly max-md:justify-between items-center bg-sky-800 text-white p-2">

      {/* LOGO */}
      <div className="flex justify-center items-center">
        <img src="/logo.png" alt="logo" className="w-20 h-16" />
      </div>

      {/* BOTÓN DE LISTA */}
      <div className="flex items-center">
        <h2 className="md:mr-2 md:text-2xl">Mi carrito</h2>
        <button className="text-white p-2" onClick={toggleMenu}>
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M4 6h16M4 12h16M4 18h16" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
        </button>
      </div>

    </div>
  )
}

export default NavBar