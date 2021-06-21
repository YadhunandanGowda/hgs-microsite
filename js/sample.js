// // screen 1 script
// let avatharNum = '';

// gsap.set("#screen-1 .avathar", { opacity: 1 });
// gsap.set("#screen-1", { opacity: 1 });

// let tl = gsap.timeline();

// tl.from(".avathar", { duration: 1, x: 1500, ease: "power4.out", stagger: 0.2 });
// tl.to(".check-dot", { duration: 0.5, opacity: 1 });
// TweenMax.set("#screen-1 .window", { opacity: 1, x: 750 });
// TweenMax.set("#screen-1 .window .cloud", { x: -1050 });
// TweenMax.to("#screen-1 .window .cloud", 15, { x: -700, repeat: -1 });

// $("#screen-1 .avathar-container .avathar-set .check-dot").on("click", function() {
//     avatharNum = $(this).parents('.avathar-set').attr('data-avathar-num');
//     if (avatharNum != '') {
//         TweenMax.to("#screen-1 .start", 0.2, { opacity: 1, visibility: 'visible' });
//     }
//     let child = $(this).children(".green-ccl");
//     let sibl = $(this).siblings(".avathar");
//     $(this).parents(".avathar-container").find(".avathar").each(function(index, item) {
//         if ($(item).attr("data-active") == "active") {
//             $(item).attr("data-active", "");
//         }
//     })
//     $(this).siblings(".avathar").attr("data-active", "active");
//     TweenMax.to("#screen-1 .avathar-container .avathar-set .check-dot .green-ccl", 0.5, { opacity: 0 });
//     TweenMax.to("#screen-1 .avathar-container .avathar-set .avathar", 0.5, { scale: 1, y: 0 });
//     TweenMax.to(sibl, 0.5, { scale: 1.04, y: -24, ease: Back.easeOut });
//     TweenMax.to(child, 0.5, { opacity: 1 });
// });
// $("#screen-1 .avathar-container .avathar-set .avathar").on("click", function() {
//     avatharNum = $(this).parents('.avathar-set').attr('data-avathar-num');
//     if (avatharNum != '') {
//         TweenMax.to("#screen-1 .start", 0.2, { opacity: 1, visibility: 'visible' });
//     }
//     let sibl = $(this).siblings(".check-dot").children(".green-ccl");
//     $(this).parents(".avathar-container").find(".avathar").each(function(index, item) {
//         if ($(item).attr("data-active") == "active") {
//             $(item).attr("data-active", "");
//         }
//     })
//     $(this).attr("data-active", "active");
//     TweenMax.to("#screen-1 .avathar-container .avathar-set .check-dot .green-ccl", 0.5, { opacity: 0 });
//     TweenMax.to("#screen-1 .avathar-container .avathar-set .avathar", 0.5, { scale: 1, y: 0 });
//     TweenMax.to($(this), 0.5, { scale: 1.04, y: -24, ease: Back.easeOut });
//     TweenMax.to(sibl, 0.5, { opacity: 1 });
// });

// $("#screen-1 .avathar-container .avathar-set .avathar").on("mouseenter", function() {
//     if (!($(this).attr('data-active') || $(this).attr('data-active') == 'active')) {
//         TweenMax.to($(this), 0.5, { scale: 1.04, y: -24, ease: Back.easeOut });
//     }
// }).on('mouseleave', function() {
//     if (!($(this).attr('data-active') || $(this).attr('data-active') == 'active')) {
//         TweenMax.to($(this), 0.5, { scale: 1, y: 0, ease: Back.easeOut });
//     }
// })



// $('#screen-1 .start').on('click', function() {
//     gsap.to('.screen-container', { duration: 2, left: '-100vw', ease: 'power4.out' });
//     screen2()
// })


// // screen 2 script
// function screen2() {
//     let tlManBlink = new TimelineMax({});
//     let tlWomenBlink = new TimelineMax({});
//     tlManBlink.from('.avathr-head .eye', 0.3, { scaleY: 0.3, transformOrigin: "bottom", yoyo: true, ease: "power1.inOut" })
//     tlWomenBlink.from('.rec-head .eye', 0.3, { scaleY: 0.3, transformOrigin: "bottom", yoyo: true, ease: "power1.inOut" })


