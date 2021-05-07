// use wow to make sure the animations will load at a certain position

new WOW({
    offset: 0,
    mobile: true,
    live: true
}).init();
var change = true;
var myscroll = 0;

var t2 = new TimelineMax({ paused: true });
t2.staggerFrom('#index .box2 .png', 3, { opacity: 0, 
    x: -100, y: -120, ease: Power4.easeOut }, 0.6)
t2.to(document.getElementById('turbulence2'), 
    6, { attr: { baseFrequency: '0 0' } }, 1)

var t3 = new TimelineMax({ paused: true });
t3.staggerFrom('#index .box3 .pngbox', 3, { opacity: 0,
    x: -100, y: -120, ease: Power4.easeOut }, 0.6)
t3.to(document.getElementById('turbulence3'), 
    6, { attr: { baseFrequency: '0 0' } }, 1)

var t4 = new TimelineMax({ paused: true });
t4.staggerFrom('#index .box4 .pngbox', 3, { opacity: 0, 
    x: -100, y: -120, ease: Power4.easeOut }, 0.6)
t4.to(document.getElementById('turbulence4'), 
    6, { attr: { baseFrequency: '0 0' } }, 1)

var t5 = new TimelineMax({ paused: true });
t5.staggerFrom('#index .box5 .pngbox', 3, { opacity: 0, 
    x: -100, y: -120, ease: Power4.easeOut }, 0.6)
t5.to(document.getElementById('turbulence5'), 
    6, { attr: { baseFrequency: '0 0' } }, 1)

var t6 = new TimelineMax({ paused: true });
t6.staggerFrom('#index .box6 .pngbox', 3, { opacity: 0,
    x: -100, y: -120, ease: Power4.easeOut }, 0.6)
t6.to(document.getElementById('turbulence6'), 
    6, { attr: { baseFrequency: '0 0' } }, 1)

