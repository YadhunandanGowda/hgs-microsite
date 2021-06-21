
// common Script 

// setTimeout(function(){
//    gsap.to('#LoaderBack',1,{strokeWidth: '0'})
//    gsap.to('#Loader',1,{ visibility: "hidden", delay:1})
// }, 2000)
// setTimeout(function(){
//     gsap.to('.circleLoader',0.2,{opacity:0, visibility: 'hidden'})
//    gsap.to('#LoaderBack',1,{strokeWidth: '0', delay:0.2})
//    gsap.to('#Loader',1,{ visibility: "hidden", delay:1.2})
// }, 2000)

let tl = gsap.timeline({delay:1});

paceOptions = {
    ajax: true,
    document: true,
    eventLag: false
  };

  Pace.on('done', function() {
    $('#preloader').delay(500).fadeOut(800);
    $('.loader-sec').fadeOut(200);
    tl.from("#screen-1 .avatar", { duration: 1, x: 1800, ease: "power4.out", stagger: 0.2 });
    tl.to("#screen-1 .check-dot", { duration: 0.5, opacity: 1 }, '-=1.5');
    gsap.set("#screen-1 .window", { opacity: 1, x: 750 });
    gsap.set("#screen-1 .window .cloud", { x: -1050 });
    gsap.to("#screen-1 .window .cloud", 15, { x: -700, repeat: -1 });
  });


$('.hom-icn').on('click', function () {
    $('.hm-ext-popup').addClass('active');
})

$('.hm-ext-popup .optns a.resume').on('click', function () {
    $(this).parents('.hm-ext-popup').removeClass('active');
})

$('.hm-ext-popup .optns a.restart').on('click', function () {
    window.location.reload()
})

$(document).mouseup(function (e) {
    var container = $(".hm-ext-popup .optns");
    if (!container.is(e.target) && container.has(e.target).length === 0 && $('.hm-ext-popup').hasClass('active')) {
        container.parents('.hm-ext-popup').removeClass('active');
    }
});


// screen 1 script
let avatarNum = '';

gsap.set("#screen-1 .avatar", { opacity: 1 });
gsap.set("#screen-1", { opacity: 1 });

function screen1Click(avatarNum, a, b) {
    gsap.to("#screen-1 .start", 0.2, { opacity: 1, visibility: 'visible' });
    a.parents(".avatar-container").find(".avatar").each(function (index, item) {
        if ($(item).attr("data-active") == "active") {
            $(item).attr("data-active", "");
        }
    });

    a.attr("data-active", "active");
    gsap.to("#screen-1 .avatar-container .avatar-set .check-dot .green-ccl", 0.5, { opacity: 0 });
    gsap.to("#screen-1 .avatar-container .avatar-set .avatar", 0.5, { scale: 1, y: 0 });
    gsap.to("#screen-1 .avatar .shoulder", 0.5, { rotate: 0, x: 0, y: 0, transformOrigin: 'top' });
    gsap.to("#screen-1 .avatar .elbow", 0.5, { rotate: 0, x: 0, y: 0, transformOrigin: 'top' });
    gsap.to("#screen-1 .avatar .elbow .thumb", 0.5, { opacity: 0 });
    gsap.to($("#screen-1 .avatar").siblings('.popup'), 0.5, { opacity: 0, scale: 0, transformOrigin: "bottom left" });
    gsap.to(a, 0.5, { scale: 1.04, y: -24, ease: Back.easeOut });
    gsap.to(b, 0.5, { opacity: 1 });
    gsap.to($("#screen-1 .avatar-" + avatarNum).siblings('.popup'), 0.75, { opacity: 1, scale: 1, transformOrigin: "bottom left" });
    gsap.to("#screen-1 .avatar-" + avatarNum + " .shoulder", 0.75, { rotate: -10, transformOrigin: 'top' });
    gsap.to("#screen-1 .avatar-" + avatarNum + " .elbow", 0.75, { rotate: -100, x: 0, y: 8, transformOrigin: 'top' });
    gsap.to("#screen-1 .avatar-" + avatarNum + " .elbow .thumb", 0.75, { opacity: 1 });
}


$("#screen-1 .avatar-container .avatar-set .check-dot").on("click", function () {
    let child = $(this).children(".green-ccl");
    let sibl = $(this).siblings(".avatar");
    avatarNum = $(this).parents('.avatar-set').attr('data-avatar-num');


    screen1Click(avatarNum, sibl, child);
});

$("#screen-1 .avatar-container .avatar-set .avatar").on("click", function () {
    let sibl = $(this).siblings(".check-dot").children(".green-ccl");
    let $this = $(this);
    avatarNum = $(this).parents('.avatar-set').attr('data-avatar-num');

    screen1Click(avatarNum, $this, sibl);
});





$("#screen-1 .avatar-container .avatar-set .avatar").on("mouseenter", function () {
    if (!($(this).attr('data-active') || $(this).attr('data-active') == 'active')) {
        gsap.to($(this), 0.5, { scale: 1.04, y: -24, ease: Back.easeOut });
    }
}).on('mouseleave', function () {
    if (!($(this).attr('data-active') || $(this).attr('data-active') == 'active')) {
        gsap.to($(this), 0.5, { scale: 1, y: 0, ease: Back.easeOut });
    }
});

