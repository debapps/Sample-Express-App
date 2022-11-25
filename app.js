const express = require("express");

// Create the express app.
const app = express();

// Setting the static folder.
app.use(express.static("public"));

// Route: /, Method: GET.
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/views/index.html", (err) => {
    if (err) {
      console.log(`Error in loading the html file content.`);
      console.log(err);
    }
  });
});

// Define the port.
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Application is running on the Port - ${port}`);
});
