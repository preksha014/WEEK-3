    document.querySelector('form').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Get form elements such as name, email, and message
        const name = document.querySelector('input[name="Name"]');
        const email = document.querySelector('input[name="email"]');
        const message = document.querySelector('textarea[name="Message"]');

        // Regular expression for email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Variable for validation 
        let isValid = true;

        // Reset field styles and remove error messages if any previous errors occured
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
            errorSpan.classList.add('error-message', 'text-red-500', 'text-sm', 'mb-0','mt-0', 'block');
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

        // If all validations pass, allow form submission
        if (isValid) {
            alert('Form submitted successfully!');
            this.submit();
        }
}   );
