import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
  let accessToken = req.headers.authorization?.split(' ')[1];
//   console.log(accessToken);
  if (!accessToken)
    return res.status(401).json({
      err: 1,
      msg: "Missing access token",
    });

  jwt.verify(accessToken, process.env.SECRET_KEY, (err, user) => {
    if (err)
      return res.status(401).json({
        err: 1,
        msg: "Access token expired",
      });

    req.user = user
    // console.log(req.user)
    next();
  });
};

export default verifyToken;
