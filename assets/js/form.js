$(document).ready(() => {
    // Formulários que precisam de validation
   $(document).on('submit', '.needs-validation', function(event) {
        console.log('submit');
        if (!this.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }

        $(this).addClass('was-validated');
    });
});