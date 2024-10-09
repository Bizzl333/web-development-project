// form submission  listener
document.getElementById('contactForm').onsubmit = function(event) {
    event.preventDefault(); 
    
    // To retrieve values entered by user
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const formMessage = document.getElementById('formMessage'); 
    
    // form validation
    if (!name || !email || !message) {
        // display error message on empty fields
        formMessage.textContent = "Please fill out all fields!";
        formMessage.style.color = "red";
    } else {
        // displays success message after correct submission
        formMessage.textContent = "Form sent successfully!";
        formMessage.style.color = "green";
        // reset the form after submission
        document.getElementById('contactForm').reset();
    }
};
