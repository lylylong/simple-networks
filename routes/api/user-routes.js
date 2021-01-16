const router = require("express").Router();

const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
} = require("../../controllers/user-controller");

// /api/users
router.route("/").get(getAllUsers).post(createUser);

// /api/users/:id
router.route("/:UserId").get(getUserById).put(updateUser).delete(deleteUser);

// /api/users/:id/friends/:friendId
router.route("/:UserId/friends/:friendId").post(addFriend).delete(deleteFriend);

module.exports = router;
