const mongoose = require("mongoose");

const productEntidad = new mongoose.Schema ({
    nombre: {type: String, require: true},
    descripcion: {type: String, require: false},
    valor: {type: Number, require: true},
    stock:{type: Number, require: true},
    imagen:{type: String, require: true},
    fechaRegistro:{type: Date, require: false},
    //idCategory:{type: mongoose.Schema.Types.ObjectId, ref: "Category"  }
    idCategory:[{type: mongoose.Schema.Types.ObjectId, ref: "Category"  }]
})


module.exports = mongoose.model("Product",productEntidad);