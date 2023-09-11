const express = require("express");
const cors = require("cors");
const env = require("dotenv");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require('body-parser')

// routes
const carRoutes = require("./routes/car");
const rentRoutes = require("./routes/rent");

// environment variable or you can say constants
env.config();

// mongodb connection
mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_DB_USER}:${process.env.MONGO_DB_PASSWORD}@cluster0.1zupo.mongodb.net/${process.env.MONGO_DB_DATABASE}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("Database connected");
  });

app.get("/", (req, res, next) => {
  res.status(200).json({
    message: "Hello from server",
  });
});

app.use(bodyParser.urlencoded({ extended: true }));

// middleware
app.use(cors());
app.use(express.json());
app.use('/api', carRoutes);
app.use('/api', rentRoutes);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