//     function manBlink() {
//         tlManBlink.restart();
//         TweenLite.delayedCall(3, manBlink);
//     }

//     function womenBlink() {
//         tlWomenBlink.restart();
//         TweenLite.delayedCall(4, womenBlink);
//     }

//     TweenLite.delayedCall(3, manBlink);
//     TweenLite.delayedCall(4, womenBlink);

//     gsap.set('#screen-2 .popup', { scale: 0, opacity: 1, x: 290, y: 180 })
//     gsap.set('#screen-2 .avathr-head .eye, .rec-head .eye', { scaleY: 1 })
//     gsap.set('#screen-2 .hello-msg path', { opacity: 0 })
//     gsap.set('#screen-2 .show-pot .leaves .leaf', { rotation: -3, x: -20 })
//     gsap.from('#screen-2 .avathr-head', 1, { rotate: 5, transformOrigin: "bottom", yoyo: true, ease: "power1.inOut", repeat: -1 })
//     gsap.from('#screen-2 .rec-head .hair', 2, { rotate: 2, transformOrigin: "top left", yoyo: true, ease: "power1.inOut", repeat: -1 })
//     gsap.to('#screen-2 .show-pot .leaves .leaf', 5, { rotation: 3, transformOrigin: 'bottom', yoyo: true, repeat: -1, ease: 'power1.inOut', stagger: 0.4 })
//     tl.to('#screen-1', { duration: 0.8, left: '-100vw', ease: Power4.easeIn });
//     tl.to('#screen-2', { duration: 0.8, left: 0, ease: Power4.easeOut, delay: 0.2 });
//     tl.to('#screen-2 .popup', 1, { scale: 1, transformOrigin: "bottom right", ease: 'power4.out', delay: 0.2 })
//     tl.to('#screen-2 .hello-msg path', 0, { opacity: 1, stagger: 0.1 })
//     tl.to('#screen-2 .next', 1, { opacity: 1, visibility: 'visible' })
// }



// function screen3() {
//     let tl = new TimelineMax({ delay: 11 });
//     let
//         E0 = Sine.easeInOut,
//         E1 = Sine.easeIn,
//         E2 = Sine.easeOut;

//         gsap.set('#screen-3 .wel-popup .letters path', { opacity: 0})

//     function M(p1, p2) {
//         let tlm = gsap.timeline({ repeat: 2 })
//             .add("l1", 0).add("l2", .25).add("l3", .5).add("l4", .75).add("l5", 1)
//             .to(p1, .5, { rotation: -8, ease: E0 }, 'l1')
//             .to(p1, .25, { rotation: 3, ease: E1 }, 'l3')
//             .to(p1 + ' .lower', .25, { rotation: -10, ease: E0, y: 5, x: -5 }, 'l2')
//             .to(p1 + ' .lower', .25, { rotation: -20, ease: E1, y: 3, x: -3 }, 'l3')
//             .to(p1 + ' .lower', .25, { rotation: 0, ease: E2, y: 0, x: 0 }, 'l4')
//             .to(p2, .5, { rotation: 15, ease: E0 }, 'l1')
//             .to(p2, .5, { rotation: 0, ease: E0 }, 'l3')
//             .to(p2 + ' .elbow', .5, { rotation: 15, ease: E0, x: 10, transformOrigin: 'top' }, 'l1')
//             .to(p2 + ' .elbow', .5, { rotation: 0, ease: E0, x: 0, transformOrigin: 'top' }, 'l3')
//         return tlm;
//     }

//     let MTl = gsap.timeline()
//         .add(M('#screen-3 .trainer-right-leg', '#screen-3 .trainer-right-hand')).add(M('.trainer-left-leg', '.trainer-left-hand'), 0.5)
//         .to('#screen-3 .trainer-right-leg , #screen-3 .trainer-left-leg', 0.5, { rotation: 0 })
//         .to('#screen-3 .wel-popup', 1, { opacity: 1, scale: 1, transformOrigin: 'bottom right' }, '-=0.5')
//         .to('#screen-3 .wel-popup .letters path', 0, { opacity: 1, stagger: 0.05 })
//         .to('#screen-3 .ques-icon', 1, { opacity: 1, visibility: 'visible' });

