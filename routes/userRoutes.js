const userController = require ('../controllers/usersController');

module.exports = (app) => {
    
    //GET obtener datos
    //POST resgistrar datos
    //PUT actualizar datos
    //DELETE borrar datos
    
    app.post('/api/users/create', userController.register);
}