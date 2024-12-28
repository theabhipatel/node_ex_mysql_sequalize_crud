import { RequestHandler } from "express";
import userModel from "../models/user.model";
import { Op } from "sequelize";

const handleCreateUser: RequestHandler = async (req, res, next) => {
  try {
    const { name, email, age } = req.body;
    const user = await userModel.create({
      name,
      email,
      age,
    });
    res.status(201).json({
      success: true,
      message: "User created successfully.",
      user,
    });
  } catch (error) {
    next(error);
  }
};
const handleGetAllUsers: RequestHandler = async (req, res, next) => {
  try {
    const name = req.query.name;
    const whereClause = name
      ? { where: { name: { [Op.like]: `%${name}%` } } }
      : {};
    const users = await userModel.findAll(whereClause);
    res.status(200).json({
      success: true,
      message: "Users fetched successfully.",
      users,
    });
  } catch (error) {
    next(error);
  }
};
const handleGetUserById: RequestHandler = async (req, res, next) => {
  try {
    const id = req.params.id;
    const user = await userModel.findByPk(id);
    if (!user) {
      res.status(404).json({
        success: false,
        message: "User not found.",
        user,
      });
      return;
    }
    res.status(200).json({
      success: true,
      message: "User fetched successfully.",
      user,
    });
  } catch (error) {
    next(error);
  }
};
const handleUpdateUserById: RequestHandler = async (req, res, next) => {
  try {
    const id = req.params.id;
    const user = await userModel.findByPk(id);
    if (!user) {
      res.status(404).json({
        success: false,
        message: "User not found.",
      });
      return;
    }
    const { name, email, age } = req.body;
    await user.update({ name, email, age });
    res.status(200).json({
      success: true,
      message: "User updated successfully.",
      user,
    });
  } catch (error) {
    next(error);
  }
};
const handleDeleteUserById: RequestHandler = async (req, res, next) => {
  try {
    const id = req.params.id;
    const user = await userModel.findByPk(id);
    if (!user) {
      res.status(404).json({
        success: false,
        message: "User not found.",
      });
      return;
    }
    await user.destroy();
    res.status(200).json({
      success: true,
      message: "User deleted successfully.",
      user,
    });
  } catch (error) {
    next(error);
  }
};

export default {
  handleCreateUser,
  handleGetAllUsers,
  handleGetUserById,
  handleUpdateUserById,
  handleDeleteUserById,
};
