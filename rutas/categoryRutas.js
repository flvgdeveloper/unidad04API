/**
 * metodo para crear las rutas de los metodos crud de los controllers de las categorias
 * @param {} app => el objeto de express que se creo en el index.js
 */
module.exports = (app) => {
   const categoriaController = require("../controladores/categoryController");

   /**
    * METODOS DE HTTP (verbose) verbos del http.
    * POST: se utiliza para almacenar informacion y trabajar con el login.
    * GET: Obtener informacion y trabaja con la URL.(envia la informacion)
    * PUT: es para actualizar la informacion y trabaja por la URL (identifica que dato a modificar)
    * DELETE: permite elminar informacion , trabaja por URL (identifica que dato a borrar)
    */

   app.post("/categoria/crear",categoriaController.create);
   app.put("/categoria/actualizar/:id",categoriaController.update);
   app.get("/categoria/consultarTodo",categoriaController.findAll);
   app.delete("/categoria/borrar/:id",categoriaController.deleteOne);

}