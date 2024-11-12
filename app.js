const express = require('express');
const app = express();
const port = 3000;

// middleware used to parse the data from the form
app.use(express.urlencoded({ extended: true }));

// serve the index, contact and about .html files when the user navigates to it
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/about.html');
});

app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/contact.html');
});

// form submission on  the POST request and retrieve the values entered by user
app.post('/submit-form', (req, res) => {
    const name = req.body.name; 
    const email = req.body.email; 
    const message = req.body.message;

    // Check if all the fields are filled correctly and display the appropriate message
    if (!name || !email || !message) {
        res.send('Error: Please enter your name, email, and message.');
    } else {
        res.send(`Thank you, ${name}, we have received your message. We will reach out to you at ${email} soon.`);
    }
});

// Starts the server and listens on port 3000
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
