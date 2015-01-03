var main = function(){
    $('.login p').click(function(){
    $('.dropdown-menu').toggle();

    })

    $( "#accordion" ).accordion();

    $('.banner').unslider();
};


$(document).ready(main);
