import { useState } from "react";
// import { CartContext } from "./Context/CartContextProvider";
import { Link } from "react-router-dom";

const ItemCount = ({ agregar, quantity }) => {
    const [counter, setCounter] = useState ( 0 );
    const [counterStock, setCounterStock] = useState ( quantity );
    const [added, setAdded] = useState ( false );


    const plusAdd = () => {
        if ( counter < quantity && counterStock > 0 ) {
            setAdded ( true );
            setCounter ( counter + 1 );
            setCounterStock ( counterStock - 1 );
        }
    }
    const offAdd = () => {
        if ( counter > 0 ) {
            setAdded ( true );
            setCounter ( counter - 1 );
            setCounterStock ( counterStock + 1 );
        }
    }
    const onAdd = () => {
        if ( counterStock >=0 ) {
        setAdded ( true );
        agregar ( counter );
        setCounter ( 0 );
        }
    }
    
    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="btn-group-lg" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-outlined-dark"  onClick={ offAdd }>-</button>
                        <button type="button" className="btn btn-info">{ counter }</button>
                        <button type="button" className="btn btn-outlined-dark" onClick= { plusAdd }>+</button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col d-flex justify-content-between">
                    { added && counter > 0 ? <Link to = { "/cart" } className="btn btn-info" onClick={ onAdd } >Enviar al Carrito <b>➜ </b></Link> : <button type="button" className="btn btn-info" ><b>Agrega un Producto</b></button> }
                    <button type="button" className="btn btn-outline-light active">Stock: { counterStock }</button>
                </div>
            </div>
        </div>
    )
}
export default ItemCount;