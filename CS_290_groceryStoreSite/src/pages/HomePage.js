import React from "react";
import { Link } from 'react-router-dom';
import image from '../images/grocery_basket.png'

function HomePage() {
    return (
        <>
        <h2 id="HomePage-Title">JoJo Grocery Mart</h2>
        <img src={image} alt="Grocery Basket Logo"></img>

        <p className="HomePage-Intro">
        Welcome to JoJo Grocery Mart! 
        We have the best <br></br> products and produce in the nation! 
        </p>

        <p className="HomePage-Intro">To order items please go to: 
        <br></br><Link id="Order-Link" to="/order">Orders Page</Link></p>

        <p className="HomePage-Intro">To see locations near you, click: 
        <br></br><Link to="/stores">Stores Page</Link></p>
        </>
    );
}

export default HomePage;