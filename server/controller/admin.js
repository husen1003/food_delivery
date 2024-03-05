const Admin = require("../models/admin");

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

module.exports = {
  getAllAdmins,
  getAdminById,
  crateAdmin,
};
