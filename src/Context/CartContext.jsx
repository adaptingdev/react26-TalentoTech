import { createContext, useContext, useState } from "react";

//Contexto
export const CartContext = createContext();

//Consumer
export const useCart = () => { //Custom hook
    const context = useContext(CartContext);
    if(!context) {
        throw new Error(
            'useCart debe ser usado dentro de un Provider'
        );
    }

    return context;
}

//Provider
export const CartProvider = ( {children} ) => {

    const [cart, setCart] = useState([]);

    const addToCart = (product, quantity) => {
        const itemInCart = cart.find(item => item.id === product.id);

        if(itemInCart) {
            const updatedCart = cart.map(item =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + quantity}
                    : item
            );
            setCart(updatedCart);
        } else {
            setCart(prevCart => [...prevCart, {...product, quantity}]);
        }
    }

    const getCantidadActual = (productID) => {
        const item = cart.find(item => item.id === productID);
        return item ? (item.quantity || item.cantidad || 0) : 0;
    }

    const clearCart = () => {
        setCart([]);
    }

    const getCartQuantity = () => {
        return cart.reduce(
            (total, item) => total + item.quantity,
            0
        );
    }

    const getCartTotal = () => {
        return cart.reduce(
            (total, item) =>
                total + item.precio * item.quantity,
            0
        );
    }

    const removeItem = (productId) => {
        const updatedCart = cart.filter(item => item.id !== productId);
        setCart(updatedCart);
    }


    const isInCart = (productId) => {
        return cart.some(item => item.id === productId);
    };

    return(
        <CartContext.Provider value={{cart, addToCart, removeItem, isInCart, getCantidadActual, clearCart, getCartQuantity, getCartTotal}}>
            {children}
        </CartContext.Provider>
    );
}