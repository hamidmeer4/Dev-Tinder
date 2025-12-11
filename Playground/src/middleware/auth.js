 const auth = (req,res,next) => {
  const token = 'xyz';
  const isAuthorized = token === "xyz";
  if(!isAuthorized) {
    res.status(500).send("something went wrong");
  }
  else {
    next();
  }
}

const userAuth = (req,res,next) => {
  const token = 'abc';
  const isAuthorized = token === "abc";

  if(!isAuthorized) {
    res.statue(609).send("something went wrong");
  }
  else {
    next();
  }
}


module.exports = {
    auth,
    userAuth
}