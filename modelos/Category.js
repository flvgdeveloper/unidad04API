const mongoose = require("mongoose");

const categoryEntidad = new mongoose.Schema ({
    nombre: {type: String, require: true}
})


module.exports = mongoose.model("Category",categoryEntidad);