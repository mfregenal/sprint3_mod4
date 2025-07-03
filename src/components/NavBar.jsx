import { useState } from "react"
import ShoppingCart from "./ShoppingCart"
import { useCartContext } from "../context/CartContext"
import { useThemeContext } from "../context/ThemeContext"

function NavBar() {
  const [clic, setClic] = useState(false)
  const { myProductsList } = useCartContext()
  const { isDark, toggleTheme } = useThemeContext()

  const toggleMenu = () => {
    setClic(!clic)
  }

  return (
    <div className="flex justify-around max-md:justify-between items-center w-full bg-sky-800 dark:bg-sky-950 text-white p-2 max-md:fixed
                  dark:text-gray-300">

      {/* LOGO */}
      <div className="flex justify-center items-center">
        <img src="/logo.png" alt="logo" className="w-20 h-16" />
      </div>

      <button onClick={toggleTheme} className="px-3 py-2 rounded-full bg-gray-200 dark:bg-gray-800 text-black dark:text-white hover:scale-105 transition">
        {isDark ? "🌙 Modo oscuro" : "☀️ Modo claro"}
      </button>

      {/* BOTÓN DE LISTA */}
      <div className="flex flex-col items-center">
        { myProductsList?.length === 0
          ? <button className="hover:text-emerald-500 hover:scale-105" onClick={toggleMenu}>
              <i className="bi bi-cart text-2xl"></i>
              <h2 className="md:text-xl">Mi carrito</h2>
            </button>
          : <button className="hover:text-emerald-500 hover:scale-105" onClick={toggleMenu}>
              <i className="bi bi-cart-fill text-2xl"></i>
              <h2 className="md:text-xl">Mi carrito</h2>
            </button>
        }
      </div>

      {/* MENU SUPERPUESTO */}
      {/* RENDERIZADO CONDICIONAL */}
      {clic && (
        <div className="fixed top-0 w-full h-full bg-black/80 flex flex-col justify-center items-center">
          <ShoppingCart toggleMenu={toggleMenu}/>
        </div>
      )}

    </div>
  )
}

export default NavBar