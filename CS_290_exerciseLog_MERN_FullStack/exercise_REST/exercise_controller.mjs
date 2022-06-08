import 'dotenv/config';
import * as exercises from './exercise_model.mjs';
import * as dataValidation from './exercise_validation.mjs';
import express from 'express';
import asyncHandler from 'express-async-handler';

const app = express();

const PORT = process.env.PORT;

app.use(express.json());

/**
 * Route Handlers for POST requests. Creates new exercise(s).
 * Validates name, reps, weight, unit, and date 
 */
app.post('/exercises', asyncHandler(async(req, res) => {  
    const validName = await dataValidation.isNameValid(req.body.name);
    const validReps = await dataValidation.isNumberValid(req.body.reps);
    const validWeight = await dataValidation.isNumberValid(req.body.weight);
    const validUnit = await dataValidation.isUnitValid(req.body.unit);
    const validDate = await dataValidation.isDateValid(req.body.date); 
    
    if (validName && validReps && validWeight && validUnit && validDate) {
        const exercise = await exercises.createExercise(req.body.name, req.body.reps, req.body.weight, req.body.unit, req.body.date);
        res.status(201).json(exercise);
    } else {
        res.status(400).json({ Error: "Invalid request" });
    }
}));

/**
 * Route handler for GET requests using exercise ID.
 * Retieves exercise based on ID
 */
app.get('/exercises/:_id', asyncHandler(async(req, res) => {
    const exerciseId = req.params._id;

    const exercise = await exercises.findExercisesById(exerciseId);
        
    if (exercise === null) {
        res.status(404).json({ Error: "Not found" });
    } else {
        res.status(200).json(exercise);
    }
}));

/**
 * Route handler for GET requests. 
 * Retrieves all exercises. 
 */
app.get('/exercises', asyncHandler(async(req, res) => {
    let filter = {};

    const exerciseLog = await exercises.findExercises(filter);

    res.status(200).json(exerciseLog);
}));

/**
 * Update exercise given exercise ID.
 */
app.put('/exercises/:_id', asyncHandler(async(req, res) => {
    const validName = await dataValidation.isNameValid(req.body.name);
    const validReps = await dataValidation.isNumberValid(req.body.reps);
    const validWeight = await dataValidation.isNumberValid(req.body.weight);
    const validUnit = await dataValidation.isUnitValid(req.body.unit);
    const validDate = await dataValidation.isDateValid(req.body.date); 

    if (validName && validReps && validWeight && validUnit && validDate) {
        const exerciseId = {_id: req.params._id};
        const update = {};

        if (req.body.name !== null) {
            update.name = req.body.name;
        };
    
        if (req.body.reps !== null) {
            update.reps = req.body.reps;
        };
    
        if (req.body.weight !== null) {
            update.weight = req.body.weight;
        };
    
        if (req.body.unit !== null) {
            update.unit = req.body.unit;
        };

        if (req.body.date !== null) {
            update.date = req.body.date;
        }

        const numUpdated = await exercises.replaceExercise(exerciseId, update);

        if (numUpdated === 1) {
            res.status(200).json({ _id: req.params._id,
                                   name: req.body.name, 
                                   reps: req.body.reps, 
                                   weight: req.body.weight, 
                                   unit: req.body.unit, 
                                   date:req.body.date });
        } else {
            res.status(404).json({ Error: "Not Found" });
        }

    } else {
        res.status(400).json({ Error: "Invalid request" });
    }
}));

/**
 * Delete the movie whose id is provided in the query parameters
 */
app.delete('/exercises/:_id', asyncHandler(async(req, res) => {
    const exerciseId = {_id: req.params._id};
    const deleteCount = await exercises.deleteExercise(exerciseId);

    if (deleteCount === 1) {
        res.status(204).send();
    } else {
        res.status(404).json({ Error: "Not Found" })
    }
}));

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});