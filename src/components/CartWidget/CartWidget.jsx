import cart from "./assets/cart.svg"

const CartWidget = () => {
    const img = {
        width: "20%"
    }
    
    return (
        <div style= {{backgroundColor: "white", color:"black", borderRadius:5, padding: 5, fontWeight:500}}>
            <img src={cart} alt="cart-widget" style= {{width:40, height:40,}} />
            0
        </div>
    )
}

export default CartWidget