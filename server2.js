const express = require("express");
const app = express();
require("dotenv").config();

const db = require("./db");
const bosyParser = require("body-parser");
const Person = require("./models/person");
app.use(bosyParser.json());
app.post("/Person", async function (req, res) {
  const data = req.body;
  const newPerson = new Person(data);
  //   newPerson
  //     .save()
  //     .then((savedPerson) => {
  //       console.log("Data saved successfully");
  //       res.status(200).json(savedPerson);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //       res.status(500).json({ error: "Failed to save data" });
  //     });

  // using async await
  try {
    const savedPerson = await newPerson.save();
    console.log("Data saved successfully");
    res.status(200).json(savedPerson);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to save data" });
  }
});

app.get("/Person", async function (req, res) {
  try {
    const data = await Person.find();
    console.log("Data fetch successfully");
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to save data" });
  }
});

app.get("/Person/:workType", async function (req, res) {
  try {
    const workType = req.params.workType;
    if (
      workType === "chef" ||
      workType === "manager" ||
      workType === "waiter"
    ) {
      const response = await Person.find({ work: workType });
      console.log("Data fetch successfully");
      res.status(200).json(response);
    } else {
      res.status(404).json({ error: "invalid work type" });
    }
  } catch (error) {
    res.status(500).json({ error: "Failed to save data" });
  }
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("server run successfully");
});
