const Card = ({ children }) => {
  return (
    <div className="border border-blue-700 text-center mt-5 bg-blue-950 text-white mx-auto w-1/4 rounded-lg ">
      { children }
    </div>
  )
}
export default Card