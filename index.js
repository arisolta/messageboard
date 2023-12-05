const express = require("express");
const app = express();
const port = 3000; // You can set any port you prefer

// Set up middleware, view engine, and static files
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use(express.static("public")); // If you have a 'public' folder for static files

// Include your routes
const indexRouter = require("./routes/index");
app.use("/", indexRouter);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
