import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Cart from "../context/cart/cart";

//page which displays cart

function CartPage({setContents}){


    return(
        <>
        <h1>Your Shopping Cart</h1>
        <ul>
            <Cart />
        </ul>

        <div>
            <button>Send Enquiry</button>
        </div>
        </>

    );
};


export default CartPage;