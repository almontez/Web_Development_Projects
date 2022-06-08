import 'dotenv/config';
import express from 'express';
import asyncHandler from 'express-async-handler';
import * as users from './users_model.mjs';

const app = express();

const PORT = process.env.PORT;

/**
 * Route handler for create requests
 */
app.get("/create", asyncHandler(async (req, res) => {
    
    const user = await users.createUser(req.query.name, 
                                        req.query.age, 
                                        req.query.email, 
                                        req.query.phoneNumber);
    res.send(user);
}));

/**
 * Route handler for retieve request
 */
app.get("/retrieve", asyncHandler(async (req, res) => {
    const filter = {};

    // add query parameters to filter as needed
    if (req.query.name !== undefined) {
        filter.name = req.query.name;
    };

    if (req.query.age !== undefined) {
        filter.age = req.query.age;
    };

    if (req.query.email !== undefined) {
        filter.email = req.query.email;
    };

    if (req.query.phoneNumber !== undefined) {
        filter.phoneNumber = req.query.phoneNumber;
    };

    if (req.query._id !== undefined) {
        filter._id = req.query._id;
    };

    //call findUsers method in model
    const result = await users.findUsers(filter);
    res.send(result);
})); 

/**
 * Route handler for update requests
 */
app.get("/update", asyncHandler(async (req, res) => {
    const filter = {_id: req.query._id}; 
    const update = {};

    // add query parameters to filter as needed
    if (req.query.name !== undefined) {
        update.name = req.query.name;
    };

    if (req.query.age !== undefined) {
        update.age = req.query.age;
    };

    if (req.query.email !== undefined) {
        update.email = req.query.email;
    };

    if (req.query.phoneNumber !== undefined) {
        update.phoneNumber = req.query.phoneNumber;
    };

    //call updateUser method in model 
    const resultVal = await users.updateUser(filter, update);

    // check for error and send response
    if (resultVal === 0) {
        res.send({ Error: "Not Found" });
    } else {
        res.send({ modifiedCound: resultVal });
    }

}));

/**
 * Route handler for delete requests
 */
app.get("/delete", asyncHandler(async (req, res) => {
    const filter = {};

    // add query parameters to filter as needed
    if (req.query.name !== undefined) {
        filter.name = req.query.name;
    };

    if (req.query.age !== undefined) {
        filter.age = req.query.age;
    };

    if (req.query.email !== undefined) {
        filter.email = req.query.email;
    };

    if (req.query.phoneNumber !== undefined) {
        filter.phoneNumber = req.query.phoneNumber;
    };

    if (req.query._id !== undefined) {
        filter._id = req.query._id;
    };

    //call deleteUser method in model
    const resultVal = await users.deleteUser(filter);

    //check for errors and send response
    if (resultVal === 0) {
        res.send({ Error: "Not Found" });
    } else {
        res.send({ deletedCount: resultVal })
    }
}));

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});