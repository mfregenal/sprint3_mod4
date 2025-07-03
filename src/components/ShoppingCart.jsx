import { useCartContext } from "../context/CartContext"
import ProductCart from "./ProductCart"

function ShoppingCart({toggleMenu}) {

  const { myProductsList } = useCartContext()

  return (
    <>
      <header>
        <nav className="flex justify-end items-center lg:w-3xl w-72 bg-sky-800
                      dark:bg-sky-950">
          <button onClick={() => toggleMenu()}>
            <i className="bi bi-x m-1 text-4xl"></i>
          </button>
        </nav>
      </header>

      <main className="flex flex-col justify-center items-center bg-white/70 lg:w-3xl w-72 p-4 gap-4 overflow-y-scroll h-auto
                      dark:bg-gray-400/70">
        { myProductsList.length === 0
          ? <p className="text-center text-lg text-black">Tu carrito está vacío</p>
          : myProductsList.map( (product) => (
              <div key={product.id}>
                <ProductCart product={product}></ProductCart>
              </div>
            ))
        }
      </main>

      <footer className="flex justify-center items-center lg:w-3xl w-72 bg-sky-800 text-xl p-2
                        dark:bg-sky-950">
        <p><strong>Monto Total:</strong> ${myProductsList.reduce( (total, product) => total + product.precio * product.cantidad, 0 )}</p>
      </footer>
    </>
  )
}

export default ShoppingCart