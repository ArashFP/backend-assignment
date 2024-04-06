import { useState } from "react"
import { ShoppingCart } from "./ShoppingCart"

const Dropdown = ({ children }) => {

  const [isOpen, setIsOpen] = useState(false)

  return (
  <>
    <div className="relative inline-block text-left">
      <div>
        <button onClick={() => setIsOpen(state => !state)} type="button" className="text-white align-middle" id="menu-button" aria-expanded="true" aria-haspopup="true">
          {children}
        </button>
      </div>

      {isOpen && (
      <div className="absolute right-0 z-10 mt-2 w-[450px] origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button">
        <div className="py-1" role="none">
          <ShoppingCart setIsOpen={setIsOpen}/>
        </div>
      </div>
        )}

    </div>
  </>
  )
}
export default Dropdown