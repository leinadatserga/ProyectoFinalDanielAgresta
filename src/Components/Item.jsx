import { Link } from "react-router-dom";
const Item = ({ item }) => {
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="card col-3 m-5">
                    <Link to={ "/item/" + item.id } className="text-white text-decoration-none">
                        <h4 className="card-title text-center">{ item.nombre }</h4>
                        <img src = { item.imagen } className="img-fluid" alt = { item.nombre }/>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default Item;