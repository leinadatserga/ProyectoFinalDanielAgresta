import { useState } from "react";

const ItemCount = ({ quantity }) => {
    const [counter, setCounter] = useState(0);
    const [counterStock, setCounterStock] = useState(quantity);
    const [newStock, setNewStock] = useState(quantity);
    const onAdd = () => {
        if (counter < quantity && counterStock > 0) {
            setCounter (counter + 1);
            setCounterStock (counterStock - 1);
        }
    }
    const offAdd = () => {
        if (counter > 0) {
            setCounter (counter - 1);
            setCounterStock (counterStock + 1);
            
        }
    }
    const updateStock = () => {
        if (counterStock >=0) {
        setNewStock(counterStock);
        setCounter(0);
        }
    }
    return(
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="btn-group-lg" role="group" aria-label="Basic example">
                        <button type="button" className="btn btn-outlined-dark"  onClick={ offAdd }>-</button>
                        <button type="button" className="btn btn-info">{ counter }</button>
                        <button type="button" className="btn btn-outlined-dark" onClick= {onAdd }>+</button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col d-flex justify-content-between">
                    <button type="button" className="btn btn-info" onClick={ updateStock }>Agregar al carrito <b>➜ </b></button>
                    <button type="button" className="btn btn-outline-light active">Stock: { newStock }</button>
                </div>
            </div>
        </div>
    )
}
export default ItemCount;