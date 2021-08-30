require('dotenv').config()
const path = require("path");
const express = require("express");
const app = express();
const db1 = require("mongoose");
const cors = require("cors");
const port = process.env.PORT;
const fRoutes = require('./routes/formRoutes')

const dbUrl =process.env.MDB_URL;

db1.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(port);
    console.log(`Server running`);
  })
  .catch(err => console.log(err));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
app.use(fRoutes)