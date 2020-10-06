const categoryCtrl = {};
const pool = require("../database/dataBase");

//Funcion para crear una nueva categoria
categoryCtrl.newCategory = async (req, res) => {
  const { category_name } = req.body;
  const category = await pool.query(`INSERT INTO category SET ?`, {
    category_name: category_name,
  });
  console.log(category);
  res.json({ message: "category-created-true" });
};

//Funcion para listar categoria
categoryCtrl.getCategories = async (req, res) => {
  const categories = await pool.query(`SELECT * FROM category`);
  res.json(categories);
};
//Funcion para editar categoria
categoryCtrl.changeCategory = async (req, res) => {
  const { cod_category, category_name } = req.body;
  try {
    await pool.query(
      `update category set category_name= ? where cod_category= ?`,
      [category_name, cod_category]
    );
    res.json({ message: "category-updated-true" });
  } catch (e) {
    console.log(e);
    res.json({ message: "category-updated-false" });
  }
};

//Funcion para eliminar categoria
categoryCtrl.deleteCategory = async (req, res) => {
  const { cod_category } = req.body;
  try {
    await pool.query(`DELETE FROM CATEGORY WHERE cod_category = ?`, [
      cod_category,
    ]);
    res.json({ message: "category-deleted-true" });
  } catch (e) {
    console.log(e);
    res.json({ message: "category-deleted-false" });
  }
};

//Funcion para crear subcategoria
categoryCtrl.newSubCategory = async (req, res) => {
  const { cod_category, sub_category_name } = req.body;
  try {
    await pool.query(`insert into sub_category set ?`, {
      cod_category: cod_category,
      sub_category_name: sub_category_name,
    });
    res.json({ message: "subcategory-created-true" });
  } catch (e) {
    console.log(e);
    res.json({ message: "subcategory-created-false" });
  }
};
//Funcion para listar subcategoria
categoryCtrl.getSubCategory = async (req, res) => {
  const { cod_category } = req.query;
  const subcategory = await pool.query(
    `SELECT * FROM SUB_CATEGORY where cod_category = ?`,
    [cod_category]
  );
  res.json(subcategory);
};
//Funcion para editar subcategoria
categoryCtrl.changeSubCategory = async (req, res) => {
  const { cod_sub_category, sub_category_name, cod_category } = req.body;
  try {
    await pool.query(
      `UPDATE sub_category set cod_category = ?, sub_category_name = ?
        where cod_sub_category=?`,
      [cod_category, sub_category_name, cod_sub_category]
    );
    res.json({ message: "sub_category-updated-true" });
  } catch (e) {
    console.log(e);
    res.json({ message: "sub_category-updated-false" });
  }
};
//Funcion para eliminar subcategoria
categoryCtrl.deleteSubCategory = async (req, res) => {
  const { cod_sub_category } = req.body;
  try {
    await pool.query(`delete from sub_category where cod_sub_category = ?`, [
      cod_sub_category,
    ]);
    res.json({ message: "sub_category-deleted-true" });
  } catch (e) {
    console.log(e);
    res.json({ message: "sub_category-deleted-false" });
  }
};
module.exports = categoryCtrl;
