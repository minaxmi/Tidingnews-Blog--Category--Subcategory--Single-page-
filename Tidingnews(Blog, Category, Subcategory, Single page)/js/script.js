jQuery(document).ready(function($) {
    /*Add class when scroll down*/
    $(window).scroll(function(event) {
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            $(".go-top").addClass("show");
        } else {
            $(".go-top").removeClass("show");
        }
    });
    /*Animation anchor*/
    $('a').click(function() {
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 2000);
    });

});

$('#monitor').html($(window).width());

$(window).resize(function() {
    var viewportWidth = $(window).width();
    $('#monitor').html(viewportWidth);
});


/*$(document).ready(function(){
  $('.dropdown-subcontent a.test').on("click", function(e){
    $(this).next('ul').toggle();
    e.stopPropagation();
    e.preventDefault();
  });
});*/