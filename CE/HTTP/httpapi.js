const http = require("http");
const axios = require("axios");
const port = 3000;
const server = http.createServer(async (req, res) => {
  //const response = await fetch("https://dummyjson.com/products")
  //const data await response.json()

  const response = await axios.get("https://dummyjson.com/products", params:{
    q
  }); //https://api.github.com/users
  const productdata = response.data.products;
  let frontend = `<html><head></head><body>`;
  productdata.forEach((product) => {
    frontend += `<div><img src="${product.thumbnail}</div>`;
  });

  res.end(frontend);
});
