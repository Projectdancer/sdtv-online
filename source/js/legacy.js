/* $(document).ready(function () {
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

$('.block-mod-description-menu-link').click(function(){
    $('.block-mod-description-menu-link').attr('class', 'block-mod-description-menu-link');
    $(this).attr('class', 'block-mod-description-menu-link active');
})
var block_styles_left = 0;


function resize() {
    if($(window).width() <= 768){
        $('.block-style-item').width($(window).width());
        $('.block-styles').css('left', block_styles_left*$(window).width());
    }else{
        $('.block-style-item').width("");
    }
}
resize();
$(window).resize(function(){
    resize();
})

$('.block-style-left').click(function () {
    block_styles_left ++;
    if(block_styles_left > 0){
        block_styles_left = $('.block-style-item').length*-1+1;
    }
    $('.block-styles').animate({left: block_styles_left*$(window).width()}, 500);
})

$('.block-style-right').click(function () {
    block_styles_left --;
    var count = $('.block-style-item').length*-1+1;
    if(block_styles_left < count){
        block_styles_left = 0;
    }
    $('.block-styles').animate({left: block_styles_left*$(window).width()}, 500);
})
 */
