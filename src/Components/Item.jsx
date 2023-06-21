import { Link } from "react-router-dom";
const Item = ({ item }) => {
    return (
        <>
            <div className="card w-25 g-2 mx-4">
                <Link to={ "/item/" + item.id } className="text-white text-decoration-none">
                    <div className="card-body">
                        <h4 className="card-title text-center">{ item.nombre }</h4>
                        <img src = { "/images/" + item.imagen } className="img-fluid" alt = { item.nombre }/>
                    </div>
                </Link>
            </div>
        </>
    )
}
export default Item;