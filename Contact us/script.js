document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const mobile = document.getElementById('mobile').value;
    
    // Basic 10-digit validation
    if (mobile.length !== 10 || isNaN(mobile)) {
        alert("Please enter a valid 10-digit mobile number.");
        return;
    }

    alert("Thank you! Your message has been sent.");
    this.reset();
});