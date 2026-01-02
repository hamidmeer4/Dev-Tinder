// const authAdmin = (req, res, next) => {
//   const token = "admin";
//   const isAuthorized = token === "admin";
//   if (!isAuthorized) {
//      return res.status(401).json({
//       success: false,
//       message: "Invalid Admin in Middleware",
//     });
//   } else {
//     next();
//   }
// };

// const authUser = (req, res, next) => {
//   const token = "hamid";
//   const isAuthorized = token === "hamid";

//   if (!isAuthorized) {
//     return res.status(401).json({
//       success: false,
//       message: "Invalid User in Middleware",
//     });
//   }

//   next();
// };


// module.exports = {authAdmin,authUser};
