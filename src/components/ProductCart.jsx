import { useCartContext } from "../context/CartContext"
import useCounter from "../hooks/useCounter"
import { useEffect } from "react"

function ProductCart ({product}) {
  const { deleteProduct, updateProductCantidad } = useCartContext()
  const { counter, increment, decrement } = useCounter(product.cantidad)

  // ACTUALIZA AUTOMÁTICAMENTE LA CANTIDAD EN EL CONTEXTO
  useEffect(() => {
    updateProductCantidad(product.id, counter);
  }, [counter]); // SE EJECUTA CADA VEZ QUE COUNTER CAMBIA

  return (
    <div className="grid grid-cols-3 items-center lg:w-xl w-64 rounded-xl bg-sky-800 p-2
                  dark:bg-sky-950">
      {/* NOMBRE Y PRECIO */}
      <div className="flex flex-col text-center item p-0.5">
        <h3 className="lg:text-xl text-xs">{product.nombre}</h3>
        <p className="max-lg:text-xs"><strong>Precio:</strong> ${product.precio}</p>
      </div>

      <div className="flex justify-center items-center rounded-xl p-1 gap-2">
        {/* BOTÓN MENOS */}
        <button className="hover:text-emerald-500" onClick={ () => {decrement()} }>
          <i className="bi bi-dash-circle lg:text-2xl"></i>
        </button>

        <p className="border px-2 max-lg:text-xs">{counter}</p>
        
        {/* BOTÓN MAS */}
        <button className="hover:text-emerald-500" onClick={ () => {increment()} }>
          <i className="bi bi-plus-circle lg:text-2xl"></i>
        </button>
      </div>

      <div className="flex justify-center">
        {/* BOTÓN ELIMINAR PRODUCTO */}
        <button className="bg-red-500 lg:w-16 w-10 rounded-lg border border-green-900 hover:scale-105 hover:bg-red-700
                          dark:bg-red-700 dark:hover:bg-red-500" 
          onClick={() => deleteProduct(product.id)}>
            <i className="bi bi-cart-dash lg:text-2xl"></i>
        </button>
      </div>
    </div>
  )
}

export default ProductCart