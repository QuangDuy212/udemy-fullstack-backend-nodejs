const getHomepage = (req, res) => {
  res.send("Hello World vs Hoi dan it & Eric ! & Nodemon!");
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
