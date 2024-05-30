$(document).ready(function() {
    const form = $('#registrationForm');
    const toastEl = $('#toast');

    form.on('submit', function(event) {
        event.preventDefault();
        event.stopPropagation();

        if (form[0].checkValidity()) {
            // Scroll to the top of the page
            $('html, body').animate({ scrollTop: 0 }, 'smooth');

            // Show the toast notification
            toastEl.addClass('show');
            toastEl.toast('show');

            // Reset the form
            form[0].reset();
            form.removeClass('was-validated');
        } else {
            form.addClass('was-validated');
        }
    });

    // Interactive validation
    const inputs = form.find('input, select, textarea');
    inputs.on('input', function() {
        const input = $(this);
        if (input[0].checkValidity()) {
            input.removeClass('is-invalid').addClass('is-valid');
        } else {
            input.removeClass('is-valid').addClass('is-invalid');
        }
    });

    // Phone number validation
    const phoneInput = $('#phone');
    phoneInput.on('input', function() {
        const phonePattern = /^[0-9]{10}$/;
        if (!phonePattern.test(phoneInput.val())) {
            phoneInput[0].setCustomValidity("Invalid phone number.");
            phoneInput.addClass('is-invalid').removeClass('is-valid');
        } else {
            phoneInput[0].setCustomValidity("");
            phoneInput.removeClass('is-invalid').addClass('is-valid');
        }
    });
});
