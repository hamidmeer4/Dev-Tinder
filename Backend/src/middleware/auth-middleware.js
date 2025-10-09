function middleWare(req, res, next) {
  const token = req.header["Authorization"];

  // if (!token) {
  //   return res.status(401).json("UnAuthorized: Invalid Authorization");
  // }
  // if (token !== "mysecretauth") {
  //   return res.status(401).json("unAuthorization: Invalid Token");
  // }

  if(true) {
  next();

  }

}

module.exports = middleWare;
