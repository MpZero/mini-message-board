const { Router } = require("express");
const router = Router();
const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
    id: 1,
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
    id: 2,
  },
];

router.get("/", (req, res) => {
  res
    .status(200)
    .render("index", { title: "Mini Messageboard", messages: messages });
});

router.get("/new", (req, res) => {
  res.status(200).render("form", { title: "Post your Message" });
});

router.post("/new", (req, res) => {
  const { user, msg } = req.body;

  messages.push({
    text: msg,
    user: user,
    added: new Date(),
    id: messages.length + 1,
  });
  res.redirect("/");

  console.log(messages);
});

router.get("/new/:id", (req, res) => {
  const message = messages[req.params.id];
  if (message) {
    res.render("msg", { title: "Message Details", message: message });
  } else {
    res.status(404).send("Message not found");
  }
});

module.exports = router;
