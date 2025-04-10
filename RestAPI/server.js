// Import necessary modules
const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Load environment variables from the .env file
dotenv.config();

// Initialize Express app
const app = express();
app.use(express.json()); // Middleware to parse incoming JSON requests

// Connect to MongoDB using Mongoose
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Failed to connect to MongoDB:", err));

// Import the User model
const User = require("./models/user");

// Routes

// GET: Return all users
app.get("/users", async (req, res) => {
  try {
    const users = await User.find(); // Get all users from the database
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: "Error retrieving users", error: err });
  }
});

// POST: Add a new user
app.post("/users", async (req, res) => {
  const { name, email } = req.body;

  try {
    const newUser = new User({ name, email });
    await newUser.save(); // Save the new user to the database
    res.status(201).json(newUser); // Return the newly created user
  } catch (err) {
    res.status(500).json({ message: "Error creating user", error: err });
  }
});

// PUT: Edit a user by ID
app.put("/users/:id", async (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;

  try {
    const updatedUser = await User.findByIdAndUpdate(
      id,
      { name, email },
      { new: true }
    );
    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(updatedUser); // Return the updated user
  } catch (err) {
    res.status(500).json({ message: "Error updating user", error: err });
  }
});

// DELETE: Remove a user by ID
app.delete("/users/:id", async (req, res) => {
  const { id } = req.params;

  try {
    const deletedUser = await User.findByIdAndDelete(id);
    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json({ message: "User deleted" }); // Return success message
  } catch (err) {
    res.status(500).json({ message: "Error deleting user", error: err });
  }
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
