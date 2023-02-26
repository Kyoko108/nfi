import express from "express";
import path, { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const PoRT = process.env.PORT || 5000;

const app = express();

const a = path.join(__dirname, "../src/index.js");
app.use(express.static(a));

app.get("/", (req, res) => {
  res.send(a);
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
