import { useParams } from "react-router-dom";

const Congrats = () => {
    const { id } = useParams ();
    return(
        <div className="container">
            <div className="row">
                <div className="carrito col text-center my-5 fs-1">
                    <h1 className="gracias">Gracias por tu Compra!!</h1>
                    <p className="clvorden">La clave de tu Orden es: <b>{id}</b></p>
                    <a className="inicio mt-5" href="http://localhost:3000/">Volver al Inicio</a>
                </div>
            </div>
        </div>
    )
}

export default Congrats;