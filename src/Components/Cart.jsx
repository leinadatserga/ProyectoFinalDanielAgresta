import Swal from "sweetalert2"
import { useContext } from "react";
import { CartContext } from "./Context/CartContextProvider";

const Cart = () => {
    const { cart, removeItem, clear, totalCart, totalToPay } = useContext ( CartContext );
    const warning = () => {
        Swal.fire({
            icon: "info",
            title: "No hay productos en el Carrito!",
            showClass: { popup: "animate__animated animate__fadeInDown" },
            hideClass: { popup: "animate__animated animate__fadeOutDown" },
            html: "Puedes volver a la  <b><a href='/'>Página Principal</a> </b>,  y escoger entre todos nuestros Artículos!",
            confirmButtonText: "Excelente !"
            });
    }
    if ( totalCart() === 0 ) {
        warning();
        return (
            <div className="container my-5 carrito">
                <div className="row">
                    <div className="col text-center">
                        <h1 className="text-light bg-primary text-center fw-bolder fs-1 p-5">Carrito</h1>
                    </div>
                </div>
            </div>
        )
    } else {

    return (
        <div className="container my-5 carrito">
            <div className="row">
                <div className="col text-center">
                    <h1 className="text-light bg-primary text-center fw-bolder fs-1 p-5">Carrito</h1>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <table className="table">
                        <thead className="text-light">
                            <tr className="text-light bg-primary fw-bolder fs-5">
                                <th scope="col">Producto</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Precio</th>
                                <th scope="col">Cantidad</th>
                                <th scope="col">Subtotal</th>
                                <th scope="col">Eliminar</th>
                            </tr>
                        </thead>
                      {
                        cart.map ( items => (
                            <tbody>
                                <tr>
                                    <td><img key={items.id} src={ "/images/" + items.imagen } alt={ items.nombre } width={ 100 }/></td>
                                    <td>{ items.nombre }</td>
                                    <td>{ "U$D " + items.precio }</td>
                                    <td>{ items.amount }</td>
                                    <td>{ "U$D " + items.amount * items.precio }</td>
                                    <td><img src={ "/images/Quitar.png" } alt={ "quit" } width={ 60 } onClick = {() => { removeItem ( items.id ) }}/></td>
                                </tr>
                            </tbody>
                        ))
                      }  
                    </table>
                </div>
            </div>
            <table className="table final">
                <tbody>
                    <tr>
                        <td><p className=" fs-3 fw-bold fst-italic">Productos: <button className="cant">{ totalCart() }</button></p></td>
                        <td><p className=" fs-3 fw-bold fst-italic"> Total a Pagar: { "U$D " + totalToPay() } <img src={ "/images/Total.png" } alt="total" width={ 60 } /> </p></td>
                        <td><p className=" fs-3 fw-bold fst-italic">Finalizar Compra <img src={ "/images/Buy.png" } alt="buy" width={ 60 } /></p></td>
                        <td><p className=" fs-3 fw-bold fst-italic" onClick = {() => { clear() }}>Vaciar Carrito <img src={ "/images/EmptyCart.png" } alt={ "quit" } width={ 70 } /></p></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )}
}

export default Cart;