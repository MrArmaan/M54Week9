const User = require("./model");

const signupUser = async (req, res) => {
  try {
    const user = await User.create({
      username: req.body.username,
      email: req.body.email,
      password: req.body.password,
    });

    res.status(201).json({ message: "user added", user: user });
  } catch {
    error;
  }
  {
    res.status(500).json({ message: error.message, error: error });
  }
};

const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
  } catch (error) {
    res.status(500).json({ message: "all users", users: users });
  }
};

module.exports = {
  signupUser: signupUser,
  getAllUsers,
};
