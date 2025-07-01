import { useState, useEffect } from "react";

function useCart() {
  const key = 'productsList' // KEY PARA EL LOCALSTORAGE

  const [myProductsList, setMyProductsList] = useState()

  useEffect(() => {
    const initialList = JSON.parse(localStorage.getItem(key)) || [] //CONVERTIR A OBJ DE JAVASCRIPT
    setMyProductsList(initialList); //CARGO EL LISTADO DE PRODUCTOS GUARDADOS EN LOCALSTORAGE
  }, []);

  // AGREGAR NUEVA PELÍCULA A MYPRODCUTLIST (HANDLER)
  const addProduct = (newProduct) => {

    const producExists = myProductsList.some( product => product.id === newProduct.id ) // VERIFICAMOS SI EXISTE EL PRODUCTO EN EL LISTADO
    let newProductsList

    // REVISO QUE EL PRODUCTO NO ESTE REPETIDA
    if (producExists) {
      newProductsList = myProductsList.map( product => {
        if (product.id === newProduct.id) {
          return { ...product, cantidad: product.cantidad + 1 }
        }
        return product
      })
    } else {
      newProductsList = [...myProductsList, { ...newProduct, cantidad: 1 }]
    }

    // const newProductsList = [...myProductsList, newProduct] //(SPREAD OPERATOR)
    setMyProductsList( newProductsList )
    localStorage.setItem(key, JSON.stringify(newProductsList)) //CONVERTIR A FORMATO JSON

    window.alert('Producto añadido al carrito');
  }

  // ELIMINAR UN PRODUCTO DE MYPRODUCTLIST
  const deleteProduct = (id) => {
    const newProductsList = myProductsList.filter ( product => product.id !== id )
    if (newProductsList.length === 0){
      localStorage.removeItem(key);
    } else {
      localStorage.setItem(key, JSON.stringify(newProductsList))
    }
    setMyProductsList(newProductsList)
  }

  // ACTUALIZAR LA CANTIDAD DE UN PRODUCTO
  const updateProductCantidad = (id, nuevaCantidad) => {
    const newProductsList = myProductsList.map(product =>
      product.id === id ? { ...product, cantidad: nuevaCantidad } : product
    )
    setMyProductsList(newProductsList)
    localStorage.setItem(key, JSON.stringify(newProductsList))
  }

  // RETORNO LAS FUNCIONES PARA SU USO
  return {
    myProductsList,
    addProduct,
    deleteProduct,
    updateProductCantidad
  }
}

export default useCart