$(window).scroll(function () {
    var height = $('.box').height();
    var scrollheight = $('body,html').scrollTop();
    if (change == true) {
        if (scrollheight >= (height * 6 - 400)) {
            $('#leftbar .line').eq(6).addClass('sure').siblings().removeClass('sure');
        } else if (scrollheight >= height * 5) {
            $('#leftbar .line').eq(5).addClass('sure').siblings().removeClass('sure');
            t6.play();
        } else if (scrollheight >= height * 4) {
            $('#leftbar .line').eq(4).addClass('sure').siblings().removeClass('sure');
            t5.play();
        } else if (scrollheight >= height * 3) {
            $('#leftbar .line').eq(3).addClass('sure').siblings().removeClass('sure');
            t4.play();
        } else if (scrollheight >= height * 2) {
            $('#leftbar .line').eq(2).addClass('sure').siblings().removeClass('sure');
            t3.play();
        } else if (scrollheight >= height * 1) {
            $('#leftbar .line').eq(1).addClass('sure').siblings().removeClass('sure');
            t2.play();
        } else if (scrollheight < height * 1) {
            $('#leftbar .line').eq(0).addClass('sure').siblings().removeClass('sure');
        }
    }

})
/* click to enter project page */
$(function () {
    /* page3 back */
    $('#page3 .backbtn').on('click', function () {
        change = true;
        console.log(myscroll)
        $('#index').fadeIn(500, function () {
            $('body,html').animate({ scrollTop: myscroll + 'px' }, 0);
        });
        $('#page3').fadeOut(); $('#leftbar').show();
        $('#turbulence3').attr('baseFrequency', '0.005 0.005')
        var t3 = new TimelineMax({ paused: true });
        t3.staggerFrom('#index .box3 .pngbox', 3, { opacity: 0, x: -100, y: -120, ease: Power4.easeOut }, 1.6)
        t3.to(document.getElementById('turbulence3'), 3, { attr: { baseFrequency: '0 0' } }, 3)
        t3.play(true, false);
    })
    /* page4 back */
    $('#page4 .backbtn').on('click', function () {
        change = true;
        $('#index').fadeIn(500, function () {
            $('body,html').animate({ scrollTop: myscroll + 'px' }, 0);
        });
        $('#page4').fadeOut(); $('#leftbar').show();
        $('#turbulence4').attr('baseFrequency', '0.005 0.005')
        var t4 = new TimelineMax({ paused: true });
        t4.staggerFrom('#index .box4 .pngbox', 3, { opacity: 0, x: -100, y: -120, ease: Power4.easeOut }, 1.6)
        t4.to(document.getElementById('turbulence4'), 3, { attr: { baseFrequency: '0 0' } }, 3)
        t4.play(true, false);
    })
    /* page5 back */
    $('#page5 .backbtn').on('click', function () {
        change = true;
        $('#index').fadeIn(500, function () {
            $('body,html').animate({ scrollTop: myscroll + 'px' }, 0);
        });
        $('#page5').fadeOut(); $('#leftbar').show();
        $('#turbulence5').attr('baseFrequency', '0.005 0.005')
        var t5 = new TimelineMax({ paused: true });
        t5.staggerFrom('#index .box5 .pngbox', 3, { opacity: 0, x: -100, y: -120, ease: Power4.easeOut }, 1.6)
        t5.to(document.getElementById('turbulence5'), 3, { attr: { baseFrequency: '0 0' } }, 3)
        t5.play(true, false);
    })
    /* page6 back */
    $('#page6 .backbtn').on('click', function () {
        change = true;
        $('#index').fadeIn(500, function () {
            $('body,html').animate({ scrollTop: myscroll + 'px' }, 0);
        });
        $('#page6').fadeOut(); $('#leftbar').show();
        $('#turbulence6').attr('baseFrequency', '0.005 0.005')
        var t6 = new TimelineMax({ paused: true });
        t6.staggerFrom('#index .box6 .pngbox', 3, { opacity: 0, x: -100, y: -120, ease: Power4.easeOut }, 1.6)
        t6.to(document.getElementById('turbulence6'), 3, { attr: { baseFrequency: '0 0' } }, 3)
        t6.play(true, false);
    })
    /* render page */
    $('.page3btn').on('click', function () {
        change = false;
        myscroll = $('body,html').scrollTop();
        $('#page3').addClass('animated bounceIn').show();
        $('#page3').animate({ scrollTop: '0px' }, 0);
        $('#index').hide();
        setTimeout(function () {
            $('#page3').removeClass('animated bounceIn')
        }, 3000)
    })
    $('.page4btn').on('click', function () {
        change = false;
        myscroll = $('body,html').scrollTop();
        $('#page4').addClass('animated bounceIn').show();
        $('#page4').animate({ scrollTop: '0px' }, 0);
        $('#index').hide();
        setTimeout(function () {
            $('#page4').removeClass('animated bounceIn')
        }, 3000)
    })
    $('.page5btn').on('click', function () {
        change = false;
        myscroll = $('body,html').scrollTop();
        $('#page5').addClass('animated bounceIn').show();
        $('#page5').animate({ scrollTop: '0px' }, 0);
        $('#index').hide();
        setTimeout(function () {
            $('#page5').removeClass('animated bounceIn')
        }, 3000)
    })
    $('.page6btn').on('click', function () {
        change = false;
        myscroll = $('body,html').scrollTop();
        $('#page6').addClass('animated bounceIn').show();
        $('#page6').animate({ scrollTop: '0px' }, 0);
        $('#index').hide();
        setTimeout(function () {
            $('#page6').removeClass('animated bounceIn')
        }, 3000)
    })

    $('.rightpng img').on('mouseenter', function () {
        $(this).hide();
        $(this).fadeIn();
    })
    $('.pngbox img').on('mouseenter', function () {
        $(this).hide();
        $(this).fadeIn();
    })
})