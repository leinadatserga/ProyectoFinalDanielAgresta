const ItemListContainer = ({saludo}) => {
    return(
        <p className="bienvenida">{saludo}</p>
    )
}
export default ItemListContainer;
const tarjetas = ({productos, detalle, carta}) => {
    return (
        <div className="tarjetas">
            <img src="./images/Cámara disuación.png" alt="cam.disuación" width={carta} height={carta} />
            <img src="./images/Cámara domo.png" alt="cam.domo" width={carta} height={carta} />
            <img src="./images/Cámara IP PTZ wifi.png" alt="cam.ptzwifi" width={carta} height={carta} />
            <img src="./images/Cámara IP PTZ.png" alt="cam.ptz" width={carta} height={carta} />
            <img src="./images/Cámara IP360.png" alt="cam.ip360" width={carta} height={carta} />
            <img src="./images/Cámara luminaria.png" alt="cam.luminaria" width={carta} height={carta} />
            <img src="./images/Cámara ojo de pez.png" alt="cam.ojopez" width={carta} height={carta} />
            <img src="./images/Cámara térmica.png" alt="cam.térmica" width={carta} height={carta} />
        </div>
    )
}