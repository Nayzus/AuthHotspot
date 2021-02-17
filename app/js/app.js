
$( document ).ready(function() {
    $('.phone_mask').mask("+7(999) 999-9999");

    $('#open__modal').click(function () {
        $('.form_call').toggleClass('active');
        $('.overlay').toggleClass('active');
    })
    $('.close_modal').click(function (){
        $('.overlay').toggleClass('active');
        $('.form_call').toggleClass('active');
    })
    $('.overlay').click(function () {
        $('.form_call').toggleClass('active');
        $(this).toggleClass('active');
    })

    $('#step-go').click(function () {
        $('.step-1').removeClass('active');
        $('.step-2').addClass('active');
    })

    $('#step-prev').click(function () {
        $('.step-2').removeClass('active');
        $('.step-1').addClass('active');
    })
});