import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import products from "./BaseDeDatos/Productos.json";
import ItemDetail from "./ItemDetail";


const ItemDetailContainer = () => {
    const [product, setProduct] = useState({});
    const { id } = useParams();

    useEffect(() => {
        const promic = new Promise((resolve) => {
            setTimeout (() => {
                resolve(products.find(fin => fin.id === parseInt (id)))
            }, 2000); 
        });
        promic.then(data => {
           setProduct(data); 
        })
    }, [id]);

    return(
        <div>
            <p>"rrrr"</p>
        <div className="container my-5">
            <div className="row justify-content-center mb-5 w-75">
                <div className="col">
                <ItemDetail item={ product } />
                </div>
            </div>
        </div>
        </div>
    )
}
export default ItemDetailContainer;