$(document).ready(function () {
    var mob_moving = false;
    $(window).scroll(function() {
        var pos_x = $(window).scrollTop()/10;

        $('#classes-row-first').css('left', (pos_x-700)+'px');
        $('#classes-row-second').css('left', (-pos_x-700)+'px');

        if(!mob_moving && $('.block-mod-description-title').offset().top - 50 < pos_x*10){
            mob_moving = true;
            $('#block-mod-description-text').animate({'height': '100px'}, 500);
        }

        var block_fides = $('.block-fide');
        var h = screen.height;
        console.log(h);
        for(var i=0; i<block_fides.length; i++){
            var block_fide = block_fides.get(i);
            if($(block_fide).offset().top < pos_x*10+h){
                $(block_fide).animate({'opacity': 1}, 1000);
            }
        }
    });
})