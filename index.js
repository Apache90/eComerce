const express = require("express");
const app = express();
const port = 3000;

const products = [
  {
    id: 1,
    name: "Nike Air Jordan 13",
    size: 41,
    price: 40700,
    image: "/frontEnd/assets/img/H13_airJordan.png",
  },
  {
    id: 2,
    name: "Nike Air Max 90",
    size: 41,
    price: 37000,
    image: "/frontEnd/assets/img/H90_nikeAirMax.png",
  },
  {
    id: 3,
    name: "Nike Air Jordan 3 Retro Cardil Red",
    size: 41,
    price: 49000,
    image: "/frontEnd/assets/img/HcardilRed_AirJordan3Retro.png",
  },
  {
    id: 4,
    name: "Nike Air Trainer 1 Dark Smoke Grey",
    size: 41,
    price: 450000,
    image: "/frontEnd/assets/img/HdarkSmokeGrey_airTrainer1.png",
  },
  {
    id: 5,
    name: "Nike Dunk High x Soulgoods",
    size: 41,
    price: 450000,
    image: "/frontEnd/assets/img/HhighxSoulgoods_NikeDunk.png",
  },
  {
    id: 6,
    name: "Nike Dunk Hi Retro",
    size: 41,
    price: 450000,
    image: "/frontEnd/assets/img/HhiRetro_nikeDunk.png",
  },
  {
    id: 7,
    name: "Nike Lebron IX Low",
    size: 41,
    price: 450000,
    image: "/frontEnd/assets/img/Hlow_nikeLebronIX.png",
  },
  {
    id: 8,
    name: "Nike Air Force 1 Low Retro QS",
    size: 41,
    price: 450000,
    image: "/frontEnd/assets/img/HLowRetroQS_nikeAirForce1.png",
  },
  {
    id: 9,
    name: "Nike Blazer mid '77 Vintage",
    size: 41,
    price: 450000,
    image: "/frontEnd/assets/img/Hmid'77vintage_nikeBlazer.png",
  },
  {
    id: 10,
    name: "Nike Air Jordan Midnight Navy",
    size: 41,
    price: 450000,
    image: "/frontEnd/assets/img/HmidnightNavy_airJordan.png",
  },
  {
    id: 11,
    name: "Nike Air Max 90 NRG",
    size: 41,
    price: 450000,
    image: "/frontEnd/assets/img/HNRG_airMax90.png",
  },
  {
    id: 12,
    name: "Nike Air Jordan 12 Retro Play Offs",
    size: 41,
    price: 450000,
    image: "/frontEnd/assets/img/Hplayoffs_AirJordan12Retro.png",
  },
  {
    id: 13,
    name: "Nike Air Max Plus III",
    size: 41,
    price: 450000,
    image: "/frontEnd/assets/img/HplusIII_nikeAirMax.png",
  },
  {
    id: 14,
    name: "Nike Air Force 1 Serena",
    size: 41,
    price: 450000,
    image: "/frontEnd/assets/img/Hserena_AirForce1.png",
  },
  {
    id: 15,
    name: "Jordan Series SE Rui",
    size: 41,
    price: 450000,
    image: "/frontEnd/assets/img/HseRui_jordanSeries.png",
  },
  {
    id: 16,
    name: "Nike Air Force 1 LXX Swarovski",
    size: 41,
    price: 450000,
    image: "/frontEnd/assets/img/Hswarovski_wAirForce1Lxx.png",
  },
  {
    id: 17,
    name: "Nike Air Trainer 1",
    size: 41,
    price: 450000,
    image: "/frontEnd/assets/img/HTrainer1_nikeAir.png",
  },
  {
    id: 18,
    name: "Nike Air Max TW Next Nature",
    size: 41,
    price: 450000,
    image: "/frontEnd/assets/img/HTwNextNature_nikeAirMax.png",
  },
  {
    id: 19,
    name: "Nike Air Force 1 '07 UNO",
    size: 41,
    price: 450000,
    image: "/frontEnd/assets/img/Huno_AirForce1_07.png",
  },
  {
    id: 20,
    name: "Nike Dunk 1985 Yellow Acid Wash",
    size: 41,
    price: 450000,
    image: "/frontEnd/assets/img/HyellowAcidWash_nikeDunk1985.png",
  },
];

app.get("/api/products", (req, res) => {
  res.send(products);
});

app.use("/", express.static("frontEnd"));

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
