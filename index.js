const express = require("express");
const app = express();
const port = 3000;

const products = [
  {
    id: 1,
    name: "name",
    image: "",
    price: 32000,
    size: 42,
    stock: 5,
  },
  {
    id: 2,
    name: "name",
    image: "",
    price: 32000,
    size: 42,
    stock: 5,
  },
  {
    id: 3,
    name: "name",
    image: "",
    price: 32000,
    size: 42,
    stock: 5,
  },
];

app.get("/api/products", (req, res) => {
  res.send(products);
});

app.use("/", express.static("frontEnd"));


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
