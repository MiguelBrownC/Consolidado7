
const { User, Bootcamp } = require('../models/index.js');


// creación de un nuevo usuario.
const createUser = async (req, res) => {
    try {
        const { firstName, lastName, email } =  req.body
        console.log( firstName, lastName, email )
        const newUser = await User.create({ firstName, lastName, email });
        res.status(201).json({message: 'usuario ha sido creado con éxito'});
        console.log(`Se ha creado el usuario: ${JSON.stringify(newUser, null, 4)}`)
    } catch (error) {
        res.status(500).json({ error: error.message });
        console.log(` Error al crear el usuario ${error}`);
    }
};

const findUserById = async (req, res) => {
    try {
        const user = await User.findByPk(req.params.id, {
            include: Bootcamp,
        });
        if (user) {
            res.json(user);
        } else {
            res.status(404).json({ message: 'Usuario no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const findAll = async (req, res) => {
    try {
        const users = await User.findAll({
            include: Bootcamp,
        });
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateUserById = async (req, res) => {
    try {
        const [updated] = await User.update(req.body, {
            where: { id: req.params.id },
        });
        if (updated) {
            const updatedUser = await User.findByPk(req.params.id);
            res.json(updatedUser);
        } else {
            res.status(404).json({ message: 'Usuario no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteUserById = async (req, res) => {
    try {
        const deleted = await User.destroy({
            where: { id: req.params.id },
        });
        if (deleted) {
            res.status(204).send();
        } else {
            res.status(404).json({ message: 'Usuario no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    createUser,
    findUserById,
    findAll,
    updateUserById,
    deleteUserById,
};