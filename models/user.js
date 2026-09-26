const db = require ('../config/config');

const User = {};

User.create = (user, result) => {
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
            user.password, 
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