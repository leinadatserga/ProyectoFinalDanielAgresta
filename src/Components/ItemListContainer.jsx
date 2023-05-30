import { useEffect, useState } from "react";
import products from "./BaseDeDatos/Productos.json";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({greeting}) => {
    const [product, setProduct] = useState([]);
    const { categoryId } = useParams();
    useEffect(() => {
        const promic = new Promise((resolve) => {
            setTimeout (() => {
                resolve(categoryId ? products.filter(filt => filt.categoria === categoryId) : products)
            }, 2000); 
        });
        promic.then(data => {
           setProduct(data); 
        })
    }, [categoryId]);
    return(
        <div>
            <div>
                <p className="bienvenida">{greeting}</p>
            </div>
            <div className="container my-5">
                <div className="row">
                    <div className="col">
                    <ItemList product={product} />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ItemListContainer
