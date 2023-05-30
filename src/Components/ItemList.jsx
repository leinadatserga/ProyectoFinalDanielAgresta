import Item from "./Item"

const ItemList = ({ product }) => {
    return(
        <>
            {product.map( prod => <Item key = { prod.id } item = { prod } />)}
        </>
    )
}
export default ItemList;