import cart from "./assets/cart.svg"
import { Link } from "react-router-dom"
import { useCartContext } from "../../Context/CartContext"

const CartWidget = () => {
    const {totalProducts} = useCartContext()

    const img = {
        width: "20%"
    }
    
    return (
        <div className="bg-white text-black rounded-lg font-bold p-2 flex justify-between items-center mx-auto">
            <Link to="/cart">
                <img src={cart} alt="cart-widget" style= {{width:40, height:40,}} />
            
            </Link>
            <span>
                <Link to="/cart">
                    {totalProducts() || ''}
                </Link>
            </span>
{/*             <p className="w-1/2 font-bold text-xl">0</p> */}
        </div>
    )
}

export default CartWidget