const User = require ('../models/user');

module.exports = {
    register(req, res){
        const user = req.body; //Capturo los datos e me manda el cliente
        User.create(user, (err, data) => {
            if(err) {
                return res.status(501).json({
                    success: false,
                    message: 'Error al registrar el usuario ',
                    error: err,
                });
            }

            return res.status(201).json({
                success: true,
                message: 'Registro de usuario exitoso',
                data: data, //El id del nuevo usuario que se registro                
            })

        })
    }
} 