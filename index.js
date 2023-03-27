const express = require("express");
const app = express();
const port = 3000;

const products = [
  {
    id: 1,
    name: "Nike Air Jordan 13",
    image: "/assets/img/H13_airJordan.png",
    price: 32000,
    size: 42,
    stock: 5,
  },
  {
    id: 2,
    name: "Nike Air Max 90",
    image: "/assets/img/H90_nikeAirMax.png",
    price: 32000,
    size: 42,
    stock: 5,
  },
  {
    id: 3,
    name: "Nike Air Jordan 3 Retro Cardil Red",
    image: "/assets/img/HcardilRed_AirJordan3Retro.png",
    price: 32000,
    size: 42,
    stock: 5,
  },
  {
    id: 4,
    name: "Nike Air Trainer 1 Dark Smoke Grey",
    image: "/assets/img/HdarkSmokeGrey_airTrainer1.png",
    price: 32000,
    size: 42,
    stock: 5,
  },
  {
    id: 5,
    name: "Nike Dunk High x Soulgoods",
    image: "/assets/img/HhighxSoulgoods_NikeDunk.png",
    price: 32000,
    size: 42,
    stock: 5,
  },
  {
    id: 6,
    name: "Nike Dunk Hi Retro",
    image: "/assets/img/HhiRetro_nikeDunk.png",
    price: 32000,
    size: 42,
    stock: 5,
  },
  {
    id: 7,
    name: "Nike Lebron IX Low",
    image: "/assets/img/Hlow_nikeLebronIX.png",
    price: 32000,
    size: 42,
    stock: 5,
  },
  {
    id: 8,
    name: "Nike Air Force 1 Low Retro QS",
    image: "/assets/img/HLowRetroQS_nikeAirForce1.png",
    price: 32000,
    size: 42,
    stock: 5,
  },
  {
    id: 9,
    name: "Nike Blazer mid '77 Vintage",
    image: "/assets/img/Hmid'77vintage_nikeBlazer.png",
    price: 32000,
    size: 42,
    stock: 5,
  },
  {
    id: 10,
    name: ">Nike Air Jordan Midnight Navy",
    image: "/assets/img/HmidnightNavy_airJordan.png",
    price: 32000,
    size: 42,
    stock: 5,
  },
  {
    id: 11,
    name: "Nike Air Max 90 NRG",
    image: "/assets/img/HNRG_airMax90.png",
    price: 32000,
    size: 42,
    stock: 5,
  },
  {
    id: 12,
    name: "Nike Air Jordan 12 Retro Play Offs",
    image: "/assets/img/Hplayoffs_AirJordan12Retro.png",
    price: 32000,
    size: 42,
    stock: 5,
  },
  {
    id: 13,
    name: "Nike Air Max Plus III",
    image: "/assets/img/HplusIII_nikeAirMax.png",
    price: 32000,
    size: 42,
    stock: 5,
  },
  {
    id: 14,
    name: "Nike Air Force 1 Serena",
    image: "/assets/img/Hserena_AirForce1.png",
    price: 32000,
    size: 42,
    stock: 5,
  },
  {
    id: 15,
    name: "Jordan Series SE Rui",
    image: "/assets/img/HseRui_jordanSeries.png",
    price: 32000,
    size: 42,
    stock: 5,
  },
  {
    id: 16,
    name: "Nike Air Force 1 LXX Swarovski",
    image: "/assets/img/Hswarovski_wAirForce1Lxx.png",
    price: 32000,
    size: 42,
    stock: 5,
  },
  {
    id: 17,
    name: "Nike Air Trainer 1",
    image: "/assets/img/HTrainer1_nikeAir.png",
    price: 32000,
    size: 42,
    stock: 5,
  },
  {
    id: 18,
    name: "Nike Air Max TW Next Nature",
    image: "/assets/img/HTwNextNature_nikeAirMax.png",
    price: 32000,
    size: 42,
    stock: 5,
  },
  {
    id: 19,
    name: "Nike Air Force 1 '07 UNO",
    image: "/assets/img/Huno_AirForce1_07.png",
    price: 32000,
    size: 42,
    stock: 5,
  },
  {
    id: 20,
    name: "Nike Dunk 1985 Yellow Acid Wash",
    image: "/assets/img/HyellowAcidWash_nikeDunk1985.png",
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
