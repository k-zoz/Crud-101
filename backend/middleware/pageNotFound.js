const pageNotFound = (req, res, next) => {
  res.status(400).send(`<h1>PAGE NOT FOUND</h1>`);
  next();
};

module.exports = pageNotFound;
