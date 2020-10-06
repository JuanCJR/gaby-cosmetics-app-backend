const express = require("express");
const router = express.Router();
const { signin,reconectUser } = require("../controllers/user.controller");

//Ruta para inicio de sesion
router.route("/signin").post(signin);
//Ruta para inicio de sesion
router.route("/reconect").post(reconectUser);
module.exports = router;
