import { useContext } from "react";
import { useState } from "react";
import { CartContext } from "./Context/CartContextProvider";
import { addDoc, collection, doc, getFirestore, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
    const { cart, clear, totalCart, totalToPay } = useContext ( CartContext );
    const [ nombre, setNombre ] = useState ("");
    const [ email, setEmail ] = useState ("");
    const [ telefono, setTelefono ] = useState ("");
    const navig = useNavigate ();
    const subirStock = ( idProd, newStock ) => {
        const dtbs= getFirestore ();
        const stockDoc = doc ( dtbs, "products", idProd );
        updateDoc ( stockDoc, { stock:newStock });
    }
    const actualizarStock = () => {
        cart.map ( items => ( subirStock ( items.id, items.stock-items.amount )));
    }
    const emitirOrden = () => {
        if ( nombre ==="" || email === "" || telefono === "" ) {
            return false;
        } else {
        actualizarStock ();
        const cliente = { name:nombre, phone:telefono, email:email };
        const productos = cart.map ( item => ({ id:item.id, title:item.nombre, price:item.precio }));
        const dia = new Date ();
        const fecha = `${ dia.getDate () }/${ dia.getMonth () + 1 }/${ dia.getFullYear () } ${ dia.getHours () }:${ dia.getMinutes () }`;
        const monto = totalToPay ();
        const order = { buyer:cliente, items:productos, date:fecha, total:monto };
        const bd = getFirestore ();
        const ordenesCollection = collection ( bd, "orders" );
        addDoc ( ordenesCollection, order ).then ( resultado => {
            clear ();
            navig("/congrats/" + resultado.id )
        })
        .catch ( resultado => {
            console.log( "Error! no se pudo realizar la orden" );
        });
        }
    }

    return (
        <div className="carrito container my-5">
            <div className="row">
                <div className="col text-center">
                    <h1 className="carrito text-light bg-primary text-center fw-bolder fs-1 p-5">Checkout</h1>
                </div>
            </div>
            <h3 className="ingresa" >Para emitir la Orden de Compra, ingresa tus datos a continuación: </h3>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 offset-md-4">
                        <form className="was-validated">
                            <div className="mb-3">
                                <label className="form-label fs-3 fw-bold text-white">Nombre</label>
                                <input type="text" className="form-control" placeholder="Nombre Apellido" onInput={( e ) => { setNombre ( e.target.value )}} required/>
                            </div>
                            <div className="mb-3">
                                <label className="form-label fs-3 fw-bold text-white">Correo</label>
                                <input type="email" className="form-control" placeholder="nombre@mail.com" onInput={( e ) => { setEmail ( e.target.value )}} required/>
                            </div>
                            <div className="mb-5">
                                <label className="form-label fs-3 fw-bold text-white">Teléfono</label>
                                <input type="number" className="form-control" placeholder="01234567" onInput={( e ) => { setTelefono ( e.target.value )}} required/>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <table className="table">
                        <thead className="text-light text-center">
                            <tr className="text-light bg-primary fw-bolder fs-5">
                                <th scope="col">Producto</th>
                                <th scope="col">Nombre</th>
                                <th scope="col">Precio</th>
                                <th scope="col">Cantidad</th>
                                <th scope="col">Subtotal</th>
                            </tr>
                        </thead>
                        {cart.map ( items => (
                            <tbody key={items.id} className="tabla text-center">
                                <tr>
                                    <td><img src={ "/images/" + items.imagen } alt={ items.nombre } width={ 100 }/></td>
                                    <td className="fs-5">{ items.nombre }</td>
                                    <td className="fs-5 text-black">{ "U$D " + items.precio }</td>
                                    <td className="fs-5">{ items.amount }</td>
                                    <td className="fs-5 text-black">{ "U$D " + items.amount * items.precio }</td>
                                </tr>
                            </tbody> ))
                        }  
                    </table>
                </div>
            </div>
            <table className="emitir col-12">
                <tbody>
                    <tr>
                        <td><p className="fs-3 fw-bold fst-italic">Total de Productos: { totalCart() }</p></td>
                        <td className="text-center"><p className="text-black fs-3 fw-bold fst-italic"> Total a Pagar: { "U$D " + totalToPay ()} </p></td>
                        <td className="text-end"><button className="boton btn btn-success fs-3 text-warning fw-bold" type="submit" onClick={ () => { emitirOrden ()}}>Emitir Orden</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Checkout;