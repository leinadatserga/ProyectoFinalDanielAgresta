import { createContext, useState } from "react";
export const CartContext = createContext();


const CartContextProvider = ({ children }) => {


    const [cart, setCart] = useState([]);
    const addItem = ( item, counter ) => {
        if ( isInCart ( item.id ) ) {
            let pos = cart.findIndex ( produ => produ.id === item.id );
            cart[pos].amount += counter;
            setCart ([ ...cart ]);
        } else {
            setCart ([...cart, { ...item, amount:counter }])
        }
    };
    const removeItem = ( id ) => {
        const items = cart.filter ( produ => produ.id !== id );
        setCart ([ ...items ]);
    };
    const clear = () => {
        setCart ([]);
    };
    const isInCart = ( id ) => {
        return cart.some ( produ => produ.id === id );
    };
    const totalCart = () => {
        return cart.reduce (( acum, elem ) => acum += elem.amount, 0 );
    }
    const totalToPay = () => {
        return cart.reduce (( acum, elem ) => acum += elem.amount * elem.precio, 0 );
    } 

    
    
    
    


    return (
        <CartContext.Provider value={{ clear, addItem, removeItem, cart, totalCart, totalToPay }}>
            { children }
        </CartContext.Provider>
    );
}

export default CartContextProvider;