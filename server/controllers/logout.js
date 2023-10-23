const logout = (req, res) => {
  res.clearCookie("userRegistered");
  res.redirect("/");
};

module.exports = logout;
