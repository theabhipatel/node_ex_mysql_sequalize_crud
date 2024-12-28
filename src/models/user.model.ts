import { DataTypes, ModelDefined } from "sequelize";
import { sequelize } from "../utils/connectDb";

interface IBaseUserSchema {
  id?: number;
  name: string;
  email: string;
  age: number;
}

const userModel: ModelDefined<
  IBaseUserSchema,
  Omit<IBaseUserSchema, "id">
> = sequelize.define(
  "user",
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: true,
    tableName: "users",
  }
);

export default userModel;
