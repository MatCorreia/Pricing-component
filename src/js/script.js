$('#switch').click(function() {
    if($('.first').hasClass('d-block') === true) {
        $('.toggle').removeClass('toggle').addClass('toggle2');
        $('.first').removeClass('d-block').addClass('d-none');
        $('.second').removeClass('d-none').addClass('d-block');
    } else if($('.display-4').hasClass('d-none') === true) {
        $('.toggle2').removeClass('toggle2').addClass('toggle');
        $('.first').removeClass('d-none').addClass('d-block');
        $('.second').removeClass('d-block').addClass('d-none');
    }
});