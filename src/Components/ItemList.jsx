import Item from "./Item";

const ItemList = ({ product }) => {
    return(
        <>
            { product.map ( produ => <Item key={ produ.idProd } item = { produ } />)}
        </>
    )
}

export default ItemList;