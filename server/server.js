const express = require("express");
const { MongoClient, ObjectId } = require("mongodb");

const app = express();
const port = 3001;

const connectionStringURI = `mongodb://127.0.0.1:27017`;

const client = new MongoClient(connectionStringURI);

let db;

const dbName = "giant-robot-db";

client
  .connect()
  .then(() => {
    console.log("Connected successfully to MongoDB");
    db = client.db(dbName);

    app.listen(port, () => {
      console.log(`Example app listening at http://localhost:${port}`);
    });
  })
  .catch((err) => {
    console.error("Mongo connection error: ", err.message);
  });

app.use(express.json());

app.post("/create", (req, res) => {
  db.collection("users")
    .insertOne({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      address: req.body.address,
      address2: req.body.address2,
    })
    .then((results) => res.json(results))
    .catch((err) => {
      if (err) throw err;
    });
});

app.get("/read", (req, res) => {
  db.collection("users")
    .find({})
    .toArray()
    .then((results) => res.json(results))
    .catch((err) => {
      if (err) throw err;
    });
});


app.delete("/delete", (req, res) => {
  // To delete a document, we need to convert the string id in body to an ObjectId
  const userId = new ObjectId(req.body.id);

  db.collection("users")
    .deleteOne(
      { _id: userId }
    )
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
