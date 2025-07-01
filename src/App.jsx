import NavBar from "./components/NavBar"
import ProductsList from "./components/ProductsList"
import Footer from "./components/Footer"

function App() {

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar/>
      <ProductsList className="flex-grow"/>
      <Footer/>
    </div>
  )
}

export default App
