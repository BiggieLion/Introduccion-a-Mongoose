const {Router} = require('express');
const crudController = require('../controllers/crud.controller');

const router = Router();

router.post('/crud/create', crudController.servicioCreate); //* Creacion

router.get('/crud/read', crudController.servicioRead); // * Lectura general
router.get('/crud/read/one', crudController.servicioReadOne);// * Lectura de un producto

router.put('/crud/update', crudController.servicioUpdate); //* Actualizacion

router.delete('/crud/delete', crudController.servicioDelete); //* Delete


module.exports = router;