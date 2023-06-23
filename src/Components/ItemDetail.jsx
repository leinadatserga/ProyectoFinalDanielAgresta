import ItemCount from "./ItemCount";
import { CartContext } from "./Context/CartContextProvider";
import { useContext, useState } from "react";
import { useEffect } from "react";

const ItemDetail = ({ item, stock }) => {
    const { addItem } = useContext ( CartContext );
    const [ elemento, setElemento ] = useState ({});
    const agregar = ( counter ) => {
        addItem ( elemento, counter )
    }
    useEffect (() => {
        setElemento ( item );
    }, [ item ]);
    return(
        <div>
            <div className="card w-50 text-white">
                <h2 className="card-title text-center pt-5">{ elemento.nombre }</h2>
                <img src = { "/images/" + elemento.imagen } className="image-fluid" alt = { elemento.nombre }/>
                <div className="card-body">
                    <p className="card-text fs-4">{ elemento.descripcion }</p>
                    <h4 className="text-center shadow-lg bg-info rounded text-danger p-2">Precio: u$s { elemento.precio } iva incl.</h4>
                    { stock && <ItemCount quantity = { stock } agregar = { agregar } /> }
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;