$('#screen-1 .start').on('click', function () {
    tl.to('#screen-1', { duration: 2, left: '-100vw', ease: 'power4.out' });
    tl.to('#screen-2', { duration: 2, left: '0vw', ease: 'power4.out' }, '-=2');
    screen2();
});


gsap.to('.avatar-head .eye, .rec-head .eye', 0, { scaleY: 1 });
gsap.to('#screen-3 .leaf', 2, { rotate: 5, transformOrigin: 'bottom', repeat: -1, yoyo: true, ease: "none", stagger: 0.2 });

let tl2 = gsap.timeline();
let tlManBlink = gsap.timeline();
let tlWomenBlink = gsap.timeline();

function manBlink() {
    tlManBlink.restart();
    gsap.delayedCall(3, manBlink);
}

function womenBlink() {
    tlWomenBlink.restart();
    gsap.delayedCall(4, womenBlink);
}
tlWomenBlink.from('#screen-2 .rec-head .eye', 0.3, { scaleY: 0.3, transformOrigin: "bottom", yoyo: true, ease: "power1.inOut" });
tlManBlink.from(".avatar .eye", 0.3, { scaleY: 0.3, transformOrigin: "bottom", yoyo: true, ease: "power1.inOut" });
gsap.delayedCall(3, manBlink);
gsap.delayedCall(4, womenBlink);

// screen 2 script
function screen2() {

    tl2.progress(0).clear();
    tl2.to('#screen-2 .popup', 0, { scale: 0, opacity: 1, x: 302, y: 190 });
    tl2.to('#screen-2 .hello-msg path', 0, { opacity: 0 });
    tl2.to('#screen-2 .show-pot .leaves .leaf', 0, { rotation: -3, x: -20 });
    tl2.to("#screen-2 .avatar", 0, { opacity: 0, visibility: 'hidden'});
    tl2.to("#screen-2 .avatar-" + avatarNum, 0, { opacity: 1, visibility: 'visible' });
    tl2.to('#screen-2 .rec-head .hair', 0, { rotate: 0 });
    // tl2.from('#screen-2 .avatar-head', 1, { rotate: 5, transformOrigin: "bottom", yoyo: true, ease: "power1.inOut", repeat: -1 });
    tl2.from('#screen-2 .rec-head .hair', 2, { rotate: 2, transformOrigin: "top left", yoyo: true, ease: "power1.inOut", repeat: -1 });
    tl2.to('#screen-2 .show-pot .leaves', 4, { rotation: 3, transformOrigin: 'bottom', yoyo: true, repeat: -1, ease: 'power1.inOut'},'-=2');
    tl2.to('#screen-2 .popup', 1, { scale: 1, transformOrigin: "bottom right", ease: 'power4.out', delay: 1 },'-=3');
    tl2.to('#screen-2 .hello-msg path', 0, { opacity: 1, stagger: 0.1 });
    tl2.to('#screen-2 .next', 1, { opacity: 1, visibility: 'visible' });
}

$('#screen-2 .back').on('click', function () {
    tl.to('#screen-2', { duration: 2, left: '100vw', ease: 'power4.out' });
    tl.to('#screen-1', { duration: 2, left: '0vw', ease: 'power4.out' }, '-=2');
})

$('#screen-2 .next').on('click', function () {
    tl.to('#screen-2', { duration: 2, left: '-100vw', ease: 'power4.out' });
    tl.to('#screen-3', { duration: 2, left: '0vw', ease: 'power4.out' }, '-=2');
    screen3()
})

let
E0 = Sine.easeInOut,
E1 = Sine.easeIn,
E2 = Sine.easeOut;

function screen3TrainerWalk(p1, p2) {
    let tlm = gsap.timeline({ repeat: 2 })
        .add("l1", 0).add("l2", 0.25).add("l3", 0.5).add("l4", 0.75).add("l5", 1)
        .to(p1, 0.5, { rotation: -8, ease: E0 }, 'l1')
        .to(p1, 0.25, { rotation: 3, ease: E1 }, 'l3')
        .to(p1 + ' .lower', 0.25, { rotation: -10, ease: E0, y: 5, x: -5 }, 'l2')
        .to(p1 + ' .lower', 0.25, { rotation: -20, ease: E1, y: 3, x: -3 }, 'l3')
        .to(p1 + ' .lower', 0.25, { rotation: 0, ease: E2, y: 0, x: 0 }, 'l4')
        .to(p2, 0.5, { rotation: 15, ease: E0 }, 'l1')
        .to(p2, 0.5, { rotation: 0, ease: E0 }, 'l3')
        .to(p2 + ' .elbow', 0.5, { rotation: 15, ease: E0, x: 10, transformOrigin: 'top' }, 'l1')
        .to(p2 + ' .elbow', 0.5, { rotation: 0, ease: E0, x: 0, transformOrigin: 'top' }, 'l3');
    return tlm;
}

let MTl = gsap.timeline();
let tl3 = gsap.timeline();
let QuestTl3 = gsap.timeline();

