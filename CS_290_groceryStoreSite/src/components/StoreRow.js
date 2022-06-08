import React from "react";
import "../App.css";

function StoreRow({store}) {
    return (
        <>
        <tr>
            <td>{store.city}</td>
            <td>{store.state}</td>
            <td>{store.zipCode}</td>
        </tr>
        </>
    );
}

export default StoreRow;


