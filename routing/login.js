// const handleLogin = (req, res) => {
//   const { username, password } = req.body;

//   const user = require("../models/user");

//   // validasi username dan password kalo ga diisi
//   if (!username || !password) {
//     return res
//       .status(400)
//       .json({ message: "Username dan password diperlukan" });
//   }

//   // validasi user dari database
//   if (username !== "ivatTampan" || password !== "ivatTampan") {
//     return res.status(401).json({ message: "Username atau password salah" });
//   }

//   // jika berhasil, kirim respon usernamnya dan pesan login berhasil
//   return res.redirect("/play");
// };
// module.exports = { handleLogin };

///////////////////////////////////////////////////////////////////////////////////////////////////////////////

const { signup } = require("../models");

async function handleLogin(req, res) {
  try {
    const { email, password } = req.body;

    // Ambil data dr db
    const user = await signup.findOne({ where: { email, password } });

    // Validasi username & password
    if (!user || user.password !== password) {
      return res.status(401).send("Invalid email or password");
    }
    res.redirect("/play");
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
}

module.exports = {
  handleLogin,
};
