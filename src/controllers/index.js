import collections from "../mocks/index.js";

function getProducts(req, res) {
  res.send(collections.products);
}

function getUsers(req, res) {
  res.send(collections.users);
}

function findUser(req, res) {
  let username = req.body.username;
}

export { getProducts, getUsers, findUser };
