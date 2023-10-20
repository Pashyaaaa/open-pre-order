const db = require("../routes/db-config");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
  const { email, password: Npassword } = req.body;
  console.log(email);
  if (!email || !Npassword) {
    return res.json({
      status: "error",
      error: "Please Enter your Email And Password",
    });
  } else {
    db.query(
      "SELECT email FROM users WHERE email = ?",
      [email],
      async (err, result) => {
        if (err) return console.log(err);
        if (result[0])
          return res.json({
            status: "error",
            error: "Email Has Already Registered",
          });
        else {
          const password = await bcrypt.hash(Npassword, 8);
          console.log(password);
          db.query(
            "INSERT INTO users SET ?",
            { email: email, password: password },
            (error, results) => {
              if (error) {
                throw error;
              } else {
                return res.json({
                  status: "success",
                  success: "User has been registered",
                });
              }
            }
          );
        }
      }
    );
  }
};

module.exports = register;
