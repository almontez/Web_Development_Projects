import React from 'react';
import Exercise from './Exercise';

function ExerciseList({ exercises, deleteExercise, editExercise }) {
    return (
        <table id="exercise">
            <caption>Exercise Record: Strength Training</caption>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Reps</th>
                    <th>Weight</th>
                    <th>Unit</th>
                    <th>Date: MM-DD-YY</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {exercises.map((exercise, i) => <Exercise exercise={exercise}
                    deleteExercise={deleteExercise}
                    editExercise={editExercise}
                    key={i} />)}
            </tbody>
        </table>
    );
}

export default ExerciseList;
