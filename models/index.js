import Comments from "./comment";
import Users from "./user";

//user has many comments
Users.hasMany(Comments, {
  sourceKey: "id",
  foreignKey: "userId",
  as: "comments",
});

//comment belongs to user
Comments.belongsTo(Users, {
  sourceKey: "id",
  foreignKey: "userId",
  as: "user",
});

export { Comments, Users };
