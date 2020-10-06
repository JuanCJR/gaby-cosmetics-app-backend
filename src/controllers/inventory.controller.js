const inventoryCtrl = {};
const pool = require("../database/dataBase");
const path = require("path");
const homedir = path.join(require("../../homedir"), "userdata");
const fse = require("fs-extra");

//Funcion para crear producto
inventoryCtrl.newProduct = async (req, res) => {
  const {
    product_name,
    quantity,
    price,
    cod_sub_category,
  } = req.body;
  const file = req.files.newFile;
  const uploadPath = homedir + "/" + file.name;

  try {
    //Valida que el archivo exista
    await fse.stat(uploadPath);
    res.json({
      message: "file-upload-false",
    });
  } catch (e) {
    //Sino existe se guarda el archivo
    await file.mv(uploadPath, async (err) => {
      if (err) {
        console.log(err);
        return res.status(500).send(err);
      }
      res.json({
        message: "Archivo subido con exito",
        code: "file-upload-true",
      });
    });
    await pool.query(`INSERT INTO inventory values ?`, {
      product_name,
      quantity,
      price,
      on_sale: false,
      sale_price: 0,
      img_url: file.name,
      cod_sub_category,
    });
  }
};

//Funcion para listar productos
//Funcion para listar producto
//Funcion para cambiar producto
//Funcion para eliminar producto

module.exports = inventoryCtrl;
