const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Middleware for parsing form data
app.use(express.urlencoded({ extended: true }));

// Serve static files from the current directory
app.use(express.static(path.join(__dirname)));

// Form submission on POST request and retrieve the values entered by the user
app.post('/submit-form', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const message = req.body.message;

    // Check if all fields are filled correctly and display the appropriate message
    if (!name || !email || !message) {
        res.send('Error: Please enter your name, email, and message.');
    } else {
        res.send(`Thank you, ${name}, we have received your message. We will reach out to you at ${email} soon.`);
    }
});

// Start the server and listen on port 3000
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
