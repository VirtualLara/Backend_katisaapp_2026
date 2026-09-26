const mysql = require ('mysql');
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'katisa_app',
})

db.connect( function(err) {
    if (err) throw err;
    console.log('database conected!!!');
} ) 

module.exports = db;