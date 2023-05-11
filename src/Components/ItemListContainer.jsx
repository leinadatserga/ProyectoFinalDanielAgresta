import { useRef } from "react";

const ItemListContainer = ({saludo, carta}) => {
    const mostrar = useRef(null);
    const mostrarCambio =() =>{
        mostrar.current.innerHTML = "Gracias por visitarnos, con gusto atenderemos todas sus consultas.";
    }
    const mostrarOrigin =() =>{
        mostrar.current.innerHTML = saludo;
    }
    return(
        <p className="bienvenida" onMouseOver={mostrarCambio} onMouseOut={mostrarOrigin} ref={mostrar}>{saludo}</p>
    )
}
export default ItemListContainer;
