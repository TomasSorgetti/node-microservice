import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database";
import { RefreshToken } from "./refresh_token.model";

export class User extends Model {
  public id!: number;
  public email!: string;
  public password!: string;
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
    password: {
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

User.hasMany(RefreshToken, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});
