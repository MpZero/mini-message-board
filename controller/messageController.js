const db = require("../db/queries");

async function getMessages(req, res) {
  try {
    const messages = await db.getAllMsg();
    // console.log("messages: ", messages);
    res.render("index", { title: "Homepage", messages });
  } catch (error) {
    console.error("Error fetching messages: ", error);
    res.status(500).send("Error fetching messages");
  }
}

function createUsernameGet(req, res) {
  res.render("form", { title: "Create Username" });
}

async function createUsernamePost(req, res) {
  try {
    const { msg, user } = req.body;
    // console.log(msg, user);
    if (!msg || !user) {
      return res.status(400).send("Message and User is required");
    }
    await db.insertMsg(msg, user);
    res.redirect("/");
  } catch (error) {
    console.error("Error creating message: ", error);
    res.status(500).send("Error creating message");
  }
  const messages = await db.getAllMsg();
  // console.log("messages: ", messages);
}

async function getSelectedMessage(req, res) {
  const id = req.params.id;
  // console.log("id: " + id);
  try {
    const message = await db.getOneMsg(id);
    // console.log(message);
    res.render("msg", { title: "Message", message: message[0] });
  } catch (error) {
    console.log("Error displaying message", error);
    res.status(500).send("Error displaying message");
  }
}

module.exports = {
  getMessages,
  createUsernameGet,
  createUsernamePost,
  getSelectedMessage,
};
