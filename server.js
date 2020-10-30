const express = require("express");

const connectDB = require("./config/connectDB");

const app = express();

const authRouter = require("./routes/auth");
const posts = require("./routes/post")
const abouts = require("./routes/about")

//middleWares
app.use(express.json());

//start the server
connectDB();

//Fix cross origin problem
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');

  next();
})

//routes
app.use("/api/auth", authRouter);
app.use("/api/posts", posts);
app.use("/api/abouts", abouts);

//lunch the Server
const port = process.env.PORT || 5001;
app.listen(port, (err) => {
  err
    ? console.log(err)
    : console.log(`The Server is Running on port ${port}....`);
});
