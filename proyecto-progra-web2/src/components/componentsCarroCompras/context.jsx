import React, { createContext, useState } from 'react';
import initialProducts from '../../../public/dataEnCarrito'; // Asegúrate de ajustar la ruta de importación
import initialSavedProducts from '../../../public/dataGuardados'; // Asegúrate de ajustar la ruta de importación

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [products, setProducts] = useState(initialProducts); // Inicializar con productos mock
    const [savedProducts, setSavedProducts] = useState(initialSavedProducts); // Inicializar con productos guardados mock
    const [subtotal, setSubtotal] = useState(0);
    
    const removeProduct = (productIndex) => {
        setProducts(products.filter(product => product.index !== productIndex));
    };

    const saveForLater = (product) => {
        setSavedProducts([...savedProducts, product]);
        removeProduct(product.index);
    };

    const removeSavedProduct = (productIndex) => {
        setSavedProducts(savedProducts.filter(product => product.index !== productIndex));
    };

    return (
        <CartContext.Provider value={{ products, setProducts, savedProducts, setSavedProducts, subtotal, setSubtotal, removeProduct, saveForLater, removeSavedProduct}}>
            {children}
        </CartContext.Provider>
    );
};

