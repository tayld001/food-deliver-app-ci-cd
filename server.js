const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;
const APP_VERSION = process.env.APP_VERSION || "v2.1";

const menu = [
  { id: 1, name: "Truffle Mushroom Risotto", price: 18.50 },
  { id: 2, name: "Spiced Lamb Tacos", price: 14.00 },
  { id: 3, name: "Burrata Garden Salad", price: 12.00 },
  { id: 4, name: "Crispy Duck Confit", price: 22.00 },
  { id: 5, name: "Waygu Smash Burger", price: 19.00 },
  { id: 6, name: "Miso Black Cod", price: 24.50 },
  { id: 7, name: "Burnt Basque Cheesecake", price: 9.00 },
];

app.use(express.static(path.join(__dirname, "public")));

app.get("/api/menu", (req, res) => {
  res.json(menu);
});

app.get("/health", (req, res) => {
  res.status(200).json({ status: "healthy" });
});

app.get("/version", (req, res) => {
  res.json({
    version: APP_VERSION
  });
});

app.listen(PORT, () => {
  console.log(`Food Menu Service running on port ${PORT}`);
});
