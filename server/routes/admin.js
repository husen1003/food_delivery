const express = require("express");
const mongoose = require("mongoose");
const {
  crateAdmin,
  getAdminById,
  getAllAdmins,
  deleteAdminById,
  Login,
} = require("../controller/admin");
const verifyToken = require("../middlewares/verifyToken");
const ObjectId = mongoose.Types.ObjectId;

const app = express();

app.get("/", verifyToken, getAllAdmins);
app.get("/:id", getAdminById);
app.post("/create", crateAdmin);
app.delete("/deleteUser/:id", deleteAdminById);
app.post("/login", Login);

module.exports = app;

// // get Admin api
// /**
//  * @swagger
//  *  description: get users
//  * /v1/api/admin:
//  *  get:
//  *      tags: [Admin]
//  *      summary: Get all admins
//  *      responses:
//  *        default:
//  *          description: default response
//  */
/**
 * @swagger
 * /v1/api/admin:
 *   get:
 *     tags:
 *       - Admin
 *     summary: Get All admins
 *     description: Retrieve a list of all admins
 *     responses:
 *       200:
 *         description: A list of admins
 *       401:
 *         description: Unauthorized
 */

// Create Admin api
/**
 * @swagger
 *  description: Create Admin
 * /v1/api/admin/create:
 *  post:
 *      tags: [Admin]
 *      summary: Create Admin.
 *      consumes:
 *       - application/json
 *      parameters:
 *        - in: body
 *          name: user
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                 type: string
 *              email:
 *                 type: string
 *              password:
 *                type: string
 *      responses:
 *        default:
 *          description: default response
 */

/**
 * @swagger
 * description: Get Admin
 * /v1/api/admin/deleteUser/{userId}:
 *  delete:
 *      tags: [Admin]
 *      description: Delete user
 *      parameters:
 *        - in: path
 *          name: userId
 *          schema:
 *              type: string
 *          required: true
 *          description: string id of user to delete
 *      responses:
 *          200:
 *              description: User that was deleted
 */

/**
 * @swagger
 *  description: Login Admin
 * /v1/api/admin/login:
 *  post:
 *      tags: [Admin]
 *      summary: Login Admin.
 *      consumes:
 *       - application/json
 *      parameters:
 *        - in: body
 *          name: user
 *          schema:
 *            type: object
 *            properties:
 *              email:
 *                 type: string
 *              password:
 *                type: string
 *      responses:
 *        default:
 *          description: default response
 */
