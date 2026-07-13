// ---------- PRICE CALCULATOR ----------
document.getElementById('calcBtn').addEventListener('click', function() {
    const workType = document.getElementById('workType').value;
    const deadlineInput = document.getElementById('deadlineDate').value;
    const resultDiv = document.getElementById('priceResult');

    // Check if date is selected
    if (!deadlineInput) {
        resultDiv.innerHTML = '⚠️ Please select a deadline date.';
        return;
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0); // Remove time part for accurate day difference

    const deadlineDate = new Date(deadlineInput);
    deadlineDate.setHours(0, 0, 0, 0);

    // Calculate difference in days
    const diffTime = deadlineDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    // If deadline is in the past
    if (diffDays < 0) {
        resultDiv.innerHTML = '❌ The deadline cannot be in the past. Please pick a future date.';
        return;
    }

    let price = 0;
    let typeLabel = '';

    if (workType === 'assignment') {
        typeLabel = 'Assignment';
        if (diffDays >= 7) {
            price = 100;
        } else if (diffDays >= 4) {   // More than 3 days means 4,5,6
            price = 200;
        } else if (diffDays >= 1) {   // 1, 2, or 3 days (less than 3? wait, user said <3 days = 500, so days 1,2 = 500. Let's refine)
            // User said: "deadline having less than 3 days price will be 500 pkr"
            // So days 1 and 2 = 500. What about day 3? Since he said "more than 3 days" = 200, day 3 is neither. 
            // To avoid confusion, I will do: 1-2 days = 500, 3-6 days = 200, 7+ = 100.
            if (diffDays <= 2) {
                price = 500;
            } else {
                price = 200; // this covers days 3,4,5,6
            }
        } else {
            // diffDays = 0 (today) - I'll treat it as urgent
            price = 500;
        }
    } else { // Project
        typeLabel = 'Project';
        if (diffDays > 7) {
            price = 1000;
        } else if (diffDays >= 1) {
            price = 2000;
        } else {
            price = 2000; // If deadline is today, still urgent project
        }
    }

    // Display the result
    resultDiv.innerHTML = `
        ✅ ${typeLabel} with ${diffDays} day(s) remaining: 
        <span style="color: #0b2a41; font-size: 2rem;">${price} PKR</span>
    `;
});

// ---------- CONTACT FORM (Opens Gmail via mailto) ----------
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Stop the page from reloading

    // Get values from the form
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // Basic validation (though HTML required handles it, we double-check)
    if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
    }

    // Prepare the email subject and body
    const subject = `Message from ${name} (via Assignment Website)`;
    const body = `Name: ${name}%0AEmail: ${email}%0A%0AMessage:%0A${message}`;

    // Create the mailto link
    const mailtoLink = `mailto:abdulazeem7982@gmail.com?subject=${encodeURIComponent(subject)}&body=${body}`;

    // Open the user's default email client (Gmail if they use it)
    window.location.href = mailtoLink;

    // Optional: Show a success message
    alert('📧 Your Gmail app will open now. Just review and press Send!');
    // Reset the form (optional)
    // this.reset();
});