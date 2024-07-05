(function($) {
    $(document).ready(function() {

        $('.devices').on('click', 'a', function(event) {
            event.preventDefault();
            var device_selected = $(this).attr('href').replace('#', '');
            $('.device').removeClass().addClass('device device-' + device_selected);
        });
    });
})(jQuery);
