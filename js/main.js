jQuery(document).on('ready', function() {
    var container = $('#bg-container');

    container
        .css('height', ($(window).height() + 100) + 'px');

    $(window).on('resize', function() {
      container.css('height', ($(window).height() + 100) + 'px');
    });
});