function screen3() {

        tl3.progress(0).clear();
        tl3.to("#screen-2 .avatar", 0, { opacity: 0, visibility: 'hidden'});
        tl3.to("#screen-3 .avatar-" + avatarNum, 0, { opacity: 1, visibility: 'visible' });
        tl3.to('#screen-3 .right-popup .letters path , #screen-3 .congrats-popup .letters path , #screen-3 .wrong-popup .letters path , #screen-3 .wel-popup .letters path',0, { opacity: 0 });
        tl3.to('#screen-3 .trainer-right-leg , .trainer-left-leg', 0, { rotation: 3 });
        tl3.to('#screen-3 .wel-popup', 0, { scale: 0, x: 370, y: 200 });
        tl3.to('#screen-3 .congrats-popup', 0, { scale: 0, x: 350, y: 220 });
        tl3.to('#screen-3 .ques-icon', 0, { opacity: 0, visibility: 'hidden' })
        tl3.to('#screen-3 .trainer-right-hand', 0, { rotate: 0, y: 0, x: 0 })
        tl3.to('#screen-3 .trainer-right-hand .elbow', 0, { rotate: 0, x: 0, y: 0 });
        tl3.to('#screen-3 .other-laptop .upper , #screen-3 .laptop .upper', 0, { scaleY: 0, opacity: 1, y: 80 });
        // tl3.to('#screen-3 .leaf', 0, { rotate: 0, transformOrigin: 'bottom' });
        tl3.to('#screen-3 .trainer', 0, { x: 500, opacity: 1 });
        // tl3.set('#screen-3 .eye', 0, { scaleY: 1 });
        // tl3.to('#screen-3 .leaf', 2, { rotate: 5, transformOrigin: 'bottom', repeat: -1, yoyo: true, ease: "none", stagger: 0.2 });
        tl3.to('#screen-3 .participant-3-hair', 3, { scale: 1.02, rotate: -5, repeat: -1, transformOrigin: 'top left', yoyo: true });


        MTl.progress(0).clear();
        MTl.add(screen3TrainerWalk('#screen-3 .trainer-right-leg', '#screen-3 .trainer-right-hand')).add(screen3TrainerWalk('#screen-3 .trainer-left-leg', '#screen-3 .trainer-left-hand'), 0.5)
        .to('#screen-3 .trainer', 3, { x: 0, ease: "none" },'-=3.5')
        .to('#screen-3 .trainer-head', 0.5, { rotate: -5, transformOrigin: 'bottom', yoyo: true, repeat: 6 },'-=3')
        .to('#screen-3 .trainer-right-leg , #screen-3 .trainer-left-leg', 0.5, { rotation: 0 })
        .to('#screen-3 .wel-popup', 1, { opacity: 1, scale: 1, transformOrigin: 'bottom right' }, '-=0.5')
        .to('#screen-3 .wel-popup .letters path', 0, { opacity: 1, stagger: 0.05 })
        .to('#screen-3 .ques-icon', 1, { opacity: 1, visibility: 'visible' })
        .to('#screen-3 .trainer-right-hand', 1, { rotate: 30, y: -10, x: 10, transformOrigin: 'top' }, '-=1')
        .to('#screen-3 .trainer-right-hand .elbow', 1, { rotate: 90, x: 50, y: 30, transformOrigin: 'top' }, '-=1');

    $('#screen-3 .ques-icon').on('click', function () {
        QuestTl3.progress(0).clear();
        gsap.set('#quest-sec .screen3-question1', { visibility: 'visible', left: '0%' });
        QuestTl3.to('#screen-3 .wel-popup', 1, { opacity: 0, scale: 1, transformOrigin: 'bottom right' })
            .to('#screen-3 .other-laptop .upper', 2, { scale: 1, transformOrigin: 'bottom', ease: "power2.out", stagger: 0.2 }, '-=1')
            .to("#screen-3 .avatar-" + avatarNum + " .laptop .upper", 2, { scale: 1, transformOrigin: 'bottom', ease: "power2.out", stagger: 0.2 }, '-=2')
            .to("#screen-3 .avatar-" + avatarNum + " .right-hand", { duration: 2, rotate: -10, ease: "power2.out" }, '-=2')
            .to("#screen-3 .avatar-" + avatarNum + " .right-hand .elbow", { duration: 2, rotate: -15, scaleX: 1, ease: "power2.out", y: 5 }, '-=2')
            .to("#screen-3 .avatar-" + avatarNum + " .right-hand", { duration: 2, rotate: 0, ease: "power2.out" })
            .to("#screen-3 .avatar-" + avatarNum + " .right-hand .elbow", { duration: 2, rotate: 0, scaleX: 0.9, ease: "power2.out", y: 0 }, '-=2')
            .to("#screen-3 .avatar-" + avatarNum + " .right-hand .elbow", { duration: 0.3, rotate: -3, repeat: -1, yoyo: true, ease: "power2.in", y: 0 })
            .to("#screen-3 .avatar-" + avatarNum + " .left-hand .elbow", { duration: 0.3, rotate: -3, repeat: -1, yoyo: true, ease: "power2.in", y: 0 })
            .to('#quest-sec', 1, { right: '-70vw', ease: 'power4.out' }, '-=4')
            .to('#screen-container', 1, { width: '70vw', ease: 'power4.out' }, '-=1')
            .to('#screen-3', { duration: 1, left: '-18vw', width: '130%', ease: 'power4.out' }, '-=1')
            .to('#screen-3 .ques-icon', 0.5, { opacity: 0, visibility: 'hidden' });
    });

    let ans1 = 'Customer Satisfaction';
    let ans2 = 'Request to hold, explain the reason and wait time';
    let answered1 = false;
    let answered2 = false;
    let poptl1 = gsap.timeline();
    let poptl2 = gsap.timeline();

    $('.screen3-question1 .option').on('click', function () {
        let wrngPopNum = Math.floor(Math.random() * 6) + 1;
        let num = $(this).attr('data-num');
        if (!answered1) {
            if ($(this).children('text').attr('data-name') == ans1) {
                gsap.to('.screen3-question1 .option .background', 0.5, { fill: "#e6e6e6" })
                gsap.to('.screen3-question1 .option text', 0.5, { fill: "#0e3e7c" })
                gsap.to('.screen3-question1 .option-' + num + ' .background', 0.5, { fill: '#739F2D' })
                gsap.to($(this).children('text'), 0.5, { fill: '#fff' })
                gsap.set('#screen-3 .right-popup', { y: 0, scale: 0, transformOrigin: 'bottom right' })
                poptl1.progress(0).clear();
                poptl1.to('#screen-3 .right-popup', 1, { scale: 1, opacity: 1 })
                poptl1.to('#screen-3 .right-popup .letters path', 0, { opacity: 1, stagger: 0.1 }, '-=0.5')
                poptl1.to('#screen-3 .right-popup', 1, { scale: 0, opacity: 0 }, '+=1')
                poptl1.to('#screen-3 .right-popup .letters path', 0, { opacity: 0 })
                answered1 = true;
                poptl1.to('#quest-sec .screen3-question1', 1, { opacity: 0, left: '30%' }, '-=3')
                poptl1.to('#quest-sec .screen3-question2', 1, { left: '0%', opacity: 1 }, '-=2')
            } else {
                gsap.to('.screen3-question1 .option .background', 0.5, { fill: "#e6e6e6" })
                gsap.to('.screen3-question1 .option text', 0.5, { fill: "#0e3e7c" })
                gsap.to('.screen3-question1 .option-' + num + ' .background', 0.5, { fill: 'red' })
                gsap.to($(this).children('text'), 0.5, { fill: '#fff' })
                gsap.set("#screen-3 .wrong-popup-" + wrngPopNum, { y: 0, scale: 0, transformOrigin: 'bottom right' })
                poptl1.progress(0).clear();
                poptl1.to("#screen-3 .wrong-popup-" + wrngPopNum, 1, { scale: 1, opacity: 1 })
                poptl1.to("#screen-3 .wrong-popup-" + wrngPopNum + " .letters path", 0, { opacity: 1, stagger: 0.1 }, '-=0.5')
                poptl1.to("#screen-3 .wrong-popup-" + wrngPopNum, 1, { scale: 0, opacity: 0 }, '+=1')
                poptl1.to("#screen-3 .wrong-popup-" + wrngPopNum + " .letters path", 0, { opacity: 0 })
            }
        }
    });


    $('.screen3-question2 .option').on('click', function () {
        let wrngPopNum = Math.floor(Math.random() * 6) + 1;
        let num = $(this).attr('data-num');
        if (!answered2) {
            if ($(this).children('text').attr('data-name') == ans2) {
                gsap.to('.screen3-question2 .option .background', 0.5, { fill: "#e6e6e6" })
                gsap.to('.screen3-question2 .option text', 0.5, { fill: "#0e3e7c" })
                gsap.to('.screen3-question2 .option-' + num + ' .background', 0.5, { fill: '#739F2D' })
                gsap.to($(this).children('text'), 0.5, { fill: '#fff' })
                gsap.set('#screen-3 .right-popup', { y: 0, scale: 0, transformOrigin: 'bottom right' })
                poptl2.progress(0).clear();
                poptl2.to('#screen-3 .right-popup', 1, { scale: 1, opacity: 1 })
                poptl2.to('#screen-3 .right-popup .letters path', 0, { opacity: 1, stagger: 0.1 }, '-=0.5')
                poptl2.to('#screen-3 .right-popup', 1, { scale: 0, opacity: 0 }, '+=1')
                poptl2.to('#screen-3 .right-popup .letters path', 0, { opacity: 0 })
                poptl2.to('#quest-sec', 1, { right: '-100vw', ease: 'power4.out', delay: 0.5 })
                poptl2.to(' #screen-container', 1, { width: '100vw', ease: 'power4.out' }, '-=1')
                poptl2.to('#screen-3', { duration: 1, left: '0vw', width: '100%', ease: 'power4.out' }, '-=1')
                poptl2.to('#quest-sec .screen3-question1', 1, { opacity: 1, left: '0%' }, '-=1')
                poptl2.to('#quest-sec .screen3-question2', 1, { left: '30%', opacity: 0 }, '-=1')
                poptl2.to('.calnder-pp', 1, {
                    opacity: 1, visibility: 'visible', onComplete: function () {
                        $('.calnder-pp .icon').addClass('calendar');
                        gsap.to($('.calnder-pp .ttll'), 0.2, { opacity: 1 })
                        setTimeout(() => {
                            $('.calnder-pp .icon').removeClass('calendar');
                        }, 3000);
                    }
                })
                poptl2.to('.calnder-pp', 1, { opacity: 0, visibility: 'hidden' }, '+=5')
                poptl2.to('#screen-3 .congrats-popup', 1, { opacity: 1, scale: 1, transformOrigin: 'bottom right' })
                poptl2.to('#screen-3 .congrats-popup .letters path', 0, { opacity: 1, stagger: 0.05 })
                answered2 = true;
                poptl2.to('#screen-3 .next', 1, { opacity: 1, visibility: 'visible' });
            } else {
                gsap.to('.screen3-question2 .option .background', 0.5, { fill: "#e6e6e6" })
                gsap.to('.screen3-question2 .option text', 0.5, { fill: "#0e3e7c" })
                gsap.to('.screen3-question2 .option-' + num + ' .background', 0.5, { fill: 'red' })
                gsap.to($(this).children('text'), 0.5, { fill: '#fff' })
                gsap.set("#screen-3 .wrong-popup-" + wrngPopNum, { y: 0, scale: 0, transformOrigin: 'bottom right' })
                poptl2.progress(0).clear();
                poptl2.to("#screen-3 .wrong-popup-" + wrngPopNum, 1, { scale: 1, opacity: 1 })
                poptl2.to("#screen-3 .wrong-popup-" + wrngPopNum + " .letters path", 0, { opacity: 1, stagger: 0.1 }, '-=0.5')
                poptl2.to("#screen-3 .wrong-popup-" + wrngPopNum, 1, { scale: 0, opacity: 0 }, '+=1')
                poptl1.to("#screen-3 .wrong-popup-" + wrngPopNum + " .letters path", 0, { opacity: 0 })
            }
        }
    })
}


