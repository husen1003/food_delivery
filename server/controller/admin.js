const Admin = require("../models/admin");
const generateWebToken = require("../utils/generateTokens");

const getAllAdmins = async (req, res) => {
  const data = await Admin.find();
  res.status(200).json({ data });
};

const getAdminById = async (req, res) => {
  const { id = "" } = req.params;
  const data = await Admin.findById(id);
  res.status(200).json({ data });
};

const crateAdmin = async (req, res) => {
  const { name = "", email, password } = req.body || {};
  const admin = await Admin.create({
    // _id: new ObjectId(),
    name,
    email,
    password,
  });
  if (admin) {
    res.status(200).json({
      message: "Admin created successfully!",
      success: true,
    });
  }
};

const Login = async (req, res) => {
  const { email = "", password = "" } = req.body || {};
  const admin = await Admin.findOne(
    { email, password },
    { name: 1, email: 1, _id: 1 }
  );
  console.log(admin);
  if (admin) {
    const token = await generateWebToken({ id: admin._id });
    res.status(200).json({
      message: "Login success!",
      success: true,
      token,
      data: admin,
    });
  } else
    return res.status(401).json({
      message: "Invalid credentials!",
      success: false,
    });
};

const deleteAdminById = async (req, res) => {
  const { id = "" } = req.params;
  const admin = await Admin.findByIdAndDelete(id);
  return res
    .status(200)
    .json({ success: true, message: "admin in successfully deleted" });
};

module.exports = {
  getAllAdmins,
  getAdminById,
  crateAdmin,
  deleteAdminById,
  Login,
};
