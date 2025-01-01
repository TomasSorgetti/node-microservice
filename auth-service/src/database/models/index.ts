import { User } from "./user.model";
import { RefreshToken } from "./refresh_token.model";

User.hasMany(RefreshToken, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});

RefreshToken.belongsTo(User, {
  foreignKey: "userId",
});

export { User, RefreshToken };
