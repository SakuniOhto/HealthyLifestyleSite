$(document).ready(async function () {
    const header = $('.header')
    if ($(this).scrollTop() > 1) {
        header.addClass('header__active')
    } else {
        header.removeClass('header__active')
    }
    $(window).scroll(function () {
        if ($(this).scrollTop() > 1) {
            header.addClass('header__active')
        } else {
            header.removeClass('header__active')
        }
    }
    )
    $('.hygiene__images img').hover(function() {
        $(this).animate({'border-radius': '20'})
    }, function() {
        $(this).animate({'border-radius': '108.5'})
    }
    )
    var rotation = 0;
    var speed = 1; // начальная скорость вращения

    function rotateEllipse() {
        $(".intro__path-ellipse").css({
            transform: "rotate(" + rotation + "deg)"
        });

        rotation += 5 

        setTimeout(rotateEllipse, 10); // повторяем вращение каждые 10 миллисекунд
    }

    rotateEllipse();
    $('.juice__pink').css({ top: 450 })
    $('.juice__green').css({ top: 450 })
    $('.juice__orange').css({ top: 450 })
    $('.juice__orange').animate({ top: 0 }, { duration: 1300 })
    await new Promise(r => setTimeout(r, 1300));
    $('.juice__pink').animate({ top: 0 }, { duration: 1300 })
    $('.juice__green').animate({ top: 0 }, { duration: 1300 })
    await new Promise(r => setTimeout(r, 1300));
    function waving() {
        $('.pears').animate({top: '-20'}, 1600)
        $('.pears').animate({top: '20'}, 1600)
        $('.peach').animate({top: '20'}, 1600)
        $('.peach').animate({top: '-20'}, 1600)
        $('.orange').animate({top: '-20'}, 1600)
        $('.orange').animate({top: '20'}, 1600)
        $('.strawberry').animate({top: '20'}, 1600)
        $('.strawberry').animate({top: '-20'}, 1600)
        setTimeout(waving, 3200);
    }
    waving()
    

})