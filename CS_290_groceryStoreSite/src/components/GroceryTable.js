import React from "react";
import GroceryRow from "./GroceryRow";
import GroceryHeader from "./GroceryHeader";
import '../App.css';

function GroceryTable({items}) {
    return (
        <>
        <table className="Table">
            <thead>
                <GroceryHeader></GroceryHeader>
            </thead>
            <tbody>
                {items.map((item, i) => <GroceryRow item ={item} key={i}/>)}
            </tbody>
        </table>
        </>
    );
}

export default GroceryTable;