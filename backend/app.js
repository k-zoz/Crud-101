const express = require("express");
const app = express();
const connectDb = require("./database/db");
require("dotenv").config();
const productRoute = require("./routes/route");
const pageNotFound = require("./middleware/pageNotFound");
const errorhandlingMiddleware = require("./middleware/error-handler");

const cors = require("cors");

app.use(express.json());
app.use(cors());
app.use("/api/v1/products", productRoute);
app.use(pageNotFound);
app.use(errorhandlingMiddleware);

const port = process.env.PORT || 5000;
const startServer = async () => {
  try {
    await connectDb(process.env.MONGO_URI);
    app.listen(
      port,
      console.log(
        `Server is listening on port ${port}... & CONNECTED TO THE DATABASE`
      )
    );
  } catch (error) {
    console.log(`Can't start server due to ${error}`);
  }
};

startServer();
