/**
 * metodo para crear las rutas de los metodos crud de los controllers de las categorias
 * @param {} app => el objeto de express que se creo en el index.js
 */
module.exports = (app) => {
   const productController = require("../controladores/productController");

   /**
    * METODOS DE HTTP (verbose) verbos del http.
    * POST: se utiliza para almacenar informacion y trabajar con el login.
    * GET: Obtener informacion y trabaja con la URL.(envia la informacion)
    * PUT: es para actualizar la informacion y trabaja por la URL (identifica que dato a modificar)
    * DELETE: permite elminar informacion , trabaja por URL (identifica que dato a borrar)
    */

   app.post("/producto/crear",productController.create);
   app.put("/producto/actualizar/:id",productController.update);
   app.get("/producto/consultarTodo",productController.findAll);
   app.delete("/producto/borrar/:id",productController.deleteOne);

}