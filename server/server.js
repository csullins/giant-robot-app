const express = require("express");
const db = require("./config/connection");

const { User } = require("./models");
const { ObjectId } = require("mongodb");

const app = express();
const port = process.env.port || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

db.once("open", () => {
  app.listen(port, () => {
    console.log(`API server running on port ${port}!`);
  });
});

const handleError = (err) => console.error(err);

app.get("/read", (req, res) => {
  db.collection("users")
    .find({})
    .toArray()
    .then((results) => res.json(results))
    .catch((err) => {
      if (err) throw err;
    });
});

app.post("/create", async (req, res) => {
  const newUser = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    address: req.body.address,
    address2: req.body.address2,
  });
  if (newUser.firstName && newUser.lastName && newUser.address) {
    await newUser.save();
    if (newUser) {
      res.status(201).json(newUser);
    } else {
      (err) => {
        if (err) throw err;
      };
    }
  } else {
    res.send("Please complete all required fields.")
    return;
  }
});

app.put("/update/:id", async (req, res) => {
  const query = { _id: new ObjectId(req.params.id) };
  const updates = {
    $set: {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      address: req.body.address,
      address2: req.body.address2,
    },
  };

  let collection = await db.collection("users");
  let result = await collection.updateOne(query, updates);

  res.send(result).status(200);
});

app.delete("/delete", (req, res) => {
  // To delete a document, convert the string id in body to an ObjectId
  const userId = new ObjectId(req.body.id);

  db.collection("users")
    .deleteOne({ _id: userId })
    .then((results) => {
      console.log(results);
      res.send(
        results.deletedCount ? "Document deleted" : "No document found!"
      );
    })
    .catch((err) => {
      if (err) throw err;
    });
});
