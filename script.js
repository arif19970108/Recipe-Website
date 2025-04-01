// Example: Basic form validation (if needed)
document.querySelector("form").addEventListener("submit", function(event) {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    
    if (name === "" || email === "") {
        alert("Please fill in all fields.");
        event.preventDefault(); // Prevent form submission
    }
});

// Contact form submission event listener
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Form submit howa prevent kore
    alert("Your message has been sent successfully!");

    // Form Reset
    document.getElementById("contactForm").reset();
});
