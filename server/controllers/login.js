const jwt = require("jsonwebtoken");
const db = require("../routes/db-config");
const bcrypt = require("bcrypt");

const login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.json({
      status: "error",
      error: "Please Enter your Email And Password",
    });
  } else {
    db.query(
      "SELECT * FROM users WHERE email = ?",
      [email],
      async (Err, result) => {
        if (Err) return console.log(Err);
        if (
          !result.length ||
          !(await bcrypt.compare(password, result[0].password))
        )
          return res.json({
            status: "error",
            error: "Incorrect Email or Password",
          });
        else {
          const token = jwt.sign({ id: result[0].id }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_EXPIRES,
          });
          const cookieOptions = {
            expiresIn: new Date(
              Date.now() + process.env.COOKIE_EXPIRES * 24 * 60 * 60 * 1000
            ),
            httpOnly: true,
          };
          res.cookie("userRegistered", token, cookieOptions);
          return res.json({
            status: "success",
            success: "User Successfully logged In",
          });
        }
      }
    );
  }
};

module.exports = login;
