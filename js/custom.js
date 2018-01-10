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

    

    $('.icon-menu').click(function() {

    $('body').css('overflow','hidden');

    });

    
 
    $('.icon-menu').click(function() { /* выбираем класс icon-menu и
               добавляем метод click с функцией, вызываемой при клике */
 
        $('.menu').animate({ //выбираем класс menu и метод animate
 
            left: '0px' /* теперь при клике по иконке, меню, скрытое за
               левой границей на 285px, изменит свое положение на 0px и станет видимым */

        }, 200); //скорость движения меню в мс
         

    });

    


 
 
/* Закрытие меню */

    $('.icon-close').click(function() {

    $('body').css('overflow','scroll');

    });

    $('.shadow').click(function() {

    $('body').css('overflow','scroll');

    });


 
    $('.icon-close').click(function() { //выбираем класс icon-close и метод click
 
        $('.menu').animate({ //выбираем класс menu и метод animate
 
            left: '-285px' /* при клике на крестик меню вернется назад в свое
               положение и скроется */
 
        }, 200); //скорость движения меню в мс
         
    $('body').animate({ //выбираем тег body и метод animate
 
            left: '0px' //а содержимое страницы снова вернется в положение 0px
 
        }, 200); //скорость движения меню в мс


    });

    


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

 $(".icon-menu").click(function () {
     $('.shadow').toggleClass("block");
   });

 $(".icon-close").click(function () {
     $('.shadow').toggleClass("block");
   });

 $(".shadow").click(function () {
     $('.shadow').toggleClass("block");
   });



function l_image (a,b) {
document.example_img.src=a;
document.getElementById("link").href=b.href;
}


function change_visibility (block_4_close, block_4_open) {
   $(document).ready(function(){
       $('#'+block_4_close).css('display','none');
       $('#'+block_4_open).css('display','');
       return false;
   });
}

