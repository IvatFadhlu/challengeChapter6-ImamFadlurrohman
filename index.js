const express = require("express");
const app = express();
const loginHandler = require("./routing/login");
const fs = require("fs");
const path = require("path");
const { sequelize, signup } = require("./models");
const html = fs.readFileSync("./views/index.html");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", async function (req, res) {
  try {
    res.sendFile(__dirname + "/views/index.html");
  } catch (error) {}
});

app.get("/play", async function (req, res) {
  try {
    res.sendFile(__dirname + "/views/playNow.html");
  } catch (error) {}
});

app.get("/backtohome", async function (req, res) {
  try {
    res.redirect("/");
  } catch (error) {}
});

app.get("/sign-up", async function (req, res) {
  try {
    res.sendFile(__dirname + "/views/signUp.html");
  } catch (error) {}
});

app.get("/movetologinpage", async function (req, res) {
  try {
    res.sendFile(__dirname + "/views/login.html");
  } catch (error) {}
});

app.get("/login", async function (req, res) {
  try {
    res.sendFile(__dirname + "/views/login.html");
  } catch (error) {}
});

app.post("/login", loginHandler.handleLogin);

app.post("/signup", async function (req, res) {
  const transaction = await sequelize.transaction();
  try {
    // Ambil data yang dikirim dari formulir sign-up
    const { username, email, password } = req.body;
    // validasi
    if (!username || !email || !password) {
      // Jika ada data kosong, send respon
      return res.status(400).send("Please fill in all the fields");
    }

    // Logic
    const userData = await signup.create(
      {
        username,
        email,
        password,
      },
      { transaction }
    );

    await transaction.commit();

    // Tampilkan view engine, ejs
    res.render("signup-success", { userData });
  } catch (error) {
    console.error(error);
    await transaction.rollback();
    res.status(500).send("Internal Server Error");
  }
});

app.listen(process.env.PORT, function () {
  console.log(`server berjalan di port ${process.env.PORT}`);
});
