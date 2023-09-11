import cart from "./assets/cart.svg"

const CartWidget = () => {
    const img = {
        width: "20%"
    }
    
    return (
        <div className="bg-white text-black rounded-lg font-bold p-2 flex justify-between items-center mx-auto">
            <img src={cart} alt="cart-widget" style= {{width:40, height:40,}} />
            <p className="w-1/2 font-bold text-xl">0</p>
        </div>
    )
}

export default CartWidget