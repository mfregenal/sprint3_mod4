import { useCartContext } from "../context/CartContext"
import { useState } from "react";
import AlertMessage from "./AlertMessage";

function Product ({product}) {
  const { addProduct } = useCartContext()
  const [showAlert, setShowAlert] = useState(false);

  const handleAddProduct = () => {
    addProduct(product);
    setShowAlert(true);

    setTimeout(() => setShowAlert(false), 3000);
  };

  return (
    <div className="flex max-xl:flex-col justify-center items-center border border-gray-400 xl:w-96 w-48 rounded-3xl shadow-xl shadow-gray-300 bg-sky-800">
      {/* IMAGEN DEL PRODUCTO */}
      <img src={product.img} alt="producto_1" className="lg:h-56 h-28 p-2 rounded-3xl"/>

      <div className="flex flex-col gap-4 text-center max-lg: items-center text-white lg:p-0.5 p-2">
        {/* NOMBRE */}
        <h3 className="text-2xl">{product.nombre}</h3>

        {/* PRECIO */}
        <p><strong>Precio:</strong> ${product.precio}</p>

        {/* BOTÓN COMPRAR */}
        <button className="flex justify-center items-center bg-emerald-500 w-16 rounded-lg border border-green-900 hover:scale-105 hover:bg-emerald-700"
          onClick={handleAddProduct}>
            <i className="bi bi-cart-plus text-2xl"></i>
        </button>
        {showAlert && <AlertMessage message="Producto añadido al carrito" />}
      </div>
    </div>
  )
}

export default Product