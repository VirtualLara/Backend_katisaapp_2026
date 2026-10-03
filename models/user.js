const db = require ('../config/config');
const bcrypt = require ('bcryptjs');

const User = {};

User.FindById = (id, result) => {
    const sql = `SELECT id, name, lastname, email, phone, ocupation, postalCode, interests, notifications, image, password FROM users WHERE id = ?`;
    db.query(
        sql,
        [ id ],
        (err, user) => {
            if (err) {
                console.log('Error: ', err);
                result(err, null)
            }
            else {
                console.log('Usuario: ', user);
                result(null, user);
            }
        }
    )
};

User.create = async (user, result) => {

    const hash = await bcrypt.hash(user.password, 10);

    const sql = `INSERT INTO users(
                                name, 
                                lastname, 
                                email, 
                                phone,
                                ocupation,
                                postalCode,
                                interests,
                                notifications,                                  
                                image, 
                                password, 
                                created_at, 
                                updated_at)
                            values(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

    db.query (
        sql,
        [
            user.name, 
            user.lastname, 
            user.email, 
            user.phone,
            user.ocupation,  
            user.postalCode,  
            user.interests,  
            user.notifications,  
            user.image, 
            hash, 
            new Date(),
            new Date()
        ],
        (err, res) => {
            if (err) {
                console.log('Error: ', err);
                result(err, null)
            }
            else {
                console.log('Id nuevo usuario: ', res.insertId);
                result(null, res.insertId);
            }
        }
    )
                            
};

module.exports = User;