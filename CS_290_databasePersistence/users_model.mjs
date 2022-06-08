import mongoose from 'mongoose';
import 'dotenv/config';

mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);

const db = mongoose.connection;

/**
 * User Schema
 * Includes: name, age, email, and phone number 
 * Requried: name, age, email
 * Optional: phone number
 */
const usersSchema = mongoose.Schema({
    name: { type: String, required: true }, 
    age: { type: Number, required: true }, 
    email: { type: String, required: true},
    phoneNumber: { type: Number, required: false},
});

/**
 * Compile user model based on user model
 */
const User = mongoose.model("User", usersSchema);

/**
 * Create/Add new user/document
 * @param {String} name 
 * @param {Number} age 
 * @param {String} email 
 * @param {Number} phoneNumber 
 * @returns A promise, represeting a new user
 */
const createUser = async (name, age, email, phoneNumber='') => {

    const user = new User({name: name, 
                           age: age, 
                           email: email, 
                           phoneNumber: phoneNumber});
    return user.save();
};

/**
 * Find user/document based on query parameter(s)
 * @param {query parameter(s)} filter 
 * @returns queary result
 */
const findUsers = async (filter) => {
    const query = User.find(filter);
    return query.exec();
};

/**
 * Updates user information/document
 * @param {query._id} filter 
 * @param {query string} update, represent updated info 
 * @returns int, representing the number of documents updated
 */
const updateUser = async (filter, update) => {
    const result = await User.updateOne(filter, update);
    return result.modifiedCount;
};

/**
 * Delete user information/document
 * @param {query parameter} filter 
 * @returns int, representing the number of documents deleted
 */
const deleteUser = async (filter) => {
    const result = await User.deleteMany(filter);
    return result.deletedCount;
}; 

db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose!");
});

export { createUser, findUsers, updateUser, deleteUser}