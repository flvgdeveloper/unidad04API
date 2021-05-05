const Mongoose  = require("mongoose"); // vamos a utilizar la libreria mongoose
const conexionBD = () => {
    Mongoose.connect("mongodb://localhost:27017/cursoweb", { useNewUrlParser: true, useUnifiedTopology: true }
    , (error) => {
        if(error){
            console.log("Surgio un error en la conexion a la BD ",error);    
        } else {
            console.log("Nos conectamos a la base de datos");
        }

    } );
}

module.exports = { conexionBD }