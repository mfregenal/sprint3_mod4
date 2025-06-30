import { useCartContext } from "../context/CartContext"

function Products({product}) {
  const { addProduct} = useCartContext()

  return (
    <div className="flex justify-center items-center border border-gray-400 w-96 rounded-3xl shadow-xl shadow-gray-300 bg-sky-800">
      <img src={product.img} alt="producto_1" className="h-56 p-2 rounded-3xl"/>
      <div className="flex flex-col gap-4 text-center item text-white p-0.5">
        <h3 className="text-2xl">{product.nombre}</h3>
        <p><strong>Precio:</strong> {product.precio}</p>
        <button className="bg-emerald-500 w-16 rounded-lg border border-green-900" onClick={() => addProduct(product)}>
          <i className="bi bi-cart-plus text-2xl"></i>
        </button>
      </div>
    </div>
  )
}

export default Products