$('#screen-3 .back').on('click', function () {
    tl.to('#screen-2', { duration: 2, left: '0vw', ease: 'power4.out' });
    tl.to('#screen-3', { duration: 2, left: '100vw', ease: 'power4.out' }, '-=2');
    screen2()
})

$('#screen-3 .next').on('click', function () {
    tl.to('#screen-3', { duration: 2, left: '-100vw', width: '100%', ease: 'power4.out' });
    tl.to('#screen-4', { duration: 2, left: '0vw', ease: 'power4.out' }, '-=2');
    gsap.to('.screen-container', 1, { background: '#92AADD' });
    screen4();
})

function screen4() {
    let s4tl = gsap.timeline({ delay: 1 });
    let btnBnc = gsap.timeline();
    // let avatarNum  = 'five';
    gsap.to("#screen-4 .avatar-"+avatarNum, 0, { opacity:1 , visibility:'visible'});
    gsap.set('#screen-4 .emp-lptp-ln', { scaleX: 0 });
    gsap.to('#screen-4 .emp-lptp-ln', 2, { scaleX: 1, stagger: 2, repeat: -1, transformOrigin: 'left' });
    gsap.to('#screen-4 .rth-emp-hnd', 0.5, { rotation: -2, yoyo: true, repeat: -1, transformOrigin: 'bottom right' });
    gsap.to('#screen-4 .lft-emp-hnd', 0.5, { rotation: -3, yoyo: true, repeat: -1 });
    gsap.to('#screen-4 .show-pot .leaf', 3, { rotation: 3, transformOrigin: 'bottom', yoyo: true, repeat: -1, ease: 'power1.inOut', stagger: 0.4 });
    // gsap.from('#screen-4 .avatar-head', 3, {rotate: 5, transformOrigin: "bottom", yoyo: true, ease: "power1.inOut", repeat: -1 });
    s4tl.to('#screen-4 .call-dot', 0.3, { opacity: 1, stagger: 0.3 })
    s4tl.to('#screen-4 .caller', 1, { opacity: 1 }, '+=0.1')
    s4tl.to('#screen-4 .cal-btn-sec', 1, { opacity: 1, visibility: 'visible' })
    btnBnc.to('#screen-4 .call-btn', 1, { y: -5, ease: 'bounce.in', repeat: -1, yoyo: true })
    btnBnc.to('#screen-4 .incm-cl .cl-dts path', 0.5, { opacity: 1, repeat: -1, stagger: 0.5 })

    
let tlManBlink = new TimelineMax({});
tlManBlink.from("#screen-4 .avatar-"+avatarNum+" .eye", 0.3, { scaleY: 0.3, transformOrigin: "bottom", yoyo: true, ease: "power1.inOut"});

function manBlink() {
    tlManBlink.restart();
    TweenLite.delayedCall(3, manBlink);
}
manBlink();


    $('#screen-4 .call-btn').on('click', function () {
        s4tl.to('#screen4-quest-sec', 1, { right: '0vw', ease: 'power4.out' })
        s4tl.to('#screen-container', 1, { width: '70vw', ease: 'power4.out' }, '-=1')
        s4tl.to('#screen-container #screen-4', 1, { width: '128%', left: '-28%', ease: 'power4.out' }, '-=1')
        s4tl.to("#screen-4 .cal-btn-sec", 1, { opacity: 0, visibility: 'hidden' })
        s4tl.to('#screen4-quest-sec', 1, { visibility: "visible" }, '-=1')
        s4tl.to('#screen4-quest-sec .chat-box .sec-1', 0, { display: 'block' })
    });

    function s4QuestAns(ans, imgSrc, $this, sec){
        if ($this.text() == ans) {
            $('#screen4-quest-sec .notfcn .msg img').attr('src', imgSrc);
            s4tl.set($this, { background: '#28a745' },'+=0.0.3')
            s4tl.to('#screen4-quest-sec .notfcn .msg', 0.5, { top: 0, ease: 'back.out' })
            s4tl.to($this, 0, {
                background: 'transparent', onComplete: function () {
                    $this.siblings('h4').css('display', 'none');
                    $this.parents(sec).removeClass('clickable');
                    $this.siblings('.incorrect').css('display', 'none');
                }
            }, '+=2')
            s4tl.to('#screen4-quest-sec .notfcn .msg', 0.5, { top: -300, ease: 'back.in' })
        } else {
            $('#screen4-quest-sec .notfcn .msg img').attr('src', './svg/bst-rspns.svg');
            s4tl.set($this, { background: '#ffc107' },'+=0.0.3')
            s4tl.to('#screen4-quest-sec .notfcn .msg', 0.5, { top: 0, ease: 'back.out' })
            s4tl.to($this, 0, { background: 'transparent' }, '+=3')
            s4tl.to($this.siblings('.correct'), 0.5, {
                background: '#28a745', repeat: 5, yoyo: true, onComplete: function () {
                    $this.siblings('h4').css('display', 'none');
                    $this.parents(sec).children('.incorrect').css('display', 'none');
                    $this.parents(sec).removeClass('clickable');
                    $this.siblings('.correct').css("background", 'transparent');
                }
            }, '-=3')
            s4tl.to('#screen4-quest-sec .notfcn .msg', 0.5, { top: -300, ease: 'back.in' })
        }
    }
    let sec1Ans = {
        ans: 'Good morning, sir. How can I be of assistance to you today?',
        answered: false
    }
    let sec4Ans = {
        ans: 'We should be able to solve the problem together. Please clear the cookies and restart your modem. I can guide you through the process if you need help.',
        answered: false
    }
    let sec7Ans = {
        ans: 'Have a good day sir! Thanks for calling HGS',
        answered: false
    }

    $('#screen4-quest-sec .chat-box .sec-1 .optn').on('click', function () {
        let $this = $(this);
        var objDiv = document.getElementById("screen4-quest-sec");
        if (!sec1Ans.answered) {
            s4QuestAns(sec1Ans.ans, './svg/kp-gng.svg', $this, '.sec-1')
            s4tl.to('#screen4-quest-sec .chat-box .sec-2', 0, { display: 'block' }, '+=1')
            s4tl.to('#screen4-quest-sec .chat-box .sec-3', 0, { display: 'block' }, '+=1')
            s4tl.to('#screen4-quest-sec', 1, { scrollTop: objDiv.scrollHeight })
            sec1Ans.answered = true;
        }
    })


    $('#screen4-quest-sec .chat-box .sec-3 .optn').on('click', function () {
        let $this = $(this);
        var objDiv = document.getElementById("screen4-quest-sec");
        if (!sec4Ans.answered) {
            s4QuestAns(sec4Ans.ans, './svg/kp-gng.svg', $this, '.sec-3')
            s4tl.to('#screen4-quest-sec .chat-box .sec-4', 0, { display: 'block' }, '+=1')
            s4tl.to('#screen4-quest-sec', 1, { scrollTop: objDiv.scrollHeight })
            s4tl.to('#screen4-quest-sec .chat-box .sec-5', 0, { display: 'block' }, '+=1')
            s4tl.to('#screen4-quest-sec', 1, { scrollTop: objDiv.scrollHeight })
            s4tl.to('#screen4-quest-sec .chat-box .sec-6', 0, { display: 'block' }, '+=1')
            s4tl.to('#screen4-quest-sec', 1, { scrollTop: objDiv.scrollHeight })
            s4tl.to('#screen4-quest-sec .chat-box .sec-7', 0, { display: 'block' }, '+=1')
            s4tl.to('#screen4-quest-sec', 1, { scrollTop: objDiv.scrollHeight })
            sec4Ans.answered = true;
        }
    })

    $('#screen4-quest-sec .chat-box .sec-7 .optn').on('click', function () {
        let $this = $(this);
        var objDiv = document.getElementById("screen4-quest-sec");
        gsap.set('#screen-4 .str-gry-pp .bg-strs', { scale: 0, transformOrigin: 'bottom' })
        if (!sec7Ans.answered) {
            s4QuestAns(sec7Ans.ans, './svg/pro-gng.svg', $this, '.sec-7')
            s4tl.to('#screen4-quest-sec', 1, { right: '-100vw', ease: 'power4.out' }, '+=1')
            s4tl.to('#screen-container', 1, { width: '100vw', ease: 'power4.out' }, '-=1')
            s4tl.to('#screen-container #screen-4', 1, { width: '100%', left: '0%', ease: 'power4.out' }, '-=1')
            s4tl.to('#screen4-quest-sec', 1, { scrollTop: objDiv.scrollHeight })
            sec7Ans.answered = true;
            s4tl.to('#screen-4 .caller', 1, { opacity: 0 })
            s4tl.to('#screen-4 .call-dot', 0.3, { opacity: 0, stagger: -0.3 })
            s4tl.to('#screen-4 .str-gry-pp', 0.5, { opacity: 1, visibility: 'visible' })
            s4tl.to('#screen-4 .str-gry-pp .bg-strs', 0.2, { opacity: 1, scale: 1, ease: 'power4.out', stagger: 0.2 })
            s4tl.to('#screen-4 .str-gry-pp .sml-strs', 0.3, { opacity: 1, ease: 'power4.out' })
            s4tl.to('#screen-4 .str-grt-jb .ltrs path', 0.2, { opacity: 1 })
            s4tl.to('#screen-4 .str-gry-pp', 0.5, { opacity: 0, visibility: 'hidden' }, '+=4')
            // s4tl.to('#screen-4 .next', 1, { opacity: 1, visibility: 'visible' });

        }
    })
}


