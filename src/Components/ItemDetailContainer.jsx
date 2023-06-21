import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { doc, getDoc, getFirestore } from "firebase/firestore";


const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams();
    const exs = product.stock;


    useEffect(() => {
       const dataBase = getFirestore();
       const detalle = doc( dataBase, "products", id);
       getDoc ( detalle ).then ( finded => {
        setProduct ({ id:finded.id, ...finded.data() });
       })
    }, [ id ]);

    return(
        <div className="container my-5">
            <div className="row justify-content-center mb-5 w-75">
                <div className="col">
                    <ItemDetail item={ product } stock={ exs } />
                </div>
            </div>
        </div>
    )
}
export default ItemDetailContainer;