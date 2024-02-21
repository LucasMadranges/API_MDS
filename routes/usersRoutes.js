const {
    userList,
    foundUser,
    createUser,
    resaChamber,
    updateUser,
    deleteResa
} = require("../controllers/usersControllers");
const express = require("express");
const router = express.Router();

// Routes admin
router.get("/clients", userList);
router.get('/clients/:id', foundUser);

router.post('/clients/:id', createUser);
router.post('/reservation/:id', resaChamber);

router.patch('/clients/:id', updateUser);

router.delete('/reservation/:id', deleteResa);