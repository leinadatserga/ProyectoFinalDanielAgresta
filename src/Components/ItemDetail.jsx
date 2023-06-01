import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
    return(
        <div>
            <div className="card w-50 text-white">
                <h2 className="card-title text-center pt-5">{ item.nombre }</h2>
                <img src = { item.imagen } className="image-fluid" alt = { item.nombre }/>
                <div className="card-body">
                    <p className="card-text fs-4">{ item.descripcion }</p>
                    <h4 className="text-center shadow-lg bg-info rounded text-danger p-2">Precio: u$s { item.precio } iva incl.</h4>
                    {item.stock && <ItemCount quantity={ item.stock } />}
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;