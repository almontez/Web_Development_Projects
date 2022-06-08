import React from "react";
import { Link } from 'react-router-dom';
import GroceryTable from "../components/GroceryTable";
import '../App.css'

function OrderPage({items}) {
    return (
        <>
        <h2>Customer Order</h2>
        <p> 
            Select the amount of items you would like to purchase by clicking the add(+) or remove(-) button
            for each grocery item. The maximum number of any one item you can purchase is 10.  
        </p>

        <GroceryTable items = {items}></GroceryTable>

        <p>Thank you for shopping with us!</p>

        <Link to="/">Go to Home Page</Link>
        </>
    );
}

export default OrderPage;