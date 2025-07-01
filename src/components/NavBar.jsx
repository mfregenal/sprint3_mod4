import { useState } from "react"
import ShoppingCart from "./ShoppingCart"
import { useCartContext } from "../context/CartContext"

function NavBar() {
  const [clic, setClic] = useState(false)
  const { myProductsList } = useCartContext()

  const toggleMenu = () => {
    setClic(!clic)
  }

  return (
    <div className="flex justify-around max-md:justify-between items-center w-full bg-sky-800 text-white p-2 max-md:fixed">

      {/* LOGO */}
      <div className="flex justify-center items-center">
        <img src="/logo.png" alt="logo" className="w-20 h-16" />
      </div>

      {/* BOTÓN DE LISTA */}
      <div className="flex flex-col items-center">
        { myProductsList?.length === 0
          ? <button className="text-white hover:text-emerald-500 hover:scale-105" onClick={toggleMenu}>
              <i className="bi bi-cart text-2xl"></i>
              <h2 className="md:text-xl">Mi carrito</h2>
            </button>
          : <button className="text-white hover:text-emerald-500 hover:scale-105" onClick={toggleMenu}>
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