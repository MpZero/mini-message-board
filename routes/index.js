const { Router } = require("express");
const router = Router();
const {
  getMessages,
  createUsernameGet,
  createUsernamePost,
  getSelectedMessage,
} = require("../controller/messageController");

router.get("/", getMessages);

router.get("/new", createUsernameGet);

router.post("/new", createUsernamePost);

router.get("/new/:id", getSelectedMessage);

module.exports = router;
