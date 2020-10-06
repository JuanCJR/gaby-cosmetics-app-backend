const path = require("path");
const dotenv = require("dotenv");
dotenv.config({ path: path.join(__dirname, "../.env") });
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const pool = require("./database/dataBase");
const { static } = require("express");

pool.getConnection((err) => {
  if (err) throw err;
  console.log("DB Connected");
});
//Initializations
const app = express();

//Settings
app.set("port", process.env.PORT || 8082);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//middlewares
app.use(cors());

//Configuracion para permitir el uso de archivos json
app.use(express.json());

//Routes
app.use("/api/users", require("./routes/user")); //Ruta para el manejo de usuarios
app.use("/api/inventory", require("./routes/inventory")); //Ruta para el manejo de inventario
app.use("/api/category", require("./routes/category")); //Ruta para el manejo de categorias

//static files 
app.use(express.static(path.join(require("../homedir"),"userdata")));
module.exports = app;
