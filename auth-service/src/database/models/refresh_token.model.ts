import { DataTypes, Model } from "sequelize";
import { sequelize } from "../database";

export class RefreshToken extends Model {
  public id!: number;
  public token!: string;
  public userId!: number;
  public readonly created_at!: Date;
  public readonly updated_at!: Date;
}

RefreshToken.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    token: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: "auth_users",
        key: "id",
      },
    },
  },
  {
    sequelize,
    tableName: "refresh_tokens",
    timestamps: true,
  }
);
