import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getProducts } from "../../store/features/products/productSlice"

function Home() {

  const dispatch = useDispatch() 


  useEffect(() => {
    dispatch(getProducts())
  }, [])
  
  const { products, loading, error }= useSelector(state => state.productList)

  
  
  if(error) return (
    <div className="text-black"> 
      <p> { error }</p> 
    </div>
  )
  



  return (
    <>
      <div className="text-center text-black mt-10 text-2xl font-bold underline ">
        Welcome to TechHub!
      </div>
      <div className="mx-auto font-normal mt-5 bg-blue-800 m-4 px-2 py-4 rounded-3xl w-3/4">
        <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel aliquam provident ipsum et dolorem, tempore rerum sed dolores impedit cum at accusantium molestiae officiis odit, quaerat saepe possimus libero, pariatur assumenda sunt quae voluptate magnam eum. Sequi amet quo quasi exercitationem, dignissimos facilis eum esse voluptate! Cumque illo quae quo.</p>
        <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel aliquam provident ipsum et dolorem, tempore rerum sed dolores impedit cum at accusantium molestiae officiis odit, quaerat saepe possimus libero, pariatur assumenda sunt quae voluptate magnam eum. Sequi amet quo quasi exercitationem, dignissimos facilis eum esse voluptate! Cumque illo quae quo.</p>
        <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel aliquam provident ipsum et dolorem, tempore rerum sed dolores impedit cum at accusantium molestiae officiis odit, quaerat saepe possimus libero, pariatur assumenda sunt quae voluptate magnam eum. Sequi amet quo quasi exercitationem, dignissimos facilis eum esse voluptate! Cumque illo quae quo.</p>
      </div>
      <div className="mx-auto font-normal mt-5 bg-blue-800 m-4 px-2 py-4 rounded-3xl w-3/4">
        <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel aliquam provident ipsum et dolorem, tempore rerum sed dolores impedit cum at accusantium molestiae officiis odit, quaerat saepe possimus libero, pariatur assumenda sunt quae voluptate magnam eum. Sequi amet quo quasi exercitationem, dignissimos facilis eum esse voluptate! Cumque illo quae quo.</p>
        <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel aliquam provident ipsum et dolorem, tempore rerum sed dolores impedit cum at accusantium molestiae officiis odit, quaerat saepe possimus libero, pariatur assumenda sunt quae voluptate magnam eum. Sequi amet quo quasi exercitationem, dignissimos facilis eum esse voluptate! Cumque illo quae quo.</p>
        <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel aliquam provident ipsum et dolorem, tempore rerum sed dolores impedit cum at accusantium molestiae officiis odit, quaerat saepe possimus libero, pariatur assumenda sunt quae voluptate magnam eum. Sequi amet quo quasi exercitationem, dignissimos facilis eum esse voluptate! Cumque illo quae quo.</p>
      </div>
    </>
     
  )
}
export default Home