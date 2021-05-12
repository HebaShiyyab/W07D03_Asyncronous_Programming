const express = require("express");
const axios = require("axios");
const fs = require("fs");

const app = express();
const port = 5000;
app.use(express.json());

fs.readFile("./data.txt", (err, data) => {
  if (err) {
    console.log("Err");
  }
});

fs.writeFile("./text.txt", `A new file has been created`, (err) => {
  if (err) {
    throw err;
    console.log("Err");
  }
});
axios.get("https://jsonplaceholder.typicode.com/posts/1/").then((response) => {
  console.log(response.data);
});
// const getPost = (id) => {
//     if(id){

//     }.then()
//     return id.json('')
//   };
const getPostAsync = async (data) => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts/1/"
    );
    console.log(response.data);
  } catch (err) {
    console.log("ERR");
  }
};
getPostAsync();
const appendToFile = (data) => {
  fs.appendFile("data.txt", "hi hall", (err) => {
    if (err) {
      throw err;
      console.log("the data is append");
    } else {
      console.log("CORRECT");
    }
  });
};
app.get("/", (req, res) => {
  res.status(201);
  res.json("I am ready");
});

app.listen(port, (req, res) => {
  console.log("the server its ready");
});
