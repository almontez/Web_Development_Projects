import React from "react";
import StoreRow from "./StoreRow";
import StoreHeader from "./StoreHeader";
import "../App.css";

function StoreTable({stores}) {
    return(
        <>
        <table className="Table">
            <thead>
                <StoreHeader></StoreHeader>
            </thead>
            <tbody>
                {stores.map((store, i) => <StoreRow store ={store} key={i}/>)}
            </tbody>
        </table>
        </>
    );
}

export default StoreTable;