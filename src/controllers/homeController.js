const connection = require("../config/database");
const { getAllUsers, getUserById } = require("../services/CRUDService");

//import { getAllUsers } from "../services/CRUDservice";

const getHomepage = async (req, res) => {
  let results = await getAllUsers();
  return res.render("home.ejs", { listUsers: results }); // gán results cho listUsers x <- y
};

const getABC = (red, res) => {
  res.send("check ABC");
};

const getHoiDanIT = (req, res) => {
  // res.send("<h1>hoi dan it with eric</h1>");
  res.render("sample.ejs");
};

const postCreateUser = async (req, res) => {
  let email = req.body.email;
  let name = req.body.myname;
  let city = req.body.city;

  console.log(">>> email= ", email, " name= ", name, " city=", city);
  // let{email,name,city} = req.body;

  const [results, fields] = await connection.query(
    `INSERT INTO Users (email, name,city)
  VALUES (?, ?, ?);`,
    [name, email, city]
  );

  console.log(">>> check results: ", results);
  res.send(" Created user succeed !");

  // connection.query("select * from Users u ", function (err, results, fields) {
  //   console.log(">>>result= ", results); // results contains rows returned by server
  // });

  // const [results, fields] = await connection.query("select * from Users u ");
  // console.log(">>> check results :", results);
};

const getCreatePage = (req, res) => {
  res.render("create.ejs");
};

const getUpdatePage = async (req, res) => {
  const userId = req.params.id;
  let user = await getUserById(userId);
  res.render("edit.ejs", { userEdit: user }); // x <- y
};

module.exports = {
  getHomepage,
  getABC,
  getHoiDanIT,
  postCreateUser,
  getCreatePage,
  getUpdatePage,
};
