const express = require("express");
const mongoose = require("mongoose");
const Product = require("./models/product.model.js");
const productRoute = require("./routes/product.route.js");

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/products", productRoute);

app.get("/", (req, res) => {
  res.send("Hello from node Api");
});

// Read All Products

// Read a single product

// Create a Product

// Update a Product

// Delete a product

mongoose
  .connect(
    "mongodb+srv://suragcoding:oRlFS3p6BdSU8aNa@backenddb.rnxkf.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB"
  )
  .then(() => {
    console.log("Server Connected to Database!!");
    app.listen(3000, () => {
      console.log("server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Database Connection Failed");
  });
