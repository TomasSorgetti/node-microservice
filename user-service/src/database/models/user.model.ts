import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database";

export class User extends Model {
  public id!: number;
  public email!: string;
  public name!: string;
  public lastname!: string;
  public readonly created_at!: Date;
  public readonly updated_at!: Date;
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    tableName: "auth_users",
    timestamps: true,
  }
);
