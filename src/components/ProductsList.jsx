import { productsLinks } from "../utils/Links"
import Products from "./Products"

function ProductsList() {
  return (
    <div className="flex justify-center items-center">
      <div className="grid grid-cols-3 justify-center items-center my-10 w-3/5 gap-20">
        {
          productsLinks.map ( (product) => (
            <div key={product.id}>
              <Products product={product}></Products>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default ProductsList