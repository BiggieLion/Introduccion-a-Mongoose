const articuloModel = require('../models/articulos.model');
const crudController = {};

crudController.servicioCreate = async (req, res) => {
    try {
        console.log("Ruta /crud/create invocada");
        const caracteristicasProducto = req.body;
        const nuevoProducto = new articuloModel(caracteristicasProducto);
        const productoGuardado = await nuevoProducto.save();
        res.status(201).json({
            Mensaje: "Producto guardado exitosamente",
            productoGuardado
        });
    } catch (error) {
        console.error(error);
        res.status(error.response.status).json({error});
    }
};

crudController.servicioRead = async (req, res) => {
    try {
        console.log("Ruta /crud/read invocada");
        const productos = await articuloModel.find();
        res.status(201).json({
            Mensaje: "Productos",
            productos
        });
    } catch (error) {
        console.error(error);
        res.status(error.response.status).json({error});
    }
};

crudController.servicioReadOne = async (req, res) => {
    try {
        console.log("Ruta /crud/read/one invocada");
        const codigoSolicitado = req.query.codigo;
        const producto = await articuloModel.findOne({codigo: codigoSolicitado});
        res.status(201).json({
            Mensaje: "Producto encontrado",
            producto
        });
    } catch (error) {
        console.error(error);
        res.status(error.response.status).json({error});
    }
};

crudController.servicioUpdate = async (req, res) => {
    try {
        console.log("Ruta /crud/update invocada");
        const productoActualizar = await articuloModel.findOne({codigo: req.body.codigo});
        productoActualizar.precio = req.body.precio;
        await productoActualizar.save();
        res.status(201).json({
            Mensaje: "Producto actualizado",
            productoActualizar
        });
    } catch (error) {
        console.error(error);
        res.status(error).json({error});
    }
};

crudController.servicioDelete = async (req, res) => {
    try {
        console.log("Ruta /crud/delete invocada");
        const productoBorrar = await articuloModel.findOneAndDelete({codigo: req.query.codigo});
        res.status(201).json({
            Mensaje: "Producto borrado",
            productoBorrar
        });
    } catch (error) {
        console.error(error);
        res.status(error).json({error});
    }
};
module.exports = crudController;