const asyncHandle = require("express-async-handler");
const User = require("./../models/user.model");
const response = require("./../utils/response");

/**
 * @description Get All users
 * @route GET /users
 * @access Private router
 */
const getUser = asyncHandle(async (req, res) => {
  const user = await User.find({ _d: req.params.id });
  if (!user) return response.notFoundResponse(res);
  return response.successResponse(user, res);
});

const getAllUsers = asyncHandle(async (req, res) => {});
const createUser = asyncHandle(async (req, res) => {});
const updateUser = asyncHandle(async (req, res) => {});
const deleteUser = asyncHandle(async (req, res) => {});

module.exports = { getUser, getAllUsers, createUser, updateUser, deleteUser };
