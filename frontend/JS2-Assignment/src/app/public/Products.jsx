import { useEffect, useState } from "react"
import axios from 'axios'
import ProductCard from "../../components/ProductCard"

function Products() {
  
  const [products, setProducts] = useState([])

  const [filter, setFilter] = useState('')


  useEffect(() => {

    const getProducts = async () => {
      const res = await axios.get(`https://js2-ecommerce-api.vercel.app/api/products?category=${filter}`)
      setProducts(res.data)
      
    }
    getProducts()
  }, [filter])


  return (
    <div>
      <div className="bg-blue-900 w-3/3 h-20 flex items-center justify-center border-t">
        <div className="bg-blue-900 w-1/3 flex justify-between">
          <button onClick={() => setFilter('laptop')}>Laptops</button>
          <p>/</p>
          <button onClick={() => setFilter('mobiltelefoner')}>Phones</button>
          <p>/</p>
          <button onClick={() => setFilter('TV')}>Tv</button>
          <p>/</p>
          <button onClick={() => setFilter('dammsugare')}>Vacuums</button>
        </div>
      </div>
      <div className="grid grid-cols-6 gap-4 mt-8 justify-items-center items-center">
        {
          products.map(product =>( 
            <ProductCard key={product._id} product={product} />
          ))
        }
      </div>
    </div>
  )
}
export default Products