//     gsap.set('#screen-3 .trainer-right-leg , .trainer-left-leg', { rotation: 3 })
//     gsap.set('#screen-3 .popup', { y: -1000 })
//     gsap.set('#screen-3 .wel-popup', { scale: 0, x: 370, y: 200 })
//     gsap.set('#screen-3 .laptop .upper', { scaleY: 0, opacity: 1, y: 80 });
//     gsap.set('#screen-3 .trainer', { x: 500, opacity: 1 });
//     gsap.set('#screen-3 .eye', { scaleY: 1 })
//     gsap.to('#screen-3 .head', 2, { rotate: 5, transformOrigin: 'bottom', repeat: -1, yoyo: true, ease: "none" });
//     gsap.to('#screen-3 .leaf', 2, { rotate: 5, transformOrigin: 'bottom', repeat: -1, yoyo: true, ease: "none", stagger: 0.2 });
//     gsap.to('#screen-3 .trainer', 3, { x: 0, ease: "none" });
//     gsap.to('#screen-3 .trainer-head', 0.5, { rotate: -5, transformOrigin: 'bottom', yoyo: true, repeat: 6 })
//     gsap.to('#screen-3 .participant-3-hair', 3, { scale: 1.02, rotate: -5, repeat: -1, transformOrigin: 'top left', yoyo: true });

//     let tlManBlink = new TimelineMax({});
//     tlManBlink.from('#screen-3 .eye', 0.3, { scaleY: 0.3, transformOrigin: "bottom", yoyo: true, ease: "power1.inOut" })


//     function manBlink() {
//         tlManBlink.restart();
//         TweenLite.delayedCall(3, manBlink);
//     }

//     TweenLite.delayedCall(3, manBlink);

//     $('#screen-3 .ques-icon').on('click', function() {
//         gsap.set('#quest-sec .screen3-question1', { visibility: 'visible', left: '0%' });

//         MTl.to('#screen-3 .wel-popup', 1, { opacity: 0, scale: 1, transformOrigin: 'bottom right' })
//             .to('#screen-3 .wel-popup', 0, { y: -1000 })
//             .to('#screen-3 .trainer-right-hand', 1, { rotate: 30, y: -10, x: 10, transformOrigin: 'top' },'-=1')
//             .to('#screen-3 .trainer-right-hand .elbow', 1, { rotate: 90, x: 50, y: 30, transformOrigin: 'top' }, '-=1')
//             .to('#screen-3 .laptop .upper', 2, { scale: 1, transformOrigin: 'bottom', ease: "power2.out", stagger: 0.2 })
//             .to('#screen-3 .right-hand', { duration: 2, rotate: -10, ease: "power2.out" }, '-=2')
//             .to('#screen-3 .right-hand .elbow', { duration: 2, rotate: -15, scaleX: 1, ease: "power2.out", y: 5 }, '-=2')
//             .to('#screen-3 .right-hand', { duration: 2, rotate: 0, ease: "power2.out" })
//             .to('#screen-3 .right-hand .elbow', { duration: 2, rotate: 0, scaleX: 0.9, ease: "power2.out", y: 0 }, '-=2')
//             .to('#screen-3 .right-hand .elbow', { duration: 0.3, rotate: -3, repeat: -1, yoyo: true, ease: "power2.in", y: 0 })
//             .to('#screen-3 .left-hand .elbow', { duration: 0.3, rotate: -3, repeat: -1, yoyo: true, ease: "power2.in", y: 0 })
//             .to('#quest-sec', 1, { right: '-70vw', ease: 'back.out' },'-=4')
//             .to('.main-cntr', 1, { width: '70vw', ease: 'back.out' }, '-=1')
//             .to('#screen-3 .ques-icon', 0.5, { opacity: 0, visibility: 'hidden' });

//     })

//     let ans1 = 'Customer Satisfaction';
//     let ans2 = 'explain the reason and wait time';
//     let answered1 = false;
//     let answered2 = false;
//     let poptl1 = new TimelineMax({})
//     let poptl2 = new TimelineMax({})

