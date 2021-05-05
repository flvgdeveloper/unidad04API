
const productModel = require("../modelos/Product"); // se define que entity se va a utilizar

/**
 * C  --  CREATE
 * R  -- READ 
 * U  -- UPDATE
 * D  -- DELETE
 */

/**
 * Metodo para crear un categoria 
 * @param {*} request => toda la estrcutura del objeto categoria
 * @param {*} response => respuesta de la tarea de insercion de la categoria -- devolder al usuario
 */
exports.create = (request, response) => {
   console.log("contenido del body", request.body);
   const fecha = new Date();
    const product = new productModel({
       nombre: request.body.nombre,
       descripcion: request.body.descripcion,
       valor: request.body.valor,
       stock: request.body.stock,
       imagen: request.body.imagen,
       fechaRegistro: fecha.getDate(),
       idCategory: request.body.idCategory
   });

   product.save().then(
       datos => {
           response.send(datos);
       }
   ).catch(
       error => {
           return response.status(500).send({
               mensaje: error.message
           })
       }
   )
}

/**
 * Metodo para modificar un categoria 
 * @param {*} request => toda la estrcutura del objeto categoria
 * @param {*} response => respuesta de la tarea de insercion de la categoria -- devolder al usuario
 */
exports.update = (request, response) => {
   const product = {
       nombre: request.body.nombre
   }
   /* recibe 3 parametros 
      1. id del registro a actualizar
      2. por que dato se modifica ese id motivo de la actualizacion
      3. indica si retorna los datos a devolver actualizacion
   */
   productModel.findByIdAndUpdate(request.params.id,product, {new: true }).then(
    datos => {
        response.send(datos);
    }
   ).catch ( 
        error => {
        return response.status(500).send({
        mensaje: error.message
    })
})
}
/**
 * Metodo para listar todas las categorias
 * @param {*} request => toda la estrcutura del objeto categoria
 * @param {*} response => respuesta de la tarea de insercion de la categoria -- devolder al usuario
 */
exports.findAll = (request, response) => {
   productModel.find().
   populate("idCategory").
   exec().then(
       products => {
           response.send(products);
       }
   ).catch(
    error => {
        return response.status(500).send({
        mensaje: error.message
        })
}
)
}

exports.deleteOne = (request, response) => {
    productModel.findByIdAndRemove(request.params.id).then(
        productDeleted => {
            response.send(productDeleted);
        }
    ).catch(
        error => {
            return response.status(500).send({
            mensaje: error.message
        })
}
)
}