const express = require("express");
const router = express.Router();
const {
  newCategory,
  getCategories,
  changeCategory,
  deleteCategory,
  newSubCategory,
  getSubCategory,
  changeSubCategory,
  deleteSubCategory
} = require("../controllers/category.controller");
//ruta para creacion de categorias
router.route("/newcategory").post(newCategory);
//ruta para listar categorias con subcategorias
router.route("/getcategories").get(getCategories);
//ruta para cambiar categoria
router.route("/changecategory").post(changeCategory);
//ruta para eliminar categoria
router.route("/deletecategory").post(deleteCategory);
//ruta para crear subcategoria
router.route("/newsubcategory").post(newSubCategory);
//ruta para listar subcategoria
router.route("/getsubcategory").get(getSubCategory);
//ruta para listar cambiar subcategoria
router.route("/changesubcategory").post(changeSubCategory);
//ruta para listar eliminar subcategoria
router.route("/deletesubcategory").post(deleteSubCategory);

module.exports = router;
