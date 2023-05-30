import { Link, NavLink } from "react-router-dom";
import CartWidget from "./CartWidget";
const NavBar = ({cantidad, nombre, imagen}) => {
    
    return(
        <div className="nav">
            <div className="cart">
                <img className="icono" src="./images/Icono AG.png" alt="logoPrincipal" />
                <Link to={"/"} ><img className="marca" src="./images/Marca.png" alt="marca" /></Link>
                <CartWidget amount={cantidad} />       
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
                                <NavLink className="nav-link active fs-3 text-primary-emphasis" to="/category/">- Cables y terminales -</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link active fs-3 text-primary-emphasis" to="/category/">- Accesorios de instalación -</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* <div className="listadoProductos">
                <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown" data-bs-theme="dark">
                            <ul className="navbar-nav">
                                <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle fs-3 text-primary-emphasis"  role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                                Cámaras de seguridad
                                </Link>
                                <ul className="dropdown-menu">
                                    <li><NavLink className="dropdown-item text-primary-emphasis" to="/">{nombre[0]}{imagen[0]}</NavLink></li>
                                    <li><NavLink className="dropdown-item text-primary-emphasis" to="/">{nombre[1]}{imagen[1]}</NavLink></li>
                                    <li><NavLink className="dropdown-item text-primary-emphasis" to="/">{nombre[2]}{imagen[2]}</NavLink></li>
                                    <li><NavLink className="dropdown-item text-primary-emphasis" to="/">{nombre[3]}{imagen[3]}</NavLink></li>
                                    <li><NavLink className="dropdown-item text-primary-emphasis" to="/">{nombre[4]}{imagen[4]}</NavLink></li>
                                    <li><NavLink className="dropdown-item text-primary-emphasis" to="/">{nombre[5]}{imagen[5]}</NavLink></li>
                                    <li><NavLink className="dropdown-item text-primary-emphasis" to="/">{nombre[6]}{imagen[6]}</NavLink></li>
                                    <li><NavLink className="dropdown-item text-primary-emphasis" to="/">{nombre[7]}{imagen[7]}</NavLink></li>
                                </ul>
                                </li>
                                <li className="nav-item dropdown">
                                <NavLink className="nav-link dropdown-toggle fs-3 text-primary-emphasis" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Equipos NVR/DVR
                                </NavLink>
                                <ul className="dropdown-menu">
                                    <li><NavLink className="dropdown-item text-primary-emphasis" to="/">{nombre[8]}{imagen[8]}</NavLink></li>
                                    <li><NavLink className="dropdown-item text-primary-emphasis" to="/">{nombre[9]}{imagen[9]}</NavLink></li>
                                    <li><NavLink className="dropdown-item text-primary-emphasis" to="/">{nombre[10]}{imagen[10]}</NavLink></li>
                                    <li><NavLink className="dropdown-item text-primary-emphasis" to="/">{nombre[11]}{imagen[11]}</NavLink></li>
                                    <li><NavLink className="dropdown-item text-primary-emphasis" to="/">{nombre[12]}{imagen[12]}</NavLink></li>
                                </ul>
                                </li>
                                <li className="nav-item dropdown">
                                <NavLink className="nav-link dropdown-toggle fs-3 text-primary-emphasis" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Cables y terminales
                                </NavLink>
                                <ul className="dropdown-menu">
                                    <li><NavLink className="dropdown-item text-primary-emphasis" to="/">Cables UTP/FTP</NavLink></li>
                                    <li><NavLink className="dropdown-item text-primary-emphasis" to="/">Cables coaxil/+pw</NavLink></li>
                                    <li><NavLink className="dropdown-item text-primary-emphasis" to="/">Terminales RJ-45</NavLink></li>
                                    <li><NavLink className="dropdown-item text-primary-emphasis" to="/">Terminales BNC</NavLink></li>
                                    <li><NavLink className="dropdown-item text-primary-emphasis" to="/">Terminales T/National</NavLink></li>
                                    <li><NavLink className="dropdown-item text-primary-emphasis" to="/">Balunes</NavLink></li>
                                </ul>
                                </li>

                                <li className="nav-item dropdown">
                                <NavLink className="nav-link dropdown-toggle fs-3 text-primary-emphasis" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Accesorios de instalación
                                </NavLink>
                                <ul className="dropdown-menu">
                                    <li><NavLink className="dropdown-item text-primary-emphasis" to="/">Monitores</NavLink></li>
                                    <li><NavLink className="dropdown-item text-primary-emphasis" to="/">Fuentes</NavLink></li>
                                    <li><NavLink className="dropdown-item text-primary-emphasis" to="/">Racks</NavLink></li>
                                    <li><NavLink className="dropdown-item text-primary-emphasis" to="/">Routers</NavLink></li>
                                    <li><NavLink className="dropdown-item text-primary-emphasis" to="/">Herramientas</NavLink></li>
                                </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div> */}
        </div>
)}

export default NavBar;