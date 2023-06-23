import React, { useEffect, useState } from "react";
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => {
    const [ product, setProduct ] = useState ([]);
    const { categoryId } = useParams ();
    let cat = "";
    useEffect (() => {
        const dataBase = getFirestore ();
        const productsCollection = collection ( dataBase, "products" );
        const search = categoryId ? query ( productsCollection, where ( "categoria", "==", categoryId )) : productsCollection;
        getDocs ( search ).then ( result => {
            if ( result.size > 0 ) {
                setProduct ( result.docs.map ( finded => ({ id:finded.id, ...finded.data() })));
            } else {
                console.error ( "Error, no hay productos en 'collection'" );
            }
        });
    }, [ categoryId ]);
    categoryId ? cat = categoryId : cat=""
    return(
        <div className="container-fluid mb-5">
            <div>
                 <p className="bienvenida">{ greeting + cat }</p>
            </div>
            <div className="row justify-content-center">
                <ItemList product = { product } />
            </div>
        </div>
    )
}

export default ItemListContainer;