$('#screen-4 .next').on('click', function () {
    gsap.to('.screen-container', 1, { background: '#92ddd1' });
    tl.to('#screen-4', { duration: 2, left: '-100vw', width: '100%', ease: 'power4.out' });
    tl.to('#screen-5', {
        duration: 2, left: '0vw', ease: 'power4.out', onComplete: function () {
            screen5();
        }
    }, '-=2');

})


function screen5() {
    gsap.set($('#insta-selfi .moble'), { scale: 0, x: -50, transformOrigin: 'center' })
    gsap.set($('#insta-selfi .pic-posted'), { x: -50, transformOrigin: 'center' })
    gsap.set($("#insta-selfi .inner-tag .letters path"), { opacity: 0 })
    gsap.set($('.coffee-drop'), { y: -10 })
    gsap.to($('.order-placer-hand'), 2, { rotate: 15, y: -5, x: 5, transformOrigin: 'top left', repeat: -1, yoyo: true, ease: 'none' })
    gsap.to($('.boy-hand'), 4, { rotate: 15, transformOrigin: 'bottom', repeat: -1, yoyo: true, ease: 'none' })
    gsap.to($('.girl-hand'), 4, { rotate: -10, transformOrigin: 'bottom', repeat: -1, yoyo: true, ease: 'none' })
    gsap.to($('.coffee-drop'), 2, { y: 10, repeat: -1 })
    let tl5 = gsap.timeline();
    let screen5Walk = bodymovin.loadAnimation({
        container: document.getElementById('screen5-walk-animation'),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: 'json/walk_animation/data.json'
    });

    screen5Walk.addEventListener('DOMLoaded', function () {
        setTimeout(function () {
            gsap.set($('#screen5-walk-animation , #insta-selfi'), { visibility: 'visible' })
            screen5Walk.play();
        }, 2000);

    })
    screen5Walk.addEventListener('complete', function () {
        tl5.to($('#insta-selfi .moble'), 0.5, { opacity: 1, visibility: 'visible', scale: 1, transformOrigin: 'center', ease: 'Back.out' })
        tl5.to($('#insta-selfi .outer-tag'), 0.5, { opacity: 1, visibility: 'visible', stagger: 0.5 })
    })

    $('#insta-selfi .outer-tag').on('click', function () {
        let tagNum = $(this).attr('data-num');
        tl5.to($('#insta-selfi .outer-tag'), 0.5, { opacity: 0, visibility: 'hidden' })
        tl5.to($("#insta-selfi .inner-tag." + tagNum), 0.2, { opacity: 1, visibility: 'visible' }, '-=0.5')
        tl5.to($("#insta-selfi .inner-tag." + tagNum + " .letters path"), 0.1, { opacity: 1, stagger: 0.1 })
        tl5.to($('#insta-selfi .moble .send .bg'), { fill: '#2e599c' }, '-=0.2')
        tl5.to($('#insta-selfi .moble .send'), { cursor: 'pointer' }, '-=0.2')

        $('#insta-selfi .moble .send').on('click', function () {
            tl5.to($('#insta-selfi .pic-posted'), 0.5, { opacity: 1, visibility: 'visible', transformOrigin: 'center', ease: 'Back.out' })
            tl5.to($('#insta-selfi .next'), 0.5, { opacity: 1, visibility: 'visible' })
        })
    })
}


