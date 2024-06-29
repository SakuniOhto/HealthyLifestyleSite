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
    })
    const page = $('html, body')
    $('header__link')
    var rotation = 0;
    var speed = 1; // начальная скорость вращения
    $('.header__link').click(function () {
        page.on("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove", function () {
            page.stop();
        });
        switch ($(this).text()) {
            case 'Главная':
                page.animate({ scrollTop: $(this).position().top - 50 }, 1600, function () {
                    page.off("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove");
                })
                break;
            case 'Питание':
                page.animate({ scrollTop: $('.feed').position().top - 30 }, 1600, function () {
                    page.off("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove");
                })
                break;
            case 'Спорт':
                page.animate({ scrollTop: $('.sport').position().top - 30 }, 1600, function () {
                    page.off("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove");
                })
                break;
            case 'Гигиена':
                page.animate({ scrollTop: $('.hygiene').position().top + 80}, 1600, function () {
                    page.off("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove");
                })
                break;
            case 'Режим дня':
                page.animate({ scrollTop: $('.cycle').position().top + 70 }, 1600, function () {
                    page.off("scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove");
                })
                break;
        }
    })
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
        $('.pears').animate({ top: '-20' }, 1600)
        $('.pears').animate({ top: '20' }, 1600)
        $('.peach').animate({ top: '20' }, 1600)
        $('.peach').animate({ top: '-20' }, 1600)
        $('.orange').animate({ top: '-20' }, 1600)
        $('.orange').animate({ top: '20' }, 1600)
        $('.strawberry').animate({ top: '20' }, 1600)
        $('.strawberry').animate({ top: '-20' }, 1600)
        setTimeout(waving, 3200);
    }
    waving()


})
