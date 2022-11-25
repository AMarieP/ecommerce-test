import { CartContext } from "../context/cart/cartContext";
import { ActiveProductContext } from "../context/activeProduct/activeProductContext";
import React, { useContext, useState } from "react";

//Check if in arr already, if in arr increment quantity instead of products

function AddToCartButton(){
    const {cartContents, setCart} = useContext(CartContext);
    const {currentProduct} = useContext(ActiveProductContext);

    function addToCart(product){
        let b = cartContents.push(product)
        console.log(cartContents)

    };



    return(
        <button onClick={() => addToCart(currentProduct)} >Add To Cart</button>
    )
}

export default AddToCartButton;