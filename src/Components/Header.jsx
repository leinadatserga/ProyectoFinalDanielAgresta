import { Link } from "react-router-dom";

const Header = ({ enviosLogo, enviosTel, enviosTitulo, logWA, numWA }) => {
    return(
        <div className="header">
            <div className="envios">
                <div className="logo">
                    <div className="logoenv">
                        { enviosLogo }
                    </div>
                    <p className="tel">{ enviosTel }</p>
                </div>
                <div className="telTit">
                    <p className="tit"><b>{ enviosTitulo }</b></p>
                </div>
            </div>
            <div className="wa">
                <Link to="https://www.whatsapp.com/?lang=es" target="_blank" rel="noreferrer"><p>{ logWA }</p></Link>
                <h6>{ numWA }</h6>
            </div>
        </div>
    )
}
export default Header;