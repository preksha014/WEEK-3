//Toggle Menu
const menuToggle = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
    menu.classList.toggle('hidden'); // Show/hide the menu
});

// Ensure the menu resets to its original state in desktop view
window.addEventListener('resize', () => {
    if (window.innerWidth >= 768) {
        menu.classList.remove('hidden'); // Ensure menu is always visible in desktop view
    }
});


// Image Gallery Slider
document.addEventListener("DOMContentLoaded", () => {
    const projects = document.querySelectorAll(".project-gallery");

    projects.forEach((project) => {
        const images = project.querySelectorAll(".gallery-images img");
        const prevBtn = project.querySelector(".prev-btn");
        const nextBtn = project.querySelector(".next-btn");
        //const currentIndexEl = project.querySelector(".current-index");

        let currentIndex = 0;

        const updateGallery = () => {
            images.forEach((img, index) => {
                img.classList.toggle("hidden", index !== currentIndex);
            });
        };

        prevBtn.addEventListener("click", () => {
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            updateGallery();
        });

        nextBtn.addEventListener("click", () => {
            currentIndex = (currentIndex + 1) % images.length;
            updateGallery();
        });

        // Initialize gallery
        updateGallery();
    });
});

// Form Validation
document.querySelector('form').addEventListener('submit', function (event) {
    // Prevent the default form submission
    event.preventDefault();

    // Get form elements such as name, email, and message
    const name = document.querySelector('input[name="Name"]');
    const email = document.querySelector('input[name="email"]');
    const message = document.querySelector('textarea[name="Message"]');

    // Regular expression for email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Variable for validation 
    let isValid = true;

    // Reset field styles and remove error messages if any previous errors occurred
    [name, email, message].forEach(field => {
        field.classList.remove('border-red-500', 'focus:ring-red-500');
        const errorMsg = field.nextElementSibling;
        if (errorMsg && errorMsg.classList.contains('error-message')) {
            errorMsg.remove();
        }
    });

    // To show error message
    function showError(field, message) {
        isValid = false;
        field.classList.add('border-red-500', 'focus:ring-red-500');
        const errorSpan = document.createElement('span');
        errorSpan.textContent = message;
        errorSpan.classList.add('error-message', 'text-red-500', 'text-sm', 'mb-0', 'mt-0', 'block');
        field.insertAdjacentElement('afterend', errorSpan);
    }

    // Check if name is empty
    if (!name.value.trim()) {
        showError(name, 'Name is required');
    }

    // Check if email is empty or invalid
    if (!email.value.trim() || !emailRegex.test(email.value)) {
        showError(email, 'Please provide a valid email');
    }

    // Check if message is empty
    if (!message.value.trim()) {
        showError(message, 'Message is required');
    }

    // If form is validate, show the message box
    if (isValid) {
        const messageBox = document.getElementById('message-box');
        const messageText = document.getElementById('message-text');
        messageText.textContent = 'Form submitted successfully!';
        messageBox.classList.remove('hidden');

        setTimeout(() => {
            messageBox.classList.add('hidden');
        }, 3000);
    }
});