$('#insta-selfi .next').on('click', function () {
    tl.to('#screen-5 , #screen5-walk-animation , #insta-selfi', { duration: 2, left: '-100vw', width: '100%', ease: 'power4.out' });
    tl.to('#screen-6', {
        duration: 2, left: '0vw', ease: 'power4.out', onComplete: function () {
            screen6();
        }
    }, '-=2');

})

let games;
function screen6() {
    gsap.set('#busycall-at-work , #screen-6-next-btn', { visibility: 'visible' });
    gsap.set('#screen-6 .emp-lptp-ln', { scaleX: 0 });
    gsap.to('#screen-6 .emp-lptp-ln', 2, { scaleX: 1, stagger: 2, repeat: -1, transformOrigin: 'left' });
    gsap.to('#screen-6 .rth-emp-hnd', 0.5, { rotation: -2, yoyo: true, repeat: -1, transformOrigin: 'bottom right' });
    gsap.to('#screen-6 .lft-emp-hnd', 0.5, { rotation: -3, yoyo: true, repeat: -1 });
    gsap.to('#screen-6 .show-pot .leaf', 3, { rotation: 3, transformOrigin: 'bottom', yoyo: true, repeat: -1, ease: 'power1.inOut', stagger: 0.4 });
    gsap.from('#screen-6 .avathr-head', 3, { rotate: 5, transformOrigin: "bottom", yoyo: true, ease: "power1.inOut", repeat: -1 });

    let busyAtCall = bodymovin.loadAnimation({
        container: document.getElementById('busycall-at-work'),
        renderer: 'svg',
        loop: false,
        autoplay: false,
        path: 'json/customer-call/data.json'
    });

    busyAtCall.setSpeed(1.2);
    setTimeout(function () {
        busyAtCall.play()
    }, 1000);

    let tlManBlink = new TimelineMax({});
    let tlManTalk = new TimelineMax({});
    tlManBlink.from('.avathr-head .eye', 0.3, { scaleY: 0.3, transformOrigin: "bottom", yoyo: true, ease: "power1.inOut" });

    function manBlink() {
        tlManBlink.restart();
        TweenLite.delayedCall(3, manBlink);
    }
    manBlink();

    busyAtCall.addEventListener('complete', function () {
        gsap.to('#screen-6-next-btn .next', 0.5, { opacity: 1, visibility: 'visible', delay: 0.5 })
        gsap.set($('#screen-7-games'), { visibility: 'visible' })
        games = bodymovin.loadAnimation({
            container: document.getElementById('screen-7-games'),
            renderer: 'svg',
            loop: false,
            autoplay: false,
            path: 'json/games/data.json'
        });
    })
}

