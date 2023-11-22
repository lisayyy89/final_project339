const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('travelPoll');
    const resultDiv = document.getElementById('poll-result');
    const radioButtons = document.querySelectorAll('#travelPoll input[type="radio"]');

    function resetRadioButtonStyles() {
        radioButtons.forEach(rb => {
            rb.nextElementSibling.style.backgroundColor = 'transparent';
            rb.nextElementSibling.style.color = 'black'; // Reset text color to original
        });
    }

    radioButtons.forEach(button => {
        button.addEventListener('change', function() {
            resetRadioButtonStyles();
            if (this.checked) {
                // Apply style to the selected label
                this.nextElementSibling.style.backgroundColor = '#007bff';
                this.nextElementSibling.style.color = 'white';
            }
        });
    });

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(this);
        const choice = formData.get('destination');

        if (choice) {
            resultDiv.innerHTML = `You selected: ${choice}`;
            // Additional code for server communication or further handling
        } else {
            resultDiv.innerHTML = 'Please select a destination.';
        }
    });
});



document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('recipePoll');
    const resultDiv = document.getElementById('poll-result');
    const radioButtons = document.querySelectorAll('#recipePoll input[type="radio"]');

    function resetRadioButtonStyles() {
        radioButtons.forEach(rb => {
            rb.nextElementSibling.style.backgroundColor = 'transparent';
            rb.nextElementSibling.style.color = 'black';
        });
    }

    radioButtons.forEach(button => {
        button.addEventListener('change', function() {
            resetRadioButtonStyles();
            if (this.checked) {
                this.nextElementSibling.style.backgroundColor = '#007bff';
                this.nextElementSibling.style.color = 'white';
            }
        });
    });

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(this);
        const choice = formData.get('recipe');

        if (choice) {
            resultDiv.innerHTML = `You selected: ${choice}`;
        } else {
            resultDiv.innerHTML = 'Please select a recipe.';
        }
    });
});


// do the same style for the pet poll as the above two polls
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('petPoll');
    const resultDiv = document.getElementById('poll-result');
    const radioButtons = document.querySelectorAll('#petPoll input[type="radio"]');

    function resetRadioButtonStyles() {
        radioButtons.forEach(rb => {
            rb.nextElementSibling.style.backgroundColor = 'transparent';
            rb.nextElementSibling.style.color = 'black';
        });
    }

    radioButtons.forEach(button => {
        button.addEventListener('change', function() {
            resetRadioButtonStyles();
            if (this.checked) {
                this.nextElementSibling.style.backgroundColor = '#007bff';
                this.nextElementSibling.style.color = 'white';
            }
        });
    });

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const formData = new FormData(this);
        const choice = formData.get('pet');

        if (choice) {
            resultDiv.innerHTML = `You selected: ${choice}`;
        } else {
            resultDiv.innerHTML = 'Please select a pet.';
        }
    });
});
