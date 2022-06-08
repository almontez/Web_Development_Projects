import React, { useState } from "react";
import "../App.css";

function ZipSearch() {
    const [zip, setZip] = useState('');

    return (
        <>
        <form>
            <fieldset>
                <legend>Enter your zip code</legend>
                <label>
                    <input type="text" value={zip}
                        onChange = {e => setZip(e.target.value)} />
                </label>
                <button onClick = {e => {
                    setZip(e.target.value);
                    alert(`You entered: ${zip}`);
                    e.preventDefault();
                    }}>Submit</button>
            </fieldset>
        </form>
        </>
    );
}

export default ZipSearch;