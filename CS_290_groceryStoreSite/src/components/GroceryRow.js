import React from "react";
import SelectQuantity from "./SelectQuantity"
import '../App.css';

function GroceryRow ({item}) {
    return (
        <>
        <tr>
            <td>{item.name}</td>
            <td>{item.price.toLocaleString('en-US', {style: 'currency', currency: 'USD'})}</td>
            <td><SelectQuantity></SelectQuantity></td>
        </tr>
        </>
    );
}

export default GroceryRow;