//     $('.screen3-question1 .option').on('click', function() {
//         let num = $(this).attr('data-num');
//         if (!answered1) {
//             if ($(this).children('text').attr('data-name') == ans1) {
//                 gsap.to('.screen3-question1 .option .background', 0.5, { fill: "#e6e6e6" })
//                 gsap.to('.screen3-question1 .option text', 0.5, { fill: "#0e3e7c" })
//                 gsap.to('.screen3-question1 .option-' + num + ' .background', 0.5, { fill: '#739F2D' })
//                 gsap.to($(this).children('text'), 0.5, { fill: '#fff' })
//                 gsap.set('#screen-3 .right-popup', { y: -20, scale: 0, transformOrigin: 'bottom right' })
//                 poptl1.progress(0).clear();
//                 poptl1.to('#screen-3 .right-popup', 1, { scale: 1, opacity: 1 })
//                 poptl1.to('#screen-3 .right-popup', 1, { scale: 0, opacity: 0 }, '+=2')
//                 poptl1.to('#screen-3 .right-popup', { y: -1000 })
//                 answered1 = true;
//                 poptl1.to('#quest-sec .screen3-question1', 1, { opacity: 0, left: '30%' })
//                 poptl1.to('#quest-sec .screen3-question2', 1, { left: '0%', opacity: 1 })
//             } else {
//                 gsap.to('.screen3-question1 .option .background', 0.5, { fill: "#e6e6e6" })
//                 gsap.to('.screen3-question1 .option text', 0.5, { fill: "#0e3e7c" })
//                 gsap.to('.screen3-question1 .option-' + num + ' .background', 0.5, { fill: 'red' })
//                 gsap.to($(this).children('text'), 0.5, { fill: '#fff' })
//                 gsap.set('#screen-3 .wrong-popup', { y: -20, scale: 0, transformOrigin: 'bottom right' })
//                 poptl1.progress(0).clear();
//                 poptl1.to('#screen-3 .wrong-popup', 1, { scale: 1, opacity: 1 })
//                 poptl1.to('#screen-3 .wrong-popup', 1, { scale: 0, opacity: 0 }, '+=2')
//                 poptl1.to('#screen-3 .wrong-popup', { y: -1000 })
//             }
//         }
//     })


//     $('.screen3-question2 .option').on('click', function() {
//         let num = $(this).attr('data-num');
//         if (!answered2) {
//             if ($(this).children('text').attr('data-name') == ans2) {
//                 gsap.to('.screen3-question2 .option .background', 0.5, { fill: "#e6e6e6" })
//                 gsap.to('.screen3-question2 .option text', 0.5, { fill: "#0e3e7c" })
//                 gsap.to('.screen3-question2 .option-' + num + ' .background', 0.5, { fill: '#739F2D' })
//                 gsap.to($(this).children('text'), 0.5, { fill: '#fff' })
//                 gsap.set('#screen-3 .right-popup', { y: -20, scale: 0, transformOrigin: 'bottom right' })
//                 poptl2.progress(0).clear();
//                 poptl2.to('#screen-3 .right-popup', 1, { scale: 1, opacity: 1 })
//                 poptl2.to('#screen-3 .right-popup', 1, { scale: 0, opacity: 0 }, '+=2')
//                 poptl2.to('#screen-3 .right-popup', { y: -1000 })
//                 answered2 = true;
//                 gsap.to('#screen-3 .next', 1, { opacity: 1, visibility: 'visible' });
//             } else {
//                 gsap.to('.screen3-question2 .option .background', 0.5, { fill: "#e6e6e6" })
//                 gsap.to('.screen3-question2 .option text', 0.5, { fill: "#0e3e7c" })
//                 gsap.to('.screen3-question2 .option-' + num + ' .background', 0.5, { fill: 'red' })
//                 gsap.to($(this).children('text'), 0.5, { fill: '#fff' })
//                 gsap.set('#screen-3 .wrong-popup', { y: -20, scale: 0, transformOrigin: 'bottom right' })
//                 poptl2.progress(0).clear();
//                 poptl2.to('#screen-3 .wrong-popup', 1, { scale: 1, opacity: 1 })
//                 poptl2.to('#screen-3 .wrong-popup', 1, { scale: 0, opacity: 0 }, '+=2')
//                 poptl2.to('#screen-3 .wrong-popup', { y: -1000 })
//             }
//         }
//     })
// }

