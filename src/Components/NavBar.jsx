import CartWidget from "./CartWidget";
const NavBar = ({cantidad, productos, detalle}) => {
    return(
        <div className="nav">
            <div className="cart">
                <img className="icono" src="./images/Icono AG.png" alt="logoPrincipal" />
                <img className="marca" src="./images/Marca.png" alt="marca" />
                
                <CartWidget cantidad={cantidad}/>
            </div>
            <div className="listadoProductos">
                <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNavDropdown" data-bs-theme="dark">
                            <ul className="navbar-nav">
                                <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle fs-3 text-primary-emphasis" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Cámaras de seguridad
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item text-primary-emphasis" href="/">{productos[0]}{detalle[0]}</a></li>
                                    <li><a className="dropdown-item text-primary-emphasis" href="/">{productos[1]}{detalle[1]}</a></li>
                                    <li><a className="dropdown-item text-primary-emphasis" href="/">{productos[2]}{detalle[2]}</a></li>
                                    <li><a className="dropdown-item text-primary-emphasis" href="/">{productos[3]}{detalle[3]}</a></li>
                                    <li><a className="dropdown-item text-primary-emphasis" href="/">{productos[4]}{detalle[4]}</a></li>
                                    <li><a className="dropdown-item text-primary-emphasis" href="/">{productos[5]}{detalle[5]}</a></li>
                                    <li><a className="dropdown-item text-primary-emphasis" href="/">{productos[6]}{detalle[6]}</a></li>
                                    <li><a className="dropdown-item text-primary-emphasis" href="/">{productos[7]}{detalle[7]}</a></li>
                                </ul>
                                </li>
                                <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle fs-3 text-primary-emphasis" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Equipos NVR/DVR
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item text-primary-emphasis" href="/">{productos[8]}{detalle[8]}</a></li>
                                    <li><a className="dropdown-item text-primary-emphasis" href="/">{productos[9]}{detalle[9]}</a></li>
                                    <li><a className="dropdown-item text-primary-emphasis" href="/">{productos[10]}{detalle[10]}</a></li>
                                    <li><a className="dropdown-item text-primary-emphasis" href="/">{productos[11]}{detalle[11]}</a></li>
                                    <li><a className="dropdown-item text-primary-emphasis" href="/">{productos[12]}{detalle[12]}</a></li>
                                </ul>
                                </li>
                                <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle fs-3 text-primary-emphasis" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Cables y terminales
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item text-primary-emphasis" href="/">Cables UTP/FTP</a></li>
                                    <li><a className="dropdown-item text-primary-emphasis" href="/">Cables coaxil/+pw</a></li>
                                    <li><a className="dropdown-item text-primary-emphasis" href="/">Terminales RJ-45</a></li>
                                    <li><a className="dropdown-item text-primary-emphasis" href="/">Terminales BNC</a></li>
                                    <li><a className="dropdown-item text-primary-emphasis" href="/">Terminales T/National</a></li>
                                    <li><a className="dropdown-item text-primary-emphasis" href="/">Balunes</a></li>
                                </ul>
                                </li>

                                <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle fs-3 text-primary-emphasis" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Accesorios de instalación
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item text-primary-emphasis " href="/">Monitores</a></li>
                                    <li><a className="dropdown-item text-primary-emphasis" href="/">Fuentes</a></li>
                                    <li><a className="dropdown-item text-primary-emphasis" href="/">Racks</a></li>
                                    <li><a className="dropdown-item text-primary-emphasis" href="/">Routers</a></li>
                                    <li><a className="dropdown-item text-primary-emphasis" href="/">Herramientas</a></li>
                                </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}
export default NavBar;