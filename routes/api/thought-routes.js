const router = require("express").Router();

const {
  getAllThoughts,
  getThoughtById,
  //   createThoughtByAnyone,
  createThoughtByUser,
  updateThought,
  //   deleteThought,
  deleteThoughtByUser,
  addReaction,
  deleteReaction,
} = require("../../controllers/thought-controller");

// /api/thoughts
router.route("/").get(getAllThoughts);
// router.route("/").post(createThoughtByAnyone);

// /api/thoughts/<userId>
router.route("/:userId").post(createThoughtByUser);

// /api/thoughts/<thoughtId>
router.route("/:thoughtId").get(getThoughtById).put(updateThought);
// router.route("/:thoughtId").delete(deleteThought);

// /api/thoughts/:userId/:thoughtId
router
  .route("/:userId/:thoughtId")
  .delete(deleteThoughtByUser)
  .put(addReaction);

/// /api/thoughts/:thoughtId/reactions
// router.route("/:thoughtId/reactions").post(addReaction);

// /api/thoughts/:userId/:thoughtId/:reactionId
router.route("/:userId/:thoughtId/:reactionId").delete(deleteReaction);

module.exports = router;
