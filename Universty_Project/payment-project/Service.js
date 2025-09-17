const express = require("express");
const fs = require("fs");
const path = require("path");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

const USERS_FILE = path.join(__dirname, "users.json");

// Ensure file exists and is correctly formatted
if (!fs.existsSync(USERS_FILE)) {
  fs.writeFileSync(USERS_FILE, "[]");
}

let users = [];

// Load users from file
function loadUsers() {
  try {
    users = JSON.parse(fs.readFileSync(USERS_FILE));
  } catch (err) {
    console.error("Error reading or parsing users file:", err);
    users = [];
  }
}

// Sign Up Route
app.post("/signup", (req, res) => {
  const { text, email, password } = req.body;
  loadUsers(); // Load current users

  if (!text || !email || !password) {
    return res.status(400).json({ message: "Please provide all fields." });
  }

  const existing = users.find(user => user.email === email);
  if (existing) {
    return res.status(400).json({ message: "User already exists." });
  }

  // Add new user
  users.push({ text, email, password, paid: false });
  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2)); // Save updated users list
  res.json({ message: "Signup successful!" });
});

// Login Route
app.post("/login", (req, res) => {
  const { email, password } = req.body;
  loadUsers();

  const user = users.find(u => u.email === email && u.password === password);
  if (!user) {
    return res.status(404).json({ message: "User not found. Please sign up." });
  }

  res.json({ message: "Login successful!", user });
});

// Check Payment Status Route
app.post("/check-payment-status", (req, res) => {
  const { email, password } = req.body;
  loadUsers();

  const user = users.find(u => u.email === email && u.password === password);
  if (user) {
    res.json({ paid: user.paid === true });
  } else {
    res.status(404).json({ message: "User not found" });
  }
});

// Save Payment Route
app.post("/save-payment", (req, res) => {
  const { email, cardHolder, cardNumber, exp, cvv } = req.body;
  loadUsers();

  const user = users.find(u => u.email === email);
  if (!user) {
    return res.status(404).json({ message: "User not found. Please sign up." });
  }

  user.payment = { cardHolder, cardNumber, exp, cvv };
  user.paid = true;

  fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2)); // Save updated users list
  res.json({ message: "Payment saved successfully!" });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
