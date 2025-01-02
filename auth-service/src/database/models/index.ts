import { User } from "./user.model";
import { RefreshToken } from "./refresh_token.model";
import { EmailVerification } from "./emailVerification.model";

// Refresh Token Relations
User.hasMany(RefreshToken, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});
RefreshToken.belongsTo(User, {
  foreignKey: "userId",
});

// Email Verification Relations
User.hasMany(EmailVerification, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});
EmailVerification.belongsTo(User, {
  foreignKey: "userId",
});

export { User, RefreshToken, EmailVerification };
