const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true })); // Middleware to parse form data

// Serve the HTML form on GET request to root
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Serve the contact form on GET request to /contact
app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/contact.html');
});

// Handle form submission on POST request to /submit-form
app.post('/submit-form', (req, res) => {
    const name = req.body.name; // Retrieve 'name' field from form data
    const email = req.body.email; // Retrieve 'email' field from form data
    const message = req.body.message; // Retrieve 'message' field from form data

    // Check if name is provided
    if (!name) {
        res.send('Please enter a valid username.');
    } else {
        res.send(`Thank you, ${name}. We have received your message.`);
    }
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
