import { useContext } from "react";
import { CartContext } from "./Context/CartContextProvider";
import { Link } from "react-router-dom";

const CartWidget = () => {

    const { totalCart } = useContext( CartContext );

    return(
        <div>
            <Link to = { "/cart" }>
            {(( totalCart() !== 0) ? <button className="cantidad" >{ totalCart() }</button> : <button className="cantidad" ></button> )}
            </Link>
        </div>
    )
}
export default CartWidget;