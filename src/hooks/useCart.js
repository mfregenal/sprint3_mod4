import { useState, useEffect } from "react";

function useCart() {
  const key = 'productList'

  const [myPodructList, setMyProductList] = useState()

  useEffect(() => {
    const initialList = JSON.parse(localStorage.getItem(key)) || [] //CONVERTIR A OBJ DE JAVASCRIPT
    setMyProductList(initialList); //CARGO EL LISTADO DE PRODUCTOS GUARDADOS EN LOCALSTORAGE
  }, []);

  // AGREGAR NUEVA PELÍCULA A MYPRODCUTLIST (HANDLER)
  const addProduct = (newProduct) => {

    // REVISO QUE EL PRODUCTO NO ESTE REPETIDA
    if (myPodructList.some( product => product.id === newProduct.id)) {
      return;
    }

    const newProductList = [...myPodructList, newProduct] //(SPREAD OPERATOR)
    setMyProductList( newProductList )
    localStorage.setItem(key, JSON.stringify(newProductList)) //CONVERTIR A FORMATO JSON
  }

  // ELIMINAR UN PRODUCTO DE MYPRODUCTLIST
  const deleteProduct = (id) => {
    const newProductList = myPodructList.filter ( product => product.id !== id )
    setMyProductList(newProductList)
    localStorage.setItem(key, JSON.stringify(newProductList))
  }

  // RETORNO LAS FUNCIONES PARA SU USO
  return {
    myPodructList,
    addProduct,
    deleteProduct
  }
}

export default useCart