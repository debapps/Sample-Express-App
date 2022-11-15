const express = require("express");
const os = require("os");

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
  netInfo = os.networkInterfaces();
  localIP = netInfo["Loopback Pseudo-Interface 1"][1]["address"];
  console.log(`Application is listening on Address -  ${localIP}:${port}`);
});
