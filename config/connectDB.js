const mongoose = require("mongoose");

const db = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("database is connected successfully");
  } catch (error) {
    console.log("error in connecting database");
  }
};

module.exports = db;
