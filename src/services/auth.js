function isAuthorized(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader || authHeader !== "secretpassword") {
    return res.status(401).send("Unauthorized: Access Denied");
  }

  next();
}

export { isAuthorized };
