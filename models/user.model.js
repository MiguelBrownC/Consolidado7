const { DataTypes } = require('sequelize')
const db = require("../config/db.config.js");

const User = db.define(
    "User",{ 
        //estructura
        firstName: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
            validate: {
                is: /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/i,
                len: {
                    args: [2, 20],
                    msg: "El nombre  no puede contener menos de 2 caracteres",
                },
            },
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: false,
            validate: {
                is: /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/i,
                len: {
                    args: [2, 20],
                    msg: "El apellido no puede contener menos de 3 caracteres",
                },
            },
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: true,
            },
        },
    },

{ timestamps: true }
    );


module.exports = User
