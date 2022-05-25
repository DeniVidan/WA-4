import express from "express";
import cors from "cors";
import knjige from "./knjige.json"

const app = express();
const port = 3000;

app.use(express.json());
app.use(cors());

app.get("/knjige", (req, res) => {  
  res.send(knjige);
});

app.get("/knjige/:isbn", (req, res) => {
  const {isbn} = req.params
  const found = knjige.find(element => element.isbn == isbn);
  res.send(found);
})

app.listen(port, () => {
  console.log(`Example app listening port ${port}`);
});
