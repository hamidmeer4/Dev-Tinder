const jwt = require("jsonwebtoken"); 
const { User } = require("../models/user");

const userAuth = async (req,res,next) => {

  // first extract the token inside the cookie
  const {token} = req.cookies;

  if (!token) {
  throw new Error("Invslid Id");
  }
   
  // here i verify the token   
  // then extract the hiding id in login api 
  const decode = await jwt.verify(token,"@devTinder123")
  const {_id} = decode;

  if (!_id) {
      throw new Error("Invalid Id");
  }
  const user = await User.findById(_id);

  // if find the user then give to req object 
  req.user = user;
  next()

}
module.exports = {
  userAuth,
}