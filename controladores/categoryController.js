
const categoryModel = require("../modelos/Category"); // se define que entity se va a utilizar

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
    const category = new categoryModel({
       nombre: request.body.nombre
   });

   category.save().then(
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
   const category = {
       nombre: request.body.nombre
   }
   /* recibe 3 parametros 
      1. id del registro a actualizar
      2. por que dato se modifica ese id motivo de la actualizacion
      3. indica si retorna los datos a devolver actualizacion
   */
   categoryModel.findByIdAndUpdate(request.params.id,category, {new: true }).then(
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
   categoryModel.find().then(
       categories => {
           response.send(categories);
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
    categoryModel.findByIdAndRemove(request.params.id).then(
        categoryDeleted => {
            response.send(categoryDeleted);
        }
    ).catch(
        error => {
            return response.status(500).send({
            mensaje: error.message
        })
}
)
}