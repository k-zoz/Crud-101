const mongoose = require("mongoose");

// const connectionString =
//   "mongodb+srv://kzoz:8Characters.@cluster0.jms5l.mongodb.net/CRUD-1?retryWrites=true&w=majority";

// mongoose
//   .connect(connectionString)
//   .then(() => {
//     console.log("Connected to the database");
//   })
//   .catch((error) => {
//     console.log(error);
//   });
const connectDb = (url) => {
  return mongoose.connect(url, {});
};

module.exports = connectDb;
