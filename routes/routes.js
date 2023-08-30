const { Router } = require("express");

const userController = require("../controllers/user.controller.js");


const {
    createBootcamp,
    findById,
    addUserBootcamp,
    findThem,
} = require("../controllers/bootcamp.controller.js");

const router = Router();

// Rutas para usuarios
router.post('/users', userController.createUser);
// Implementa otras rutas para usuarios
router.get("/users/:id", userController.findUserById);
router.get("/users/", userController.findAll);
router.put("/users/:id", userController.updateUserById);
router.delete("/users/:id", userController.deleteUserById);

// Rutas para bootcamps
router.post('/bootcamps',createBootcamp);
// Implementa otras rutas para bootcamps
router.get("/bootcamps/:id", findById);
router.post("/bootcamps/adduser", addUserBootcamp);
router.get("/bootcamp/", findThem);

module.exports = router;




