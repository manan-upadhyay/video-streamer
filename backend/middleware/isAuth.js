const jwt = require("jsonwebtoken");

//check for thr authorization token and validate user
const authMiddleware = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;
    req.token = token;
    next();
  } catch (error) {
    res.status(401).send({ message: "Please authenticate." });
  }
};

module.exports = authMiddleware;