$('#screen-6-next-btn .next').on('click', function () {
    gsap.to('.screen-container', 1, { background: '#90cbc2' });
    tl.to('#screen-6 , #busycall-at-work , #screen-6-next-btn', { duration: 2, left: '-100vw', width: '100%', ease: 'power4.out' });
    tl.to('#screen-7-games', {
        duration: 2, left: '0vw', ease: 'power4.out', onComplete: function () {
            screen7();
        }
    }, '-=2');
})

function screen7() {
    gsap.set($('#screen-7-game-controls'), { visibility: 'visible' })
    // let tl7 = gsap.timeline();
    let gameNumber = 1;
    // let games = bodymovin.loadAnimation({
    //     container: document.getElementById('screen-7-games'),
    //     renderer: 'svg',
    //     loop: false,
    //     autoplay: false,
    //     path: 'json/games/data.json'
    // });

    games.setSpeed(0.8);
    setTimeout(function () {
        games.play()
    }, 1000);

    games.addEventListener('enterFrame', function () {
        if (Math.floor(games.currentFrame) === 60) {
            games.pause()
            gsap.to($('#screen-7-game-controls .init-btn'), 0.5, { opacity: 1, visibility: 'visible' })
        }
        if (Math.floor(games.currentFrame) === 205) {
            games.goToAndPlay(105, true);
        }
        if (Math.floor(games.currentFrame) === 325) {
            games.goToAndPlay(228, true);
        }
        if (Math.floor(games.currentFrame) === 435) {
            games.goToAndPlay(355, true);
        }
        if (Math.floor(games.currentFrame) === 560) {
            games.goToAndPlay(465, true);
        }
        if (Math.floor(games.currentFrame) === 670) {
            games.goToAndPlay(585, true);
        }
    })

    $('#screen-7-game-controls .init-btn').on('click', function () {
        gsap.to($('#screen-7-game-controls .init-btn'), 0.5, {
            visibility: 'hidden', opacity: 0, onComplete: function () {
                games.goToAndPlay(61, true);
                gsap.to($('#screen-7-game-controls .next-btn'), 0.5, { opacity: 1, visibility: 'visible', delay: 1.5 })
            }
        })
    })


    $('#screen-7-game-controls .next-btn').on('click', function () {
        if (gameNumber === 1) {
            games.goToAndPlay(206, true);
            gsap.to($('#screen-7-game-controls .back-btn'), 0.5, { visibility: 'visible', opacity: 1 })
            gameNumber = 2;
        }
        else if (gameNumber === 2) {
            games.goToAndPlay(326, true);
            gsap.to($('#screen-7-game-controls .next-btn'), 0.5, { visibility: 'hidden', opacity: 0 })
            gsap.to('#screen-7-game-controls .next', 0.5, { opacity: 1, visibility: 'visible', delay: 0.5 })
            gameNumber = 3;
        }
    })


    $('#screen-7-game-controls .back-btn').on('click', function () {
        if (gameNumber === 2) {
            games.goToAndPlay(561, true);
            gsap.to($('#screen-7-game-controls .back-btn'), 0.5, { visibility: 'hidden', opacity: 0 })
            gameNumber = 1;
        }
        else if (gameNumber === 3) {
            games.goToAndPlay(436, true);
            gsap.to($('#screen-7-game-controls .next-btn'), 0.5, { visibility: 'visible', opacity: 1 })
            gameNumber = 2;
        }
    })
}