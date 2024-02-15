const express = require('express');
const bodyParser = require('body-parser');
const {connection} = require('./db');
const userRoutes = require('./routes/userRouter');
const cors = require('cors');


const app = express();


app.use(cors());
app.use(bodyParser.json());

app.use('/api/users', userRoutes);

app.get("/", async (req, res) => {
  res.status(200).json("Router is working fine from backend")
});

app.listen(process.env.PORT, async (req, res) => {
    try {
      await connection;
      console.log("Connected to Database running fine");
    } catch (error) {
      console.log("App not connected to database check database.js", {
        msg: error.message,
      });
    }
    console.log("App running fine in  index.js ");
  });
