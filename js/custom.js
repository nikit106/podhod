
function l_image (a) {
    document.example_img.src=a
}




$(function(){

	$('.tabs a').click(function(){
		$(this).parents('.tab-wrap').find('.tab-cont').addClass('hide');
		$(this).parents().siblings().removeClass('active');
		var id = $(this).attr('href');
		$(id).removeClass('hide');
		$(this).parent().addClass('active');
		return false
	});

	$('.banner-slider').slick({
		arrows: false,
		dots: true,
		autoplay: true,
	});

    $('.index-banner-slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
    });




	$(document).ready(function(){
		var touch = $('#touch-menu');
		var menu = $('.menu__link');

		$(touch).on('click', function(e){
			e.preventDefault();
			menu.slideToggle();
		});

		$(window).resize(function(){
			var wid = $(window).width();
			if ( wid > 760 && menu.is(':hidden')) {
				menu.removeAttr('style');
			}
		});
	});



/* Открытие меню */
 
var main = function() { //главная функция

    
    /* исчезание скролла */

    $('.icon-menu').click(function() {

    $('body').css('overflow-x','hidden');
    $('body').css('overflow','hidden');
    $('body').css('position','relative');

    });


    /* появление меню */
 
    $('.icon-menu').click(function() { /* выбираем класс icon-menu и
               добавляем метод click с функцией, вызываемой при клике */
 
        $('.menu').animate({ //выбираем класс menu и метод animate
 
            left: '0px' /* теперь при клике по иконке, меню, скрытое за
               левой границей на 285px, изменит свое положение на 0px и станет видимым */

        }, 200); //скорость движения меню в мс
         
       
    });

    


 
 
/* Закрытие меню */


    /* появление скролла после закрытия мобильного меню */

    $('.icon-close').click(function() {

    $('body').css('overflow','scroll');
    $('body').css('overflow-x','scroll');
    $('body').css('position','relative');


    });

    $('.shadow').click(function() {

    $('body').css('overflow','scroll');
    $('body').css('overflow-x','scroll');
    $('body').css('position','relative');

    });


  /* Закрытие меню через крест */

    $('.icon-close').click(function() { //выбираем класс icon-close и метод click
 
        $('.menu').animate({ //выбираем класс menu и метод animate
 
            left: '-285px' /* при клике на крестик меню вернется назад в свое
               положение и скроется */
 
        }, 200); //скорость движения меню в мс
         
    $('body').animate({ //выбираем тег body и метод animate
 
            left: '0px' //а содержимое страницы снова вернется в положение 0px
 
        }, 200); //скорость движения меню в мс


    });

    
   /* Закрытие меню через тень */

    $('.shadow').click(function() { //выбираем класс icon-close и метод click
 
        $('.menu').animate({ //выбираем класс menu и метод animate
 
            left: '-285px' /* при клике на крестик меню вернется назад в свое
               положение и скроется */
 
        }, 200); //скорость движения меню в мс
         
    $('body').animate({ //выбираем тег body и метод animate
 
            left: '0px' //а содержимое страницы снова вернется в положение 0px
 
        }, 200); //скорость движения меню в мс
    });

};

 
$(document).ready(main); /* как только страница полностью загрузится, будет
               вызвана функция main, отвечающая за работу меню */
});



/* Появление и исчезание тени при открытие и закрытие меню */

 $(".icon-menu").click(function () {
     $('.shadow').toggleClass("block");
   });

 $(".icon-close").click(function () {
     $('.shadow').toggleClass("block");
   });

 $(".shadow").click(function () {
     $('.shadow').toggleClass("block");
   });



    $('.circle-black').click(function() {

    $('.image-block-main ').css('background-image','url(img/cover3.jpg)');
    document.getElementById('href').href = 'cover-black.html';


    });

    $('.circle-orange').click(function() {

    $('.image-block-main ').css('background-image','url(img/cover1.jpg)');
    document.getElementById('href').href = 'cover.html';
    


    });

    $('.circle-dashed').click(function() {

    $('.image-block-main').css('background-image','url(img/cover2.jpg)');
    document.getElementById('href').href = 'cover-dashed.html';


    });

/* обводка кнопок при нажатии */


$('.color-block div.circle-black').click(function(){
    $('.color-block div').removeClass('active');
    $(this).addClass('active')
})
$('.color-block div.circle-orange').click(function(){
    $('.color-block div').removeClass('active');
    $(this).addClass('active')
})

$('.color-block div.circle-dashed').click(function(){
    $('.color-block div').removeClass('active');
    $(this).addClass('active')
})