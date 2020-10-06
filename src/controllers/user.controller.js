const userCtrl = {};
const pool = require("../database/dataBase");

//funcion de inicio de sesion
userCtrl.signin = async (req, res) => {
  const { username, passwd } = req.body;
  const user = await pool.query(`SELECT * FROM users where username = ?`, [
    username,
  ]);

  if (user.length) {
    if (user[0].passwd === passwd) {
      res.json({ cod_user: user[0].cod_user, username: user[0].username });
    } else {
      res.json({ message: "password-false" });
    }
  } else {
    res.json({ message: "username-false" });
  }
};

//Funcion para reconectar
userCtrl.reconectUser = async (req, res) => {
  const { cod_user } = req.body;

  const user = await pool.query(`SELECT * FROM users where cod_user = ?`, [
    cod_user,
  ]);
  if (user.length) {
    console.log(user);
    res.json({ cod_user: user[0].cod_user, username: user[0].username });
  } else {
    res.json({ message: "username-false" });
  }
};

module.exports = userCtrl;
