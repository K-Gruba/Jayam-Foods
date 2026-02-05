$(document).ready(function () {
    $('a.nav-link').on('click', function (e) {
        e.preventDefault();
        const target = $(this).attr('href');

        $('html, body').animate({
        scrollTop: $(target).offset().top - 70
        }, 500);
    });
    
    // Smooth reveal for bento cards
    $('.bento-card').hover(
        function() { $(this).find('.bento-glass-info').addClass('shadow-lg'); },
        function() { $(this).find('.bento-glass-info').removeClass('shadow-lg'); }
    );
    
    // Smooth scroll for nav links
    $('a.nav-link').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 80
            }, 800);
        }
    });

});
