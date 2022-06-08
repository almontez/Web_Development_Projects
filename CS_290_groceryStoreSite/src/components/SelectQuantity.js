import React, { useState } from "react";
import { MdAdd, MdRemove } from "react-icons/md";

function SelectQuantity() {
    const [quantity, setQuantity] = useState(0);
    
    const increment = () => {
        if (quantity >= 10) {
            MdAdd.preventDefault();
        } else {
            setQuantity(quantity + 1);
        }
    };

    const decrement = () => {
        if (quantity <= 0) {
            MdRemove.preventDefault();
        } else {
            setQuantity(quantity - 1);
        }
    };

    return(
        <>
        <MdRemove onClick = {decrement} />
        <span className="quantity-holder">{quantity}</span>
        <MdAdd onClick = {increment} />
        </>

    );
}

export default SelectQuantity;