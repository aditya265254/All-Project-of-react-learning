import axios from './Axios';
import React, { createContext, useEffect, useState } from 'react'

export const ProductContext = createContext(); 

const Context = (props) => {
    const [product, updateProduct] = useState(null);

    const getProducts = async () => { 
        try {
            const res = await axios("/products")
            updateProduct(res.data)    
        } catch (error) {
            console.log(error);
        }
    } 

    useEffect(() => {
        getProducts()   // ✅ Sahi naam se call
    }, [])

    return (
        <ProductContext.Provider value={[product, updateProduct]}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default Context