$(document).ready(function () {
    $('div #glass').css('opacity', '0').animate({'opacity': '1'}, 2000)
    $('div #avocado').css('opacity', '0').animate({'opacity': '1'}, 2000)
    function firstanimation() {
        $('div #glass').animate({'top': '-440px'}, 2000)
        $('div #glass').animate({'top': '-420px'}, 2000)
        $('div #avocado').animate({'top': '-290px'}, 2000)
        $('div #avocado').animate({'top': '-270px'}, 2000)
        $('div #apple').animate({'top': '0px'}, 2000)
        $('div #apple').animate({'top': '20px'}, 2000)
        $('div #gantelya').animate({'top': '650px'}, 2000)
        $('div #gantelya').animate({'top': '670px'}, 2000)
        $('div #cigarettes').animate({'top': '480px'}, 2000)
        $('div #cigarettes').animate({'top': '500px'}, 2000)
        $('div #beer').animate({'top': '43px'}, 2000)
        $('div #beer').animate({'top': '63px'}, 2000)
    }
    firstanimation()
    setInterval(() => {
        firstanimation()
    }, 2000);
    $('#sportlink').click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".sport #text_desc").offset().top+90
        }, 2000);
    })
    $('#privichkilink').click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".privichki #text_desc").offset().top-300
        }, 2000);
    })
    $('#mainlink').click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".hlt div.description").offset().top-220
        }, 2000);
    })
    $('#pitanielink').click(function() {
        $([document.documentElement, document.body]).animate({
            scrollTop: $(".pitanie #text_desc").offset().top-200
        }, 2000);
    })
});