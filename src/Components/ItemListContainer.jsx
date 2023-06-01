import { useEffect, useState } from "react";
import products from "./BaseDeDatos/Productos.json";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
    const [product, setProduct] = useState([]);
    const { categoryId } = useParams();
    let cat = ""
    useEffect(() => {
        const promic = new Promise((resolve) => {
            setTimeout (() => {
                resolve(categoryId ? products.filter(filt => filt.categoria === categoryId) : products);
            }, 2000); 
        });
        promic.then(data => {
           setProduct(data); 
        })
    }, [categoryId]);
    categoryId ? cat = categoryId : cat=""
    return(
        <div className="container-fluid mb-5">
            <div>
                 <p className="bienvenida">{ greeting + cat }</p>
            </div>
            <div className="row justify-content-center">
                <ItemList product={ product } />
            </div>
        </div>
    )
}
export default ItemListContainer
