const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// POST route for /bfhl

app.post("/bfhl", (req, res) => {
  try {
    const data = req.body.data;
    const user_id = "arun_chhabra_11012003";
    const email = "arun0282.be21@chitkara.edu.in";
    const roll_number = "2110990282";

    // Arrays to hold even numbers, odd numbers, and uppercase alphabets
    let even_numbers = [];
    let odd_numbers = [];
    let alphabets = [];

    // Iterate through the data array
    for (let i = 0; i < data.length; i++) {
      // Check if the element is a number
      if (!isNaN(data[i])) {
        if (data[i] % 2 === 0) {
          even_numbers.push(data[i]);
        } else {
          odd_numbers.push(data[i]);
        }
      } else {
        // If it's not a number, assume it's a string
        // Check if it's an alphabet
        if (data[i].match(/[a-zA-Z]/)) {
          alphabets.push(data[i].toUpperCase());
        }
      }
    }

    // Response object
    const response = {
      is_success: true,
      user_id: user_id,
      email: email,
      roll_number: roll_number,
      even_numbers: even_numbers,
      odd_numbers: odd_numbers,
      alphabets: alphabets,
    };

    // Sending response
    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ is_success: false, error: "Internal server error" });
  }
});

// Start server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
