import ItemCount from "./ItemCount";

const ItemDetail = ({item}) => {
    return(
        <div className="container">
            <div className="row">
                <div className="col-5 my-4">
                    <div className="card text-white">
                        <h4 className="card-title text-center pt-5">{ item.nombre }</h4>
                        <img src = { item.imagen } className="image-fluid" alt = { item.nombre }/>
                        <div className="card-body">
                            <p className="card-text fs-4">{ item.descripcion }</p>
                            <h4>Precio: u$s {item.precio} iva incl.</h4>
                            {item.stock && <ItemCount quantity={ item.stock } />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail;