
$( document ).ready(function() {
    function alertInfo(text) {
        $('.alert').show().text(text);
    }
    $('.phone_mask').mask("+7(999)999-9999");

    $('#open__modal').click(function () {
        $('.form_call').toggleClass('active');
        $('.overlay').toggleClass('active');
        $('body').toggleClass('no-scroll');
    })
    $('.close_modal').click(function (){
        $('.overlay').toggleClass('active');
        $('.form_call').toggleClass('active');
        $('body').toggleClass('no-scroll');
    })
    $('.overlay').click(function () {
        $('.form_call').toggleClass('active');
        $(this).toggleClass('active');
        $('body').toggleClass('no-scroll');

    })

    $('#step-go').click(function () {
        let phone = $('.phone_mask').val();
        if (phone.length === 15) {
            $('.step-1').removeClass('active');
            $('.step-2').addClass('active');
            $('.alert').hide();
            $('#phone').text(phone);
        }
        else {
            alertInfo('Номер телефона указан неверно!')
        }
    })

    $('#step-prev').click(function () {
        $('.step-2').removeClass('active');
        $('.step-1').addClass('active');
    })
});