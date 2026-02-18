const authmiddleware = (req, res, next) => {
  const token = "xyzdef";
  const isauthmiddleware = token === "xyz";
  if (isauthmiddleware) {
    next();
  } else {
    res.status(401).send("You are not authorized");
  }
};

module.exports = { authmiddleware };
