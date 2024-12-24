const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send("if you see this message, your application is working");
});

app.listen(3000, function() {
  console.log("app listen on port 3000");
});