const Sequelize = require('sequelize')

const db = new Sequelize('db_prueba', 'mbrown', '08052018', {
    host: 'localhost',
    dialect: 'postgres',
});
async function syncDB() {
    try {
        await db.authenticate()
        console.log('Connections has been established successfully');
    }
    catch (error) {
        console.error('Unable to connect to database', error)
    }
}
syncDB()

module.exports = db