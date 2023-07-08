import LogoShop from '../carrito.png'
import './CartWidget.css'
const cartlogo = LogoShop




export const CartWidget = () =>{
    return (
        <div>
        <img src={cartlogo} alt="Shopcart"
        height={28}
        width={50}
        className='xd'/>
        <small className='lol'>2</small>
        </div>
    )
}
export default CartWidget