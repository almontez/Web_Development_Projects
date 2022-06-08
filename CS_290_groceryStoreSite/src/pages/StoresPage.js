import React from "react";
import { Link } from 'react-router-dom';
import StoreTable from "../components/StoreTable";
import ZipSearch from "../components/ZipSearch";
import '../App.css'

function StoresPage({stores}) {
    return (
        <>
        <h2>Store Locations</h2>
        <p>JoJo Grocery Marts are located nation-wide! Find a store near you.</p>

        <StoreTable stores = {stores}></StoreTable>
        <br></br>

        <ZipSearch></ZipSearch>
        <br></br>
        <Link to="/">Go to Home Page</Link>
        </>
    );
}

export default StoresPage;