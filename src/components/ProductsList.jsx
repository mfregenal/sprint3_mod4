import { productsLinks } from "../utils/Links"
import Product from "./Product"

function ProductsList() {
  return (
    <div className="flex-grow flex justify-center items-center max-md:mt-20">
      <div className="grid md:grid-cols-3 justify-center items-center lg:my-10 my-5 lg:w-3/5 w-11/12 lg:gap-20 gap-5">
        {
          productsLinks.map ( (product) => (
            <div key={product.id}>
              <Product product={product}></Product>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default ProductsList