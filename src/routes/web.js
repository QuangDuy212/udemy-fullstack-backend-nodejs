const express = require("express");
const {
  getHomepage,
  getABC,
  getHoiDanIT,
  postCreateUser,
  getCreatePage,
} = require("../controllers/homeController.js");
const router = express.Router();

router.get("/", getHomepage);

router.get("/abc", getABC);

router.get("/hoidanit", getHoiDanIT);
router.get("/create", getCreatePage);

//post
router.post("/create-user", postCreateUser);

module.exports = router; //export default
