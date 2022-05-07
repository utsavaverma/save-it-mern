//The primary JavaScript file from which all the backend routes are configured.

const express = require("express");
const app = express();
const cors = require("cors");
const itemRoutes = require("./routes/items");
const userRoutes = require("./routes/user");

const mongoose = require("mongoose");

app.use(express.json());
app.use(cors());
app.use(itemRoutes);
app.use(userRoutes);

mongoose
  .connect(
    "mongodb+srv://abc:abc@cluster_name/project_name?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  )
  .then(() => {
    console.log("DB Connected");
    app.listen(5000, () => {
      console.log("Server running on port 5000");
    });
  })
  .catch((err) => {
    console.log(err);
  });
