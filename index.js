const express = require("express");
const path = require("path"); 

const app = express();

// Define a port
const PORT = process.env.PORT || 3000;


app.use(express.static(path.join(__dirname, "public")));
// Serve the HTML file
app.get("/table", (req, res) => {
  const filePath = path.join(__dirname, "src/table.html"); 
  res.sendFile(filePath);
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
