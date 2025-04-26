// script.js
$(document).ready(function() {
    // Filter functionality
    $('.filter-button').click(function() {
        var filterValue = $(this).attr('data-filter');

        if (filterValue === 'all') {
            $('.filter').fadeIn();
        } else {
            $('.filter').hide();
            $('.' + filterValue).fadeIn();
        }
    });

    // Optional: Add slide effect on image hover
    $('.gallery-item img').hover(
        function() {
            $(this).stop().fadeTo(200, 0.7);
        },
        function() {
            $(this).stop().fadeTo(200, 1);
        }
    );
});