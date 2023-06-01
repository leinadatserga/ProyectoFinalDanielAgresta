import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";

const NavBar = ({ cantidad }) => {
    return(
        <div className="nav">
            <div className="cart">
                <img className="icono" src="./images/Icono AG.png" alt="logoPrincipal" />
                <Link to={ "/" } ><img className="marca" src="./images/Marca.png" alt="marca" /></Link>
                <CartWidget amount={ cantidad } />       
            </div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse d-flex justify-content-evenly" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link active fs-3 text-primary-emphasis" to="/category/Cámaras de Seguridad">- Cámaras de seguridad -</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active fs-3 text-primary-emphasis" to="/category/Equipos de Grabación">- Equipos NVR/DVR -</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active fs-3 text-primary-emphasis" to="/category/Cables y terminales">- Cables y terminales -</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active fs-3 text-primary-emphasis" to="/category/Accesorios de instalación">- Accesorios de instalación -</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar;