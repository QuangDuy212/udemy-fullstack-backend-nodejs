const connection = require('../config/database');
const getHomepage = (req, res) => {

  let users = [];

  connection.query(
    'select * from Users u ',
    function (err, results, fields) {
      users = results;
      console.log(">>>result homepage= ", results);// results contains rows returned by server

      console.log('>>>check users : ', users);
      res.send(JSON.stringify(users));
    }
  )

};

const getABC = (red, res) => {
  res.send("check ABC");
};

const getHoiDanIT = (req, res) => {
  // res.send("<h1>hoi dan it with eric</h1>");
  res.render("sample.ejs");
};

module.exports = {
  getHomepage,
  getABC,
  getHoiDanIT
};
