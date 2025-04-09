// Load libraries
require("dotenv").config();
const mongoose = require("mongoose");

// Connect to the database
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000, // Added timeout option
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Error connecting to MongoDB:", err));

// Define the Schema
const personSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: Number,
  favoriteFoods: [String],
});

// Create the Model
const Person = mongoose.model("Person", personSchema);

// 4. Create and save a record using the model (Person)
const createAndSavePerson = async () => {
  try {
    const person1 = new Person({
      name: "John Doe",
      age: 30,
      favoriteFoods: ["Pizza", "Burgers"],
    });
    const data = await person1.save();
    console.log("Person saved:", data);
  } catch (err) {
    console.error("Error saving person:", err);
  }
};

// 5. Create multiple records using Model.create()
const createManyPeople = async () => {
  try {
    const arrayOfPeople = [
      { name: "Alice", age: 25, favoriteFoods: ["Sushi", "Steak"] },
      { name: "Bob", age: 35, favoriteFoods: ["Pasta", "Pizza"] },
    ];
    const data = await Person.create(arrayOfPeople);
    console.log("People created:", data);
  } catch (err) {
    console.error("Error creating people:", err);
  }
};

// 6. Search the database using model.find()
const findPeopleByName = async (name) => {
  try {
    const people = await Person.find({ name });
    console.log("Found people:", people);
  } catch (err) {
    console.error("Error finding people:", err);
  }
};

// 7. Search for a single person using model.findOne()
const findOneByFavoriteFood = async (food) => {
  try {
    const person = await Person.findOne({ favoriteFoods: food });
    console.log("Found person:", person);
  } catch (err) {
    console.error("Error finding person:", err);
  }
};

// 8. Search using model.findById()
const findPersonById = async (id) => {
  try {
    const person = await Person.findById(id);
    console.log("Found person by ID:", person);
  } catch (err) {
    console.error("Error finding person by ID:", err);
  }
};

// 9. Update a record using findOneAndUpdate()
const updatePersonAge = async (name, newAge) => {
  try {
    const updatedPerson = await Person.findOneAndUpdate(
      { name },
      { age: newAge },
      { new: true } // To get the updated document
    );
    console.log("Updated person:", updatedPerson);
  } catch (err) {
    console.error("Error updating person:", err);
  }
};

// 10. Delete a person using findByIdAndDelete()
const deletePersonById = async (id) => {
  try {
    const removedPerson = await Person.findByIdAndDelete(id); // Updated method
    console.log("Person removed:", removedPerson);
  } catch (err) {
    console.error("Error removing person:", err);
  }
};

// 11. Delete many people using deleteMany()
const deletePeopleByName = async (name) => {
  try {
    const result = await Person.deleteMany({ name });
    console.log("People removed:", result);
  } catch (err) {
    console.error("Error removing people:", err);
  }
};

// 12. Use chaining for querying
const queryChain = async () => {
  try {
    const people = await Person.find({ favoriteFoods: "Burritos" })
      .sort({ name: 1 }) // Sort by name
      .limit(2) // Limit results to 2
      .select("name -age"); // Hide age field
    console.log("Found people:", people);
  } catch (err) {
    console.error("Error finding people:", err);
  }
};

// Call functions to test
createAndSavePerson();
createManyPeople();
findPeopleByName("John Doe");
findOneByFavoriteFood("Pizza");
findPersonById("60d9f1f1b1b9b4a773cf1b5d"); // Replaced with valid ObjectId placeholder
updatePersonAge("John Doe", 20);
deletePersonById("60d9f1f1b1b9b4a773cf1b5d"); // Replaced with valid ObjectId placeholder
deletePeopleByName("Mary");
queryChain();
