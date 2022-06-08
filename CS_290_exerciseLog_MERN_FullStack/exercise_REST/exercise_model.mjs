import mongoose from 'mongoose';
import 'dotenv/config';

mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);


// Connect to to the database
const db = mongoose.connection;

/**
 * Define Schema: Exercise Schema 
 * Includes: name: name of the exercise
 *           reps: number of times exercise was performed
 *           weight: weight of exercise used
 *           unit: unit of measurement for weight (e.g. kgs or lbs)
 *           date: day exercise was performed (MM-DD-YY)
 * Required: All
 */
const exerciseSchema = mongoose.Schema({
    name: { type: String, required: true },
    reps: { type: Number, required: true },
    weight: { type: Number, required: true }, 
    unit: { type: String, required: true }, 
    date: { type: String, required: true }
});

/**
 * Compile the model from the schema. This must be done after defining the schema.
 */
const Exercise = mongoose.model("Exercise", exerciseSchema);

/**
 * Create new exercise document
 * @param {String} name 
 * @param {Number} reps 
 * @param {Number} weight 
 * @param {String} unit 
 * @param {String} date 
 * @returns promise: representing a new exercise 
 */
const createExercise = async (name, reps, weight, unit, date) => {
    const exercise = new Exercise({ name: name, 
                                    reps: reps, 
                                    weight: weight,
                                    unit: unit,
                                    date: date });
    return exercise.save()
}; 

const findExercisesById = async (id) => {
    const query = Exercise.findById(id);
    return query.exec();
}

const findExercises = async (filter) => {
    const query = Exercise.find(filter);
    return query.exec();
}

const replaceExercise = async (id, update) => {
    const result = await Exercise.updateOne(id, update);
    return result.modifiedCount;
}

const deleteExercise = async(id) => {
    const result = await Exercise.deleteOne(id);
    return result.deletedCount;
}

// The open event is called when the database connection successfully opens
db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose!");
});

export { createExercise, findExercisesById, findExercises, replaceExercise, deleteExercise }