// // $('#screen-2 .prev').on('click', function() {
// //     tl.to('#screen-2', { duration: 0.8, left: '100vw', ease: Power4.easeIn });
// //     tl.to('#screen-2', { duration: 0.8, left: '100vw', ease: Power4.easeIn });
// // })

// $('#screen-2 .next').on('click', function() {
//     gsap.to('.screen-container', { duration: 2, left: '-200vw', ease: 'power4.out' });
//     screen3()
// })


// $('#screen-3 .next').on('click', function() {
//     tl.to('#screen-3', { duration: 0.8, left: '-100vw', ease: Power4.easeIn });
//     tl.to('#screen-4', { duration: 0.8, left: '0vw', ease: Power4.easeOut }, '-=0.2');
// })

// // $('#screen-3 .prev').on('click', function() {
// //     tl.to('#screen-3', { duration: 0.8, left: '100vw', ease: Power4.easeIn });
// // })

// let grandChild ;

// document.addEventListener("DOMContentLoaded", function() {
//     console.log("lottie anim doc loaded");
//   });

// grandChild = bodymovin.loadAnimation({
//     container: document.getElementById('screen-container1'),
//     renderer: 'svg',
//     loop: false,
//     autoplay: false,
//     path: 'json/single-c2/data.json'
// });

// let two = bodymovin.loadAnimation({
//     container: document.getElementById('screen-container2'),
//     renderer: 'svg',
//     loop: false,
//     autoplay: false,
//     path: 'json/data.json'
// });

// grandChild.addEventListener('complete', function(){
//     console.log(grandChild.currentRawFrame);
//     console.log(grandChild.totalFrames);    
// });

// $('.oeiu').on('click', function(){
//     two.playSegments([20,70], true)

// })



// function play(){
//     grandChild.play()
// }


// function pause(){
//     grandChild.pause()
    
// }

// function restart(){
//     grandChild.goToAndStop(0);
//     grandChild.play()
// }
// let char2;
// setTimeout(function(){
// //     char2 = document.getElementsByClassName("character_2");
// // console.log(char2[0]);
// // char2[0].addEventListener('click', function(){
// //     alert(0)
// // })
// $('.character_2').on('click', function(){
//     grandChild.playSegments([24, 65], true);
// })
// }, 5000)












function play(){
    screen1Char1.play()
}



let screen1Cha7 = bodymovin.loadAnimation({
    container: document.getElementById('s1bg'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'json/Screen_1_bg/data.json'
});


let screen1Char1 = bodymovin.loadAnimation({
    container: document.getElementById('char1'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'json/character_1/data.json'
});

let screen1Char2 = bodymovin.loadAnimation({
    container: document.getElementById('char2'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'json/character_2/data.json'
});

let screen1Char3 = bodymovin.loadAnimation({
    container: document.getElementById('char3'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'json/character_3/data.json'
});

let screen1Char4 = bodymovin.loadAnimation({
    container: document.getElementById('char4'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'json/character_4/data.json'
});

let screen1Char5 = bodymovin.loadAnimation({
    container: document.getElementById('char5'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'json/character_5/data.json'
});

let screen1Cha6 = bodymovin.loadAnimation({
    container: document.getElementById('char6'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'json/character_6/data.json'
});

let yes = true;

setTimeout(function(){
//     char2 = document.getElementsByClassName("character_2");
// console.log(char2[0]);
// char2[0].addEventListener('click', function(){
//     alert(0)
// })
    $('div.char1 .character_1_body').on('click', function(){
        alert(0)
    })
$('.character_6_body').on('click', function(){
    if(yes) {
        screen1Cha6.setDirection(1)
        screen1Cha6.play();
        gsap.to('.character_6_body', 2, {x:30})
        yes = false;
    }
    else {
        screen1Cha6.setDirection(-1)
        screen1Cha6.play();
        gsap.to('.character_6_body', 2, {x:650})
        yes = true;
    }
})
}, 5000)
