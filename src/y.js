import express from "express";

const PoRT = process.env.PORT || 5000;

const app = express();

app.get("/", (req, res) => {
  res.send("Hi I am live");
});

const start = async () => {
  try {
    app.listen(PoRT, () => {
      console.log(`${PoRT} Yes I am connected`);
    });
  } catch (error) {
    console.log(error);
  }
};
start();
