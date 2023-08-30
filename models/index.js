const db = require('../config/db.config.js');
const User = require('../models/user.model.js');
const Bootcamp = require('../models/bootcamp.model.js');

User.belongsToMany(Bootcamp, {through:'UserBootcamp'}) 
Bootcamp.belongsToMany(User, {through:'UserBootcamp'})

try {
    db.sync()
} catch(err) {
    console.log(err);
}

module.exports = { User, Bootcamp };