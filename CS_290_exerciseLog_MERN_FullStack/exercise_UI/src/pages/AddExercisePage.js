import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

export const AddExercisePage = () => {

    const [name, setName] = useState('');
    const [reps, setReps] = useState('');
    const [weight, setWeight] = useState('');
    const [unit, setUnit] = useState('lbs');
    const [date, setDate] = useState('');

    const history = useHistory();

    const addExercise = async () => {
        const newExercise = {name, reps, weight, unit, date};
        
        const response = await fetch('/exercises', {
            method: 'POST',
            body: JSON.stringify(newExercise),
            headers: {
                'Content-Type':'application/json'
            }
        });

        if (response.status === 201) {
            alert("Successfully created new exercise");
        } else {
            alert("Failed to create new exercise");
            console.log(response.status);
        }

        history.push("/");
    };

    return (
        <>
        <h3>Add New Exercise</h3>

        <form>
            <input
                type="text"
                placeholder="Exercise Name"
                value={name}
                onChange={e => setName(e.target.value)} />
            <input
                type="number"
                value={reps}
                placeholder="Number of Reps"
                onChange={e => setReps(Number(e.target.value))} />
            <input
                type="number"
                placeholder="Weight"
                value={weight}
                onChange={e => setWeight(Number(e.target.value))} />
            <select value={unit} onChange={e => setUnit(e.target.value)} >
                <option value="lbs">lbs</option>
                <option value="kgs">kgs</option>
            </select>
            <input
                type="text"
                placeholder="Date: MM-DD-YY"
                value={date}
                onChange={e => setDate(e.target.value)} />
        </form>
        
        <button onClick={addExercise}>Add Exercise</button>
        </>
    );
}

export default AddExercisePage;