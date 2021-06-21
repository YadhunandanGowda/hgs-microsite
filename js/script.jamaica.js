let tl = gsap.timeline();
let avatarNum = "";
let cafeteriaWalk;
let cafeteriaText;
let awardRecognitionOne;
let teamLead;
let airportBackgroundAnimation;
let awardRecognitionTwo;
let awardRecognitionThree;
// var isIE = /*@cc_on!@*/false || !!document.documentMode;
let isFirefox = typeof InstallTrigger !== "undefined";
let audioback;
let applyNowWalk;
let airportWalkAnimation;
// let country_code = null;
// $.getJSON("http://ipinfo.io/", function (data) {
//   country_code = data.country;
// });

// jQuery(document).ready(function ($) {
//   jQuery.getScript("http://www.geoplugin.net/javascript.gp", function () {
//     country_code = geoplugin_countryCode();
//   });
// });

let soundDestiny = "http://hitechindia.regalixdev.com/contact-center-experience-zone/";

let backgroundMusic = new Howl({
    src: [soundDestiny + "sounds/backgroud-music.mp3"],
    loop: true,
    volume: 0.2,
});

let next = new Howl({
    src: [soundDestiny + "sounds/button-click.mp3"],
});

let avatarSelect = new Howl({
    src: [soundDestiny + "sounds/avatar-select.mp3"],
});

let iconSelect = new Howl({
    src: [soundDestiny + "sounds/icon-click.mp3"],
});

let correctAnswer = new Howl({
    src: [soundDestiny + "sounds/correct-answer.mp3"],
});

let wrongAnswer = new Howl({
    src: [soundDestiny + "sounds/wrong-answer.mp3"],
});

let gameNextBack = new Howl({
    src: [soundDestiny + "sounds/gameNextBack.mp3"],
});

let awardPopup = new Howl({
    src: [soundDestiny + "sounds/award-popup.mp3"],
});

let starPopup = new Howl({
    src: [soundDestiny + "sounds/star-popup.mp3"],
});

// function soundClip() {

// var assetPath = window.location.href + 'sounds/';
// var cap3sounds = [
//     { src: "button-click.mp3", id: "next" },
//     { src: "backgroud-music.mp3", id: "backgroundMusic" },
//     { src: "avatar-select.mp3", id: "avatarSelect" },
//     { src: "icon-click.mp3", id: "iconSelect" },
//     { src: "correct-answer.mp3", id: "correctAnswer" },
//     { src: "wrong-answer.mp3", id: "wrongAnswer" },
//     { src: "gameNextBack.mp3", id: "gameNextBack" },
//     { src: "award-popup.mp3", id: "awardPopup" },
//     { src: "star-popup.mp3", id: "starPopup" }
// ];
// createjs.Sound.alternateExtensions = ["mp3"];
// createjs.Sound.registerSounds(cap3sounds, assetPath);
// createjs.Sound.addEventListener("fileload", playSound);

// function playSound(event) {
//     if (event.id == 'backgroundMusic') {
//         audioback = createjs.Sound.play("backgroundMusic", { loop: -1 });
//         audioback.volume = 0.2;
//         audioback.stop();
//     }
// }
// }

gsap.set("#screen-1 .window", { opacity: 1, x: 750 });
gsap.set("#screen-1 .window .cloud", { x: -1050 });
gsap.to("#screen-1 .window .cloud", 15, { x: -700, repeat: -1 });

// page loader code

function loading() {
    // soundClip();
    var elem = document.getElementById("percentageLoader");
    var width = 10;
    var id = setInterval(frame, 50);

    function frame() {
        if (width >= 100) {
            clearInterval(id);
            gsap.set("#screen-1 .avatar", { opacity: 1 });
            $(".loader-sec").fadeOut(500);
            tl.to(".circleLoader", 0.2, { opacity: 0, visibility: "hidden" });
            tl.to("#LoaderBack", 1, {
                strokeWidth: "0",
                onComplete: function () {
                    backgroundMusic.play();
                },
            });
            tl.to("#zoomOutEffect", 0, { visibility: "hidden" });
            tl.from(
                "#screen-1 .avatar", { duration: 1, x: 1800, ease: "power4.out", stagger: 0.2 },
                "-=0.5"
            );
            tl.to("#screen-1 .check-dot", { duration: 0.5, opacity: 1 }, "-=1.5");
        } else {
            width++;
            elem.style.width = width + "%";
            elem.innerHTML = width * 1 + "%";
        }
    }
}
// HGS logo click function
$(".header .logo").on("click", function () {
    window.open("https://www.joinhgs.com/jm/career-playbook", "_blank");
});

// home icon click function
$(".hom-icn").on("click", function () {
    next.play();
    $(".hm-ext-popup").addClass("active");
});

//home icon resume button click function
$(".hm-ext-popup .optns a.resume").on("click", function () {
    next.play();
    $(this).parents(".hm-ext-popup").removeClass("active");
});

//home icon restart button click function
$(".hm-ext-popup .optns a.restart").on("click", function () {
    next.play();
    window.location.reload();
});

//home icon exit button click function
$(".hm-ext-popup .optns a.exit").on("click", function () {
    next.play();
    window.history.back();
});

//mute the background
$("#mute-btn").on("click", function () {
    next.play();
    if ($(this).hasClass("muted")) {
        // sound.play();
        // createjs.Sound.volume = 0.5;
        // audioback.volume = 0.2;
        backgroundMusic.volume(0.2);
        next.volume(1);
        avatarSelect.volume(1);
        iconSelect.volume(1);
        correctAnswer.volume(1);
        wrongAnswer.volume(1);
        gameNextBack.volume(1);
        awardPopup.volume(1);
        starPopup.volume(1);
        $(this).removeClass("muted");
        gsap.to("#mute-btn .line", 0.3, { opacity: 0 });
    } else {
        // sound.pause();
        // audioback.volume = 0;
        // createjs.Sound.volume = 0;
        backgroundMusic.volume(0);
        next.volume(0);
        avatarSelect.volume(0);
        iconSelect.volume(0);
        correctAnswer.volume(0);
        wrongAnswer.volume(0);
        gameNextBack.volume(0);
        awardPopup.volume(0);
        starPopup.volume(0);
        $(this).addClass("muted");
        gsap.to("#mute-btn .line", 0.3, { opacity: 1 });
    }
});

$(window)
    .focus(function () {
        if (!$("#mute-btn").hasClass("muted")) {
            backgroundMusic.volume(0.2);
            next.volume(1);
            avatarSelect.volume(1);
            iconSelect.volume(1);
            correctAnswer.volume(1);
            wrongAnswer.volume(1);
            gameNextBack.volume(1);
            awardPopup.volume(1);
            starPopup.volume(1);
        }
    })
    .blur(function () {
        if (!$("#mute-btn").hasClass("muted")) {
            backgroundMusic.volume(0);
            next.volume(0);
            avatarSelect.volume(0);
            iconSelect.volume(0);
            correctAnswer.volume(0);
            wrongAnswer.volume(0);
            gameNextBack.volume(0);
            awardPopup.volume(0);
            starPopup.volume(0);
        }
    });

//home icon popup close function
$(document).mouseup(function (e) {
    var container = $(".hm-ext-popup .optns");
    if (!container.is(e.target) &&
        container.has(e.target).length === 0 &&
        $(".hm-ext-popup").hasClass("active")
    ) {
        container.parents(".hm-ext-popup").removeClass("active");
    }
});

// screen 1 script
//common function for Avatar thumbs up
function screen1Click(avatarNum, a, b) {
    avatarSelect.play();
    gsap.to("#screen-1 .start", 0.2, { opacity: 1, visibility: "visible" });

    a.parents(".avatar-container")
        .children(".avatar")
        .each(function (index, item) {
            if ($(item).attr("data-active") == "active") {
                $(item).attr("data-active", "");
            }
        });

    a.attr("data-active", "active");
    gsap.to(
        "#screen-1 .avatar-container .avatar-set .check-dot .green-ccl",
        0.5, { opacity: 0 }
    );
    gsap.to("#screen-1 .avatar-container .avatar-set .avatar", 0.5, {
        scale: 1,
        y: 0,
    });
    gsap.to("#screen-1 .avatar .shoulder", 0.5, {
        rotate: 0,
        x: 0,
        y: 0,
        transformOrigin: "top",
    });
    gsap.to("#screen-1 .avatar .elbow", 0.5, {
        rotate: 0,
        x: 0,
        y: 0,
        transformOrigin: "top",
    });
    gsap.to("#screen-1 .avatar .elbow .thumb", 0.5, { opacity: 0 });
    gsap.to($("#screen-1 .avatar").siblings(".popup"), 0.5, {
        opacity: 0,
        scale: 0,
        transformOrigin: "bottom left",
    });
    gsap.to(a, 0.5, { scale: 1.04, y: -24, ease: Back.easeOut });
    gsap.to(b, 0.5, { opacity: 1 });
    gsap.to($("#screen-1 .avatar-" + avatarNum).siblings(".popup"), 0.75, {
        opacity: 1,
        scale: 1,
        transformOrigin: "bottom left",
    });
    gsap.to("#screen-1 .avatar-" + avatarNum + " .shoulder", 0.75, {
        rotate: -10,
        transformOrigin: "top",
    });
    gsap.to("#screen-1 .avatar-" + avatarNum + " .elbow", 0.75, {
        rotate: -100,
        x: 0,
        y: 8,
        transformOrigin: "top",
    });
    gsap.to("#screen-1 .avatar-" + avatarNum + " .elbow .thumb", 0.75, {
        opacity: 1,
    });
}

//screen one dot click function
$("#screen-1 .avatar-container .avatar-set .check-dot").on(
    "click",
    function () {
        let child = $(this).children(".green-ccl");
        let sibl = $(this).siblings(".avatar");
        avatarNum = $(this).parents(".avatar-set").attr("data-avatar-num");
        screen1Click(avatarNum, sibl, child);
    }
);

//screen one Avatar click function
$("#screen-1 .avatar-container .avatar-set .avatar").on("click", function () {
    let sibl = $(this).siblings(".check-dot").children(".green-ccl");
    let $this = $(this);
    avatarNum = $(this).parents(".avatar-set").attr("data-avatar-num");

    screen1Click(avatarNum, $this, sibl);
});

//on hover avatar zoom function
$("#screen-1 .avatar-container .avatar-set .avatar")
    .on("mouseenter", function () {
        if (!($(this).attr("data-active") || $(this).attr("data-active") == "active")) {
            gsap.to($(this), 0.5, { scale: 1.04, y: -24, ease: Back.easeOut });
        }
    })
    .on("mouseleave", function () {
        if (!($(this).attr("data-active") || $(this).attr("data-active") == "active")) {
            gsap.to($(this), 0.5, { scale: 1, y: 0, ease: Back.easeOut });
        }
    });

//screen one start click function
$("#screen-1 .start").on("click", function () {
    gsap.to("#screen-2 .avatar-" + avatarNum, 0, {
        opacity: 1,
        visibility: "visible",
    });
    gsap.to(".header .logo", 0, { display: "none" });
    tl.to("#screen-1", { duration: 2, left: "-100vw", ease: "power4.out" });
    tl.to(
        "#screen-2", {
        duration: 2,
        left: "0vw",
        ease: "power4.out",
        onComplete: function () {
            screen2();
        },
    },
        "-=2"
    );
});

//common eye blink function
let tlManBlink = new TimelineMax({});
let tlWomenBlink = new TimelineMax({});

tlManBlink.from("#screen-2 .avatar .eye , #screen-3 .avatar .eye", 0.3, {
    scaleY: 0.3,
    transformOrigin: "bottom",
    yoyo: true,
    ease: "power1.inOut",
});
tlWomenBlink.from("#screen-2 .rec-head .eye", 0.3, {
    scaleY: 0.3,
    transformOrigin: "bottom",
    yoyo: true,
    ease: "power1.inOut",
});

function manBlink() {
    tlManBlink.restart();
    TweenLite.delayedCall(3, manBlink);
}

function womenBlink() {
    tlWomenBlink.restart();
    TweenLite.delayedCall(4, womenBlink);
}

TweenLite.delayedCall(3, manBlink);
TweenLite.delayedCall(4, womenBlink);

// screen 2 script
gsap.from("#screen-2 .avatar-head", 1, {
    rotate: 5,
    transformOrigin: "bottom",
    yoyo: true,
    ease: "power1.inOut",
    repeat: -1,
});
gsap.from("#screen-2 .rec-head .hair", 2, {
    rotate: 2,
    transformOrigin: "top left",
    yoyo: true,
    ease: "power1.inOut",
    repeat: -1,
});
gsap.to("#screen-2 .show-pot .leaves", 5, {
    rotation: 3,
    transformOrigin: "bottom",
    yoyo: true,
    repeat: -1,
    ease: "power1.inOut",
    stagger: 0.4,
});

function screen2() {
    gsap.set("#screen-2 .popup", {
        scale: 0,
        opacity: 1,
        transformOrigin: "bottom right",
    });
    gsap.set("#screen-2 .avatar-head .eye, .rec-head .eye", { scaleY: 1 });
    gsap.set("#screen-2 .hello-msg path", { opacity: 0 });

    let tl2 = gsap.timeline();

    tl2.to("#screen-2 .popup", 1, {
        scale: 1,
        transformOrigin: "bottom right",
        ease: "power4.out",
        delay: 1,
    });
    tl2.to("#screen-2 .hello-msg path", 0, { opacity: 1, stagger: 0.1 });
    tl2.to("#screen-2 .next", 1, { opacity: 1, visibility: "visible" });

    //screen 11 airport walk animation initialization (initializing early for smooth animation)
    airportWalkAnimation = bodymovin.loadAnimation({
        container: document.getElementById("airport-animation"),
        renderer: "svg",
        loop: false,
        autoplay: false,
        path: "json/airport-avatar/avatar-" + avatarNum + ".json",
    });

    //screen 12 walk animation initialization (initializing early for smooth animation)
    applyNowWalk = bodymovin.loadAnimation({
        container: document.getElementById("apply-now-animation"),
        renderer: "svg",
        loop: false,
        autoplay: false,
        path: "json/apply-now/avatar-" + avatarNum + ".json",
    });

    //screen 9 second part animation initialization
    awardRecognitionTwo = bodymovin.loadAnimation({
        container: document.getElementById("award-recognition-two"),
        renderer: "svg",
        loop: false,
        autoplay: false,
        path: "json/award-recognition/avatar-" + avatarNum + "/data-02.json",
    });

    //screen 9 third part animation initialization
    awardRecognitionThree = bodymovin.loadAnimation({
        container: document.getElementById("award-recognition-three"),
        renderer: "svg",
        loop: true,
        autoplay: false,
        path: "json/award-recognition/avatar-" + avatarNum + "/data-03.json",
    });

    //screen 10 teamlead animation initialization (initializing early for smooth animation)
    teamLead = bodymovin.loadAnimation({
        container: document.getElementById("team-lead"),
        renderer: "svg",
        loop: false,
        autoplay: false,
        path: "json/team-lead/avatar-" + avatarNum + ".json",
    });
}

//screen two next click funtion
$("#screen-2 .next").on("click", function () {
    gsap.set("#screen-3 .other-laptop .upper , #screen-3 .laptop .upper", {
        scaleY: 0,
        opacity: 1,
        y: 80,
    });
    gsap.to("#screen-3 .avatar-" + avatarNum, 0, {
        opacity: 1,
        visibility: "visible",
    });
    tl.to("#screen-2", { duration: 2, left: "-100vw", ease: "power4.out" });
    tl.to(
        "#screen-3", {
        duration: 2,
        left: "0vw",
        ease: "power4.out",
        onComplete: function () {
            screen3();
        },
    },
        "-=2"
    );
});

//screen 3 script
function screen3() {
    gsap.set("#screen-3 .trainer-right-leg , .trainer-left-leg", { rotation: 3 });
    gsap.set("#screen-3 .wel-popup", {
        scale: 0,
        transformOrigin: "bottom right",
    });
    gsap.set("#screen-3 .congrats-popup", {
        scale: 0,
        transformOrigin: "bottom right",
    });
    gsap.set("#screen-3 .trainer", { x: 500, opacity: 1 });
    gsap.set("#screen-3 .eye", { scaleY: 1 });

    //calendar animation initialization
    let calendarFlip = bodymovin.loadAnimation({
        container: document.getElementById("calnder-pp"),
        renderer: "svg",
        loop: false,
        autoplay: false,
        path: "json/screen3-calendar/data.json",
    });

    let E0 = Sine.easeInOut,
        E1 = Sine.easeIn,
        E2 = Sine.easeOut;
    gsap.set("#screen-3 .right-popup .letters path", { opacity: 0 });
    gsap.set("#screen-3 .wrong-popup .letters path", { opacity: 0 });
    gsap.set("#screen-3 .wel-popup .letters path", { opacity: 0 });
    gsap.set("#screen-3 .congrats-popup .letters path", { opacity: 0 });

    //trainer walk funtion
    function M(p1, p2) {
        let tlm = gsap
            .timeline({ repeat: 2 })
            .add("l1", 0)
            .add("l2", 0.25)
            .add("l3", 0.5)
            .add("l4", 0.75)
            .add("l5", 1)
            .to(p1, 0.5, { rotation: -8, ease: E0 }, "l1")
            .to(p1, 0.25, { rotation: 3, ease: E1 }, "l3")
            .to(p1 + " .lower", 0.25, { rotation: -10, ease: E0, y: 5, x: -5 }, "l2")
            .to(p1 + " .lower", 0.25, { rotation: -20, ease: E1, y: 3, x: -3 }, "l3")
            .to(p1 + " .lower", 0.25, { rotation: 0, ease: E2, y: 0, x: 0 }, "l4")
            .to(p2, 0.5, { rotation: 15, ease: E0 }, "l1")
            .to(p2, 0.5, { rotation: 0, ease: E0 }, "l3")
            .to(
                p2 + " .elbow",
                0.5, { rotation: 15, ease: E0, x: 10, transformOrigin: "top" },
                "l1"
            )
            .to(
                p2 + " .elbow",
                0.5, { rotation: 0, ease: E0, x: 0, transformOrigin: "top" },
                "l3"
            );
        return tlm;
    }

    //hand lift code ia nt working in firefox so wrote a seperate code only for firefox.
    let MTl;
    if (isFirefox) {
        MTl = gsap
            .timeline()
            .add(M("#screen-3 .trainer-right-leg", "#screen-3 .trainer-right-hand"))
            .add(
                M("#screen-3 .trainer-left-leg", "#screen-3 .trainer-left-hand"),
                0.5
            )
            .to("#screen-3 .trainer-right-leg , #screen-3 .trainer-left-leg", 0.5, {
                rotation: 0,
            })
            .to(
                "#screen-3 .wel-popup",
                1, { opacity: 1, scale: 1, transformOrigin: "bottom right" },
                "-=0.5"
            )
            .to("#screen-3 .wel-popup .letters path", 0, {
                opacity: 1,
                stagger: 0.05,
            })
            .to("#screen-3 .ques-icon", 1, { opacity: 1, visibility: "visible" })
            .to(
                "#screen-3 .trainer-right-hand",
                1, { rotate: 30, y: -10, x: 10, transformOrigin: "top" },
                "-=1"
            )
            .to(
                "#screen-3 .trainer-right-hand .elbow",
                1, { rotate: 90, x: 35, y: 5, transformOrigin: "top" },
                "-=1"
            );

        // gsap.to('#screen-3 .head', 2, { rotate: 5, transformOrigin: 'bottom', repeat: -1, yoyo: true, ease: "none" });
        gsap.to("#screen-3 .leaf", 2, {
            rotate: 5,
            transformOrigin: "bottom",
            repeat: -1,
            yoyo: true,
            ease: "none",
            stagger: 0.2,
        });
        gsap.to("#screen-3 .trainer", 3, { x: 0, ease: "none" });
        gsap.to("#screen-3 .trainer-head", 0.5, {
            rotate: -5,
            transformOrigin: "bottom",
            yoyo: true,
            repeat: 6,
        });
        gsap.to("#screen-3 .participant-3-hair", 3, {
            scale: 1.02,
            rotate: -5,
            repeat: -1,
            transformOrigin: "top left",
            yoyo: true,
        });
    } else {
        MTl = gsap
            .timeline()
            .add(M("#screen-3 .trainer-right-leg", "#screen-3 .trainer-right-hand"))
            .add(
                M("#screen-3 .trainer-left-leg", "#screen-3 .trainer-left-hand"),
                0.5
            )
            .to("#screen-3 .trainer-right-leg , #screen-3 .trainer-left-leg", 0.5, {
                rotation: 0,
            })
            .to(
                "#screen-3 .wel-popup",
                1, { opacity: 1, scale: 1, transformOrigin: "bottom right" },
                "-=0.5"
            )
            .to("#screen-3 .wel-popup .letters path", 0, {
                opacity: 1,
                stagger: 0.05,
            })
            .to("#screen-3 .ques-icon", 1, { opacity: 1, visibility: "visible" })
            .to(
                "#screen-3 .trainer-right-hand",
                1, { rotate: 30, y: -10, x: 10, transformOrigin: "top" },
                "-=1"
            )
            .to(
                "#screen-3 .trainer-right-hand .elbow",
                1, { rotate: 90, x: 50, y: 30, transformOrigin: "top" },
                "-=1"
            );

        // gsap.to('#screen-3 .head', 2, { rotate: 5, transformOrigin: 'bottom', repeat: -1, yoyo: true, ease: "none" });
        gsap.to("#screen-3 .leaf", 2, {
            rotate: 5,
            transformOrigin: "bottom",
            repeat: -1,
            yoyo: true,
            ease: "none",
            stagger: 0.2,
        });
        gsap.to("#screen-3 .trainer", 3, { x: 0, ease: "none" });
        gsap.to("#screen-3 .trainer-head", 0.5, {
            rotate: -5,
            transformOrigin: "bottom",
            yoyo: true,
            repeat: 6,
        });
        gsap.to("#screen-3 .participant-3-hair", 3, {
            scale: 1.02,
            rotate: -5,
            repeat: -1,
            transformOrigin: "top left",
            yoyo: true,
        });
    }

    // let tlManBlink = new TimelineMax({});
    // tlManBlink.from("#screen-3 .avatar-" + avatarNum + " .eye", 0.3, { scaleY: 0.3, transformOrigin: "bottom", yoyo: true, ease: "power1.inOut" });

    // function manBlink() {
    //     tlManBlink.restart();
    //     TweenLite.delayedCall(3, manBlink);
    // }

    // TweenLite.delayedCall(3, manBlink);

    //screen three question icon click funtion
    $("#screen-3 .ques-icon").on("click", function () {
        iconSelect.play();
        gsap.set("#quest-sec .screen3-question1", {
            visibility: "visible",
            left: "0%",
        });
        MTl.to("#screen-3 .wel-popup", 1, {
            opacity: 0,
            scale: 1,
            transformOrigin: "bottom right",
        })
            .to(
                "#screen-3 .other-laptop .upper",
                2, {
                scale: 1,
                transformOrigin: "bottom",
                ease: "power2.out",
                stagger: 0.2,
            },
                "-=1"
            )
            .to(
                "#screen-3 .avatar-" + avatarNum + " .laptop .upper",
                2, {
                scale: 1,
                transformOrigin: "bottom",
                ease: "power2.out",
                stagger: 0.2,
            },
                "-=2"
            )
            .to(
                "#screen-3 .avatar-" + avatarNum + " .right-hand", { duration: 2, rotate: -10, ease: "power2.out" },
                "-=2"
            )
            .to(
                "#screen-3 .avatar-" + avatarNum + " .right-hand .elbow", { duration: 2, rotate: -15, scaleX: 1, ease: "power2.out", y: 5 },
                "-=2"
            )
            .to("#screen-3 .avatar-" + avatarNum + " .right-hand", {
                duration: 2,
                rotate: 0,
                ease: "power2.out",
            })
            .to(
                "#screen-3 .avatar-" + avatarNum + " .right-hand .elbow", { duration: 2, rotate: 0, scaleX: 0.9, ease: "power2.out", y: 0 },
                "-=2"
            )
            .to("#screen-3 .avatar-" + avatarNum + " .right-hand .elbow", {
                duration: 0.3,
                rotate: -3,
                repeat: -1,
                yoyo: true,
                ease: "power2.in",
                y: 0,
            })
            .to("#screen-3 .avatar-" + avatarNum + " .left-hand .elbow", {
                duration: 0.3,
                rotate: -3,
                repeat: -1,
                yoyo: true,
                ease: "power2.in",
                y: 0,
            })
            .to("#quest-sec", 1, { right: "-70vw", ease: "power4.out" }, "-=4")
            .to("#screen-container", 1, { width: "70vw", ease: "power4.out" }, "-=1")
            .to(
                "#screen-3", { duration: 1, left: "-18vw", width: "130%", ease: "power4.out" },
                "-=1"
            )
            .to("#screen-3 .ques-icon", 0.5, {
                opacity: 0,
                visibility: "hidden",
                onComplete: function () {
                    gsap.to("#mute-btn", 0, { visibility: "hidden" });
                },
            });
    });

    //screen 3 question and answer part
    let ans1 = "Customer Satisfaction";
    let ans2 = "Request to hold, explain the reason and wait time";
    let answered1 = false;
    let answered2 = false;
    let poptl1 = gsap.timeline();
    let poptl2 = gsap.timeline();

    //screen 3 qustion 1 click function
    $(".screen3-question1 .option").on("click", function () {
        let wrngPopNum = Math.floor(Math.random() * 6) + 1;
        let num = $(this).attr("data-num");
        if (!answered1) {
            if ($(this).children("text").attr("data-name") == ans1) {
                correctAnswer.play();
                answered1 = true;
                gsap.to(".screen3-question1 .option .background", 0.5, {
                    fill: "#e6e6e6",
                });
                gsap.to(".screen3-question1 .option text", 0.5, { fill: "#0e3e7c" });
                gsap.to(".screen3-question1 .option-" + num + " .background", 0.5, {
                    fill: "#739F2D",
                });
                gsap.to($(this).children("text"), 0.5, { fill: "#fff" });
                gsap.set("#screen-3 .right-popup.one", {
                    y: 0,
                    scale: 0,
                    transformOrigin: "bottom right",
                });
                poptl1.progress(0).clear();
                poptl1.to("#screen-3 .right-popup.one", 1, { scale: 1, opacity: 1 });
                poptl1.to(
                    "#screen-3 .right-popup.one .letters path",
                    0, { opacity: 1, stagger: 0.1 },
                    "-=0.5"
                );
                poptl1.to(
                    "#screen-3 .right-popup.one",
                    1, { scale: 0, opacity: 0 },
                    "+=1"
                );
                poptl1.to("#screen-3 .right-popup.one .letters path", 0, {
                    opacity: 0,
                });
                poptl1.to(
                    "#quest-sec .screen3-question1",
                    1, { opacity: 0, left: "30%" },
                    "-=3"
                );
                poptl1.to(
                    "#quest-sec .screen3-question2",
                    1, { left: "0%", opacity: 1 },
                    "-=2"
                );
            } else {
                wrongAnswer.play();
                gsap.to(".screen3-question1 .option .background", 0.5, {
                    fill: "#e6e6e6",
                });
                gsap.to(".screen3-question1 .option text", 0.5, { fill: "#0e3e7c" });
                gsap.to(".screen3-question1 .option-" + num + " .background", 0.5, {
                    fill: "red",
                });
                gsap.to($(this).children("text"), 0.5, { fill: "#fff" });
                gsap.set("#screen-3 .wrong-popup-" + wrngPopNum, {
                    y: 0,
                    scale: 0,
                    transformOrigin: "bottom right",
                });
                poptl1.progress(0).clear();
                poptl1.to("#screen-3 .wrong-popup-" + wrngPopNum, 1, {
                    scale: 1,
                    opacity: 1,
                });
                poptl1.to(
                    "#screen-3 .wrong-popup-" + wrngPopNum + " .letters path",
                    0, { opacity: 1, stagger: 0.1 },
                    "-=0.5"
                );
                poptl1.to(
                    "#screen-3 .wrong-popup-" + wrngPopNum,
                    1, { scale: 0, opacity: 0 },
                    "+=1"
                );
                poptl1.to(
                    "#screen-3 .wrong-popup-" + wrngPopNum + " .letters path",
                    0, { opacity: 0 }
                );
            }
        }
    });

    //screen 3 qustion 2 click function
    $(".screen3-question2 .option").on("click", function () {
        let wrngPopNum = Math.floor(Math.random() * 6) + 1;
        let num = $(this).attr("data-num");
        if (!answered2) {
            if ($(this).children("text").attr("data-name") == ans2) {
                correctAnswer.play();
                answered2 = true;
                gsap.to(".screen3-question2 .option .background", 0.5, {
                    fill: "#e6e6e6",
                });
                gsap.to(".screen3-question2 .option text", 0.5, { fill: "#0e3e7c" });
                gsap.to(".screen3-question2 .option-" + num + " .background", 0.5, {
                    fill: "#739F2D",
                });
                gsap.to($(this).children("text"), 0.5, { fill: "#fff" });
                gsap.set("#screen-3 .right-popup.two", {
                    y: 0,
                    scale: 0,
                    transformOrigin: "bottom right",
                });
                poptl2.progress(0).clear();
                poptl2.to("#screen-3 .right-popup.two", 1, { scale: 1, opacity: 1 });
                poptl2.to(
                    "#screen-3 .right-popup.two .letters path",
                    0, { opacity: 1, stagger: 0.1 },
                    "-=0.5"
                );
                poptl2.to(
                    "#screen-3 .right-popup.two",
                    1, { scale: 0, opacity: 0 },
                    "+=1"
                );
                poptl2.to("#screen-3 .right-popup.two .letters path", 0, {
                    opacity: 0,
                    onComplete: function () {
                        gsap.to("#mute-btn", 0, { visibility: "visible" });
                    },
                });
                poptl2.to("#quest-sec", 1, {
                    right: "-100vw",
                    ease: "power4.out",
                    delay: 0.5,
                });
                poptl2.to(
                    " #screen-container",
                    1, { width: "100vw", ease: "power4.out" },
                    "-=1"
                );
                poptl2.to(
                    "#screen-3", { duration: 1, left: "0vw", width: "100%", ease: "power4.out" },
                    "-=1"
                );
                poptl2.to("#calnder-pp", 1, {
                    opacity: 1,
                    visibility: "visible",
                    onComplete: function () {
                        calendarFlip.play();
                        calendarFlip.addEventListener("complete", function () {
                            poptl2.to("#calnder-pp", 1, { opacity: 0 });
                            poptl2.to("#calnder-pp", 0, { visibility: "hidden" });
                            poptl2.to("#screen-3 .congrats-popup", 1, {
                                opacity: 1,
                                scale: 1,
                                transformOrigin: "bottom right",
                            });
                            poptl2.to("#screen-3 .congrats-popup .letters path", 0, {
                                opacity: 1,
                                stagger: 0.05,
                            });
                            poptl2.to("#screen-3 .next", 1, {
                                opacity: 1,
                                visibility: "visible",
                            });
                        });
                    },
                });
            } else {
                wrongAnswer.play();
                gsap.to(".screen3-question2 .option .background", 0.5, {
                    fill: "#e6e6e6",
                });
                gsap.to(".screen3-question2 .option text", 0.5, { fill: "#0e3e7c" });
                gsap.to(".screen3-question2 .option-" + num + " .background", 0.5, {
                    fill: "red",
                });
                gsap.to($(this).children("text"), 0.5, { fill: "#fff" });
                gsap.set("#screen-3 .wrong-popup-" + wrngPopNum, {
                    y: 0,
                    scale: 0,
                    transformOrigin: "bottom right",
                });
                poptl2.progress(0).clear();
                poptl2.to("#screen-3 .wrong-popup-" + wrngPopNum, 1, {
                    scale: 1,
                    opacity: 1,
                });
                poptl2.to(
                    "#screen-3 .wrong-popup-" + wrngPopNum + " .letters path",
                    0, { opacity: 1, stagger: 0.1 },
                    "-=0.5"
                );
                poptl2.to(
                    "#screen-3 .wrong-popup-" + wrngPopNum,
                    1, { scale: 0, opacity: 0 },
                    "+=1"
                );
                poptl1.to(
                    "#screen-3 .wrong-popup-" + wrngPopNum + " .letters path",
                    0, { opacity: 0 }
                );
            }
        }
    });
}

//screen 3 next button click function
$("#screen-3 .next").on("click", function () {
    gsap.to(".screen-container", 1, { background: "#92AADD" });
    gsap.to("#screen-4 .avatar-" + avatarNum, 0, {
        opacity: 1,
        visibility: "visible",
    });
    tl.to("#screen-3", {
        duration: 2,
        left: "-100vw",
        width: "100%",
        ease: "power4.out",
    });
    tl.to(
        "#screen-4", {
        duration: 2,
        left: "0vw",
        ease: "power4.out",
        onComplete: function () {
            screen4();
        },
    },
        "-=2"
    );
});

//screen 4 mCustom scroller initialize
$(".chat-box").mCustomScrollbar({
    theme: "inset-dark",
    scrollButtons: { enable: true },
});

//screen 4 script
function screen4() {
    $(".user-side .pp-img img").attr(
        "src",
        "./svg/user-pp-" + avatarNum + ".svg"
    );

    //stars popup animation initializer
    let starPp = bodymovin.loadAnimation({
        container: document.getElementById("screen4-start-pp"),
        renderer: "svg",
        loop: false,
        autoplay: false,
        path: "json/screen4-star/data.json",
    });
    // screen 4 timeline
    let s4tl = gsap.timeline({ delay: 1 });

    //call icon bounce affect timeline
    let btnBnc = gsap.timeline();
    gsap.set("#screen-4 .emp-lptp-ln", { scaleX: 0 });
    gsap.to("#screen-4 .emp-lptp-ln", 2, {
        scaleX: 1,
        stagger: 2,
        repeat: -1,
        transformOrigin: "left",
    });
    gsap.to("#screen-4 .rth-emp-hnd", 0.5, {
        rotation: -2,
        yoyo: true,
        repeat: -1,
        transformOrigin: "bottom right",
    });
    gsap.to("#screen-4 .lft-emp-hnd", 0.5, {
        rotation: -3,
        yoyo: true,
        repeat: -1,
    });
    gsap.to("#screen-4 .show-pot .leaf", 3, {
        rotation: 3,
        transformOrigin: "bottom",
        yoyo: true,
        repeat: -1,
        ease: "power1.inOut",
        stagger: 0.4,
    });
    s4tl.to("#screen-4 .call-dot", 0.3, { opacity: 1, stagger: 0.3 });
    s4tl.to("#screen-4 .caller", 1, { opacity: 1 }, "+=0.1");
    s4tl.to("#screen-4 .cal-btn-sec", 1, { opacity: 1, visibility: "visible" });
    btnBnc.to("#screen-4 .call-btn", 1, {
        y: -5,
        ease: "bounce.in",
        repeat: -1,
        yoyo: true,
    });
    btnBnc.to("#screen-4 .incm-cl .cl-dts path", 0.5, {
        opacity: 1,
        repeat: -1,
        stagger: 0.5,
    });

    let tlManBlink = new TimelineMax({});
    tlManBlink.from("#screen-4 .avatar-" + avatarNum + " .eye", 0.3, {
        scaleY: 0.3,
        transformOrigin: "bottom",
        yoyo: true,
        ease: "power1.inOut",
    });

    function manBlink() {
        tlManBlink.restart();
        TweenLite.delayedCall(3, manBlink);
    }
    manBlink();

    //screen 4 call icon click function
    $("#screen-4 .call-btn").on("click", function () {
        gsap.to("#mute-btn", 0, { visibility: "hidden" });
        iconSelect.play();
        s4tl.to("#screen4-quest-sec", 1, { right: "0vw", ease: "power4.out" });
        s4tl.to(
            "#screen-container",
            1, { width: "70vw", ease: "power4.out" },
            "-=1"
        );
        s4tl.to(
            "#screen-container #screen-4",
            1, { width: "128%", left: "-28%", ease: "power4.out" },
            "-=1"
        );
        s4tl.to("#screen-4 .cal-btn-sec", 1, { opacity: 0, visibility: "hidden" });
        s4tl.to("#screen4-quest-sec", 1, { visibility: "visible" }, "-=1");
        s4tl.to("#screen4-quest-sec .chat-box .sec-1", 0, { display: "block" });
    });

    //screen 4 question section common function
    function s4QuestAns(ans, imgSrc, $this, sec) {
        if ($this.attr("data-ans") == ans) {
            correctAnswer.play();
            $("#screen4-quest-sec .notfcn .msg img").attr("src", imgSrc);
            s4tl.set($this, { background: "#28a745" }, "+=0.3");
            s4tl.to(
                "#screen4-quest-sec .notfcn .msg",
                0.5, { top: 5, ease: "back.out" },
                "+=0.5"
            );
            s4tl.to(
                $this,
                0, {
                background: "transparent",
                onComplete: function () {
                    $this.siblings("h4").css("display", "none");
                    $this.parents(sec).removeClass("clickable");
                    $this.siblings(".incorrect").css("display", "none");
                },
            },
                "+=2"
            );
            s4tl.to("#screen4-quest-sec .notfcn .msg", 0.5, {
                top: -300,
                ease: "back.in",
            });
        } else {
            wrongAnswer.play();
            $("#screen4-quest-sec .notfcn .msg img").attr(
                "src",
                "./svg/bst-rspns.svg"
            );
            s4tl.set($this, { background: "#ffc107" }, "+=0.3");
            s4tl.to(
                "#screen4-quest-sec .notfcn .msg",
                0.5, { top: 5, ease: "back.out" },
                "+=0.5"
            );
            s4tl.to($this, 0, { background: "transparent" }, "+=3");
            s4tl.to(
                $this.siblings(".correct"),
                0.5, {
                background: "#28a745",
                repeat: 5,
                yoyo: true,
                onComplete: function () {
                    $this.siblings("h4").css("display", "none");
                    $this.parents(sec).children(".incorrect").css("display", "none");
                    $this.parents(sec).removeClass("clickable");
                    $this.siblings(".correct").css("background", "transparent");
                },
            },
                "-=3"
            );
            s4tl.to("#screen4-quest-sec .notfcn .msg", 0.5, {
                top: -300,
                ease: "back.in",
            });
        }
    }
    let sec1Ans = {
        ans: "two",
        answered: false,
    };
    let sec3Ans = {
        ans: "two",
        answered: false,
    };
    let sec7Ans = {
        ans: "one",
        answered: false,
    };

    //screen 4 question 1 function
    $("#screen4-quest-sec .chat-box .sec-1 .optn").on("click", function () {
        let $this = $(this);
        if (!sec1Ans.answered) {
            s4QuestAns(sec1Ans.ans, "./svg/kp-gng.svg", $this, ".sec-1");
            s4tl.to(
                "#screen4-quest-sec .chat-box .sec-2",
                0, { display: "block" },
                "+=1"
            );
            s4tl.to(
                "#screen4-quest-sec .chat-box .sec-3",
                0, {
                display: "block",
                onComplete: function () {
                    $(".chat-box").mCustomScrollbar("scrollTo", "bottom", {
                        timeout: 300,
                    });
                },
            },
                "+=1"
            );
            // s4tl.to('#mCSB_1', 1, { scrollTop: objDiv.scrollHeight });
            // $("#screen4-quest-sec").mCustomScrollbar("update");
            sec1Ans.answered = true;
        }
    });

    //screen 4 question 2 function
    $("#screen4-quest-sec .chat-box .sec-3 .optn").on("click", function () {
        let $this = $(this);
        if (!sec3Ans.answered) {
            s4QuestAns(sec3Ans.ans, "./svg/kp-gng.svg", $this, ".sec-3");
            s4tl.to(
                "#screen4-quest-sec .chat-box .sec-4",
                0, {
                display: "block",
                onComplete: function () {
                    $(".chat-box").mCustomScrollbar("scrollTo", "bottom", {
                        timeout: 300,
                    });
                },
            },
                "+=1"
            );
            // s4tl.to('#mCSB_1', 1, { scrollTop: objDiv.scrollHeight });
            // $("#screen4-quest-sec").mCustomScrollbar("update");
            s4tl.to(
                "#screen4-quest-sec .chat-box .sec-5",
                0, {
                display: "block",
                onComplete: function () {
                    $(".chat-box").mCustomScrollbar("scrollTo", "bottom", {
                        timeout: 300,
                    });
                },
            },
                "+=1"
            );
            // s4tl.to('#mCSB_1', 1, { scrollTop: objDiv.scrollHeight });
            // $("#screen4-quest-sec").mCustomScrollbar("update");
            s4tl.to(
                "#screen4-quest-sec .chat-box .sec-6",
                0, {
                display: "block",
                onComplete: function () {
                    $(".chat-box").mCustomScrollbar("scrollTo", "bottom", {
                        timeout: 300,
                    });
                },
            },
                "+=1"
            );
            // s4tl.to('#mCSB_1', 1, { scrollTop: objDiv.scrollHeight });
            // $("#screen4-quest-sec").mCustomScrollbar("update");
            s4tl.to(
                "#screen4-quest-sec .chat-box .sec-7",
                0, {
                display: "block",
                onComplete: function () {
                    $(".chat-box").mCustomScrollbar("scrollTo", "bottom", {
                        timeout: 300,
                    });
                },
            },
                "+=1"
            );
            // s4tl.to('#mCSB_1', 1, { scrollTop: objDiv.scrollHeight });
            // $("#screen4-quest-sec").mCustomScrollbar("update");
            sec3Ans.answered = true;
        }
    });

    //screen 4 question 3 function
    $("#screen4-quest-sec .chat-box .sec-7 .optn").on("click", function () {
        let $this = $(this);
        // gsap.set('#screen-4 .str-gry-pp .bg-strs', { scale: 0, transformOrigin: 'bottom' })
        if (!sec7Ans.answered) {
            s4QuestAns(sec7Ans.ans, "./svg/pro-gng.svg", $this, ".sec-7");
            s4tl.to(
                "#screen4-quest-sec",
                1, { right: "-100vw", ease: "power4.out" },
                "+=1"
            );
            s4tl.to(
                "#screen-container",
                1, { width: "100vw", ease: "power4.out" },
                "-=1"
            );
            s4tl.to("#mute-btn", 1, { visibility: "visible" }, "-=1");
            s4tl.to(
                "#screen-container #screen-4",
                1, {
                width: "100%",
                left: "0%",
                ease: "power4.out",
            },
                "-=1"
            );
            sec7Ans.answered = true;
            s4tl.to("#screen4-start-pp", 0, { visibility: "visible" });
            s4tl.to("#screen-4 .caller", 1, { opacity: 0 });
            s4tl.to("#screen-4 .call-dot", 0.3, {
                opacity: 0,
                stagger: -0.3,
                onComplete: function () {
                    starPp.play();
                    starPopup.play();
                    starPp.addEventListener("complete", function () {
                        s4tl.to("#screen4-start-pp", 1, { opacity: 0 });
                        s4tl.to("#screen4-start-pp", 0, { visibility: "hidden" });
                        s4tl.to("#screen-4 .next", 1, {
                            opacity: 1,
                            visibility: "visible",
                        });
                    });

                    //screen 5 text animation initialize (initializing early to play it smooth)
                    cafeteriaText = bodymovin.loadAnimation({
                        container: document.getElementById("cafeteria-text"),
                        renderer: "svg",
                        loop: false,
                        autoplay: false,
                        path: "json/cafeteria-text/data.json",
                    });

                    //screen 5 walk animation initialize (initializing early to play it smooth)
                    cafeteriaWalk = bodymovin.loadAnimation({
                        container: document.getElementById("cafeteria-walk"),
                        renderer: "svg",
                        loop: false,
                        autoplay: false,
                        path: "json/cafeteria-walk/avatar-" + avatarNum + ".json",
                    });
                },
            });
            s4tl.to("#screen4-start-pp", 0.2, { opacity: 1 });

            // s4tl.to('#screen4-start-pp', 1, {
            //     opacity: 1, visibility: 'visible', onComplete: function () {

            //         starPp.play();
            //         starPp.addEventListener('complete', function () {
            //             s4tl.to('#screen4-start-pp', 1, { opacity: 0 })
            //             s4tl.to('#screen4-start-pp', 0, { visibility: 'hidden' })
            //             s4tl.to('#screen-4 .next', 1, { opacity: 1, visibility: 'visible' });
            //         })
            //     }
            // })
        }
    });
}

//screen 4 next button click function
$("#screen-4 .next").on("click", function () {
    gsap.to(".screen-container", 1, { background: "#92ddd1" });
    tl.to("#screen-4", {
        duration: 2,
        left: "-100vw",
        width: "100%",
        ease: "power4.out",
    });
    tl.to(
        "#screen-5", {
        duration: 2,
        left: "0vw",
        ease: "power4.out",
        onComplete: function () {
            screen5();
        },
    },
        "-=2"
    );
});

// screen 5 script
function screen5() {
    gsap.set($("#cafeteria-text"), { opacity: 0 });
    gsap.set($("#cafeteria-walk , #insta-selfi"), { visibility: "visible" });
    gsap.set($("#insta-selfi .mobile"), { scale: 0, transformOrigin: "center" });
    gsap.set($("#insta-selfi .pic-posted"), { transformOrigin: "center" });
    gsap.set(
        $("#insta-selfi .inner-tag .letters path , #insta-selfi .choose-your-tag"), { opacity: 0 }
    );
    gsap.set($(".coffee-drop"), { y: -10 });
    gsap.to($(".order-placer-hand"), 2, {
        rotate: 15,
        y: -5,
        x: 5,
        transformOrigin: "top left",
        repeat: -1,
        yoyo: true,
        ease: "none",
    });
    gsap.to($(".boy-hand"), 4, {
        rotate: 15,
        transformOrigin: "bottom",
        repeat: -1,
        yoyo: true,
        ease: "none",
    });
    gsap.to($(".girl-hand"), 4, {
        rotate: -10,
        transformOrigin: "bottom",
        repeat: -1,
        yoyo: true,
        ease: "none",
    });
    gsap.to($(".coffee-drop"), 2, { y: 10, repeat: -1 });

    //screen 5 timeline
    let tl5 = gsap.timeline();
    let outerTagClicked = false;

    //2 second time delay to start text animation in screen 5
    setTimeout(function () {
        gsap.to($("#cafeteria-text"), 1, { visibility: "visible", opacity: 1 });
        cafeteriaText.play();
    }, 2000);

    //screen 5 text animaiton on complete function
    cafeteriaText.addEventListener("complete", function () {
        tl5.to($("#cafeteria-text"), 1, {
            opacity: 0,
            onComplete: function () {
                cafeteriaWalk.play();
            },
        });
        tl5.to($("#cafeteria-text"), 0, { visibility: "hidden" });
    });

    let mobileAppeared = false;

    //screen 5 walk animation frame entry function (functionn trigger for every frame)
    //this funciton is written to enable mobile on frame 169/170/171
    cafeteriaWalk.addEventListener("enterFrame", function () {
        if (
            Math.floor(cafeteriaWalk.currentFrame) === 169 ||
            Math.floor(cafeteriaWalk.currentFrame) === 170 ||
            Math.floor(cafeteriaWalk.currentFrame) === 171
        ) {
            if (!mobileAppeared) {
                tl5.to($("#insta-selfi .mobile." + avatarNum), 0.5, {
                    opacity: 1,
                    visibility: "visible",
                    scale: 1,
                    transformOrigin: "center",
                    ease: "Back.out",
                });
                tl5.to("#insta-selfi .choose-your-tag", 0.5, { opacity: 1 });
                tl5.to($("#insta-selfi .outer-tag"), 0.5, {
                    opacity: 1,
                    visibility: "visible",
                    stagger: 0.5,
                    onComplete: function () {
                        //screen 5 outer tag click function
                        //on click of outer tag the tag inside mobile will appear
                        $("#insta-selfi .outer-tag").on("click", function () {
                            iconSelect.play();
                            if (!outerTagClicked) {
                                outerTagClicked = true;
                                let tagNum = $(this).attr("data-num");
                                gsap.to(
                                    $("#insta-selfi .outer-tag , #insta-selfi .choose-your-tag"),
                                    0.2, { opacity: 0, delay: 0.3 }
                                );
                                gsap.to($("#insta-selfi .outer-tag"), 0, {
                                    visibility: "hidden",
                                    delay: 1,
                                });
                                tl5.to(
                                    $("#insta-selfi .inner-tag." + tagNum),
                                    0.2, { opacity: 1, visibility: "visible" },
                                    "-=0.5"
                                );
                                tl5.to(
                                    $("#insta-selfi .inner-tag." + tagNum + " .letters path"),
                                    0.1, { opacity: 1, stagger: 0.1 }
                                );
                                tl5.to(
                                    $("#insta-selfi .send .bg"), { fill: "#2e599c" },
                                    "-=0.2"
                                );
                                tl5.to($("#insta-selfi .send"), { cursor: "pointer" }, "-=0.2");

                                $("#insta-selfi .send").on("click", function () {
                                    correctAnswer.play();
                                    tl5.to($("#insta-selfi .pic-posted"), 0.5, {
                                        opacity: 1,
                                        visibility: "visible",
                                        transformOrigin: "center",
                                        ease: "Back.out",
                                    });
                                    tl5.to($("#insta-selfi .next"), 0.5, {
                                        opacity: 1,
                                        visibility: "visible",
                                    });
                                });

                                //screen 9 first part animation initialization (initializing early for smooth animation)
                                awardRecognitionOne = bodymovin.loadAnimation({
                                    container: document.getElementById("award-recognition-one"),
                                    renderer: "svg",
                                    loop: true,
                                    autoplay: false,
                                    path: "json/award-recognition/avatar-" +
                                        avatarNum +
                                        "/data-01.json",
                                });
                                gsap.set($("#award-recognition-one"), {
                                    visibility: "visible",
                                });
                            }
                        });
                    },
                });
                mobileAppeared = true;
            }
        }
    });
}

//screen 5 next button click function
$("#insta-selfi .next").on("click", function () {
    gsap.to("#screen-6 .avatar-" + avatarNum, 0, {
        opacity: 1,
        visibility: "visible",
    });
    tl.to("#screen-5 , #cafeteria-walk , #insta-selfi", {
        duration: 2,
        left: "-100vw",
        width: "100%",
        ease: "power4.out",
    });
    tl.to(
        "#screen-6", {
        duration: 2,
        left: "0vw",
        ease: "power4.out",
        onComplete: function () {
            screen6();
        },
    },
        "-=2"
    );
});

let games;

//screen 6 script
function screen6() {
    gsap.set("#busycall-at-work , #screen-6-next-btn", { visibility: "visible" });
    gsap.set("#screen-6 .emp-lptp-ln", { scaleX: 0 });
    gsap.to("#screen-6 .emp-lptp-ln", 2, {
        scaleX: 1,
        stagger: 2,
        repeat: -1,
        transformOrigin: "left",
    });
    gsap.to("#screen-6 .rth-emp-hnd", 0.5, {
        rotation: -2,
        yoyo: true,
        repeat: -1,
        transformOrigin: "bottom right",
    });
    gsap.to("#screen-6 .lft-emp-hnd", 0.5, {
        rotation: -3,
        yoyo: true,
        repeat: -1,
    });
    gsap.to("#screen-6 .show-pot .leaf", 3, {
        rotation: 3,
        transformOrigin: "bottom",
        yoyo: true,
        repeat: -1,
        ease: "power1.inOut",
        stagger: 0.4,
    });

    //screen 6 client call popups animation initialization
    let busyAtCall = bodymovin.loadAnimation({
        container: document.getElementById("busycall-at-work"),
        renderer: "svg",
        loop: false,
        autoplay: false,
        path: "json/customer-call/data.json",
    });

    busyAtCall.setSpeed(1.2);
    setTimeout(function () {
        busyAtCall.play();
    }, 1000);

    let tlManBlink = new TimelineMax({});
    tlManBlink.from("#screen-6 .avatar-" + avatarNum + " .eye", 0.3, {
        scaleY: 0.3,
        transformOrigin: "bottom",
        yoyo: true,
        ease: "power1.inOut",
    });

    function manBlink() {
        tlManBlink.restart();
        TweenLite.delayedCall(3, manBlink);
    }
    manBlink();

    //screen 7 game animation initializtion (initializing early to play it smooth)
    games = bodymovin.loadAnimation({
        container: document.getElementById("screen-7-games"),
        renderer: "svg",
        loop: false,
        autoplay: false,
        path: "json/games/avatar-" + avatarNum + ".json",
    });

    //on complete of screen 6 client call animation enabling next button
    busyAtCall.addEventListener("complete", function () {
        gsap.to("#screen-6-next-btn .next", 0.5, {
            opacity: 1,
            visibility: "visible",
            delay: 0.5,
        });
        gsap.set($("#screen-7-games"), { visibility: "visible" });
    });
}

//screen 6 next button click function
$("#screen-6-next-btn .next").on("click", function () {
    gsap.to(".screen-container", 1, { background: "#90cbc2" });
    tl.to("#screen-6 , #busycall-at-work , #screen-6-next-btn", {
        duration: 2,
        left: "-100vw",
        width: "100%",
        ease: "power4.out",
    });
    tl.to(
        "#screen-7-games", {
        duration: 2,
        left: "0vw",
        ease: "power4.out",
        onComplete: function () {
            screen7();
        },
    },
        "-=2"
    );
});
let customerDelightAnimation;

//screen 7 script
function screen7() {
    gsap.set($("#screen-7-game-controls"), { visibility: "visible" });
    let gameNumber = 1;
    let gameScreenNext = true;

    gsap.set($("#screen-7-game-controls"), { visibility: "visible" });
    gsap.set($("#screen-7-games"), { visibility: "visible" });
    games.setSpeed(0.8);
    setTimeout(function () {
        games.play();
    }, 500);

    //game animation frame entry trgger function to handle loop of a game like carrom, TT, foosball
    let initButtonAppeared = false;
    games.addEventListener("enterFrame", function () {
        if (
            Math.floor(games.currentFrame) === 60 ||
            Math.floor(games.currentFrame) === 59
        ) {
            if (!initButtonAppeared) {
                games.pause();
                gsap.to($("#screen-7-game-controls .init-btn"), 0.5, {
                    opacity: 1,
                    visibility: "visible",
                });
            }
        }
        if (
            Math.floor(games.currentFrame) === 204 ||
            Math.floor(games.currentFrame) === 205
        ) {
            games.goToAndPlay(105, true);
        }
        if (
            Math.floor(games.currentFrame) === 324 ||
            Math.floor(games.currentFrame) === 325
        ) {
            games.goToAndPlay(228, true);
        }
        if (
            Math.floor(games.currentFrame) === 434 ||
            Math.floor(games.currentFrame) === 435
        ) {
            games.goToAndPlay(355, true);
        }
        if (
            Math.floor(games.currentFrame) === 559 ||
            Math.floor(games.currentFrame) === 560
        ) {
            games.goToAndPlay(465, true);
        }
        if (
            Math.floor(games.currentFrame) === 669 ||
            Math.floor(games.currentFrame) === 670
        ) {
            games.goToAndPlay(585, true);
        }
    });

    // game screen init button click function (on click screen moves carrom)
    $("#screen-7-game-controls .init-btn").on("click", function () {
        gameNextBack.play();
        gsap.to($("#screen-7-game-controls .init-btn"), 0.5, {
            visibility: "hidden",
            opacity: 0,
            onComplete: function () {
                games.goToAndPlay(61, true);
                gsap.to($("#screen-7-game-controls .next-btn"), 0.5, {
                    opacity: 1,
                    visibility: "visible",
                    delay: 1.5,
                });
            },
        });
        // if (isIE) {
        //     $('#screen-7-games').css('height', '99.99vh');
        // }
    });

    // game screen next button click function
    $("#screen-7-game-controls .next-btn").on("click", function () {
        gameNextBack.play();
        if (gameNumber === 1) {
            games.goToAndPlay(206, true);
            gsap.to($("#screen-7-game-controls .back-btn"), 0.5, {
                visibility: "visible",
                opacity: 1,
            });
            gameNumber = 2;
        } else if (gameNumber === 2) {
            games.goToAndPlay(326, true);
            gsap.to($("#screen-7-game-controls .next-btn"), 0.5, {
                visibility: "hidden",
                opacity: 0,
            });
            if (gameScreenNext) {
                gsap.to($("#screen-7-game-controls .next.main"), 0.5, {
                    visibility: "visible",
                    opacity: 1,
                });
                gameScreenNext = false;

                //screen 8 graph animation initialization (initializing early for smooth animation)
                gsap.set($("#customer-delight"), { visibility: "visible" });
                customerDelightAnimation = bodymovin.loadAnimation({
                    container: document.getElementById("customer-delight"),
                    renderer: "svg",
                    loop: false,
                    autoplay: false,
                    path: "json/customer-delight/avatar-" + avatarNum + ".json",
                });
                gsap.set($("#screen-8 .back-head"), { rotate: -5, x: -5 });
                gsap.set($("#screen-8 .back-leg"), { rotate: -5 });
                gsap.to($("#screen-8 .back-head"), 2, {
                    rotate: 5,
                    transformOrigin: "bottom",
                    repeat: -1,
                    yoyo: true,
                    stagger: 1,
                });
                gsap.to($("#screen-8 .back-leg"), 2, {
                    rotate: 5,
                    transformOrigin: "top-left",
                    repeat: -1,
                    yoyo: true,
                });
            }
            gameNumber = 3;
        }
    });

    // game screen back button click function
    $("#screen-7-game-controls .back-btn").on("click", function () {
        gameNextBack.play();
        if (gameNumber === 2) {
            games.goToAndPlay(561, true);
            gsap.to($("#screen-7-game-controls .back-btn"), 0.5, {
                visibility: "hidden",
                opacity: 0,
            });
            gameNumber = 1;
        } else if (gameNumber === 3) {
            games.goToAndPlay(436, true);
            gsap.to($("#screen-7-game-controls .next-btn"), 0.5, {
                visibility: "visible",
                opacity: 1,
            });
            gameNumber = 2;
        }
    });
}

//screen 7 next button click function
$("#screen-7-game-controls .next.main").on("click", function () {
    gsap.to(".screen-container", 1, { background: "#70B1CE" });
    tl.to("#screen-7-game-controls , #screen-7-games", {
        duration: 2,
        left: "-100vw",
        width: "100%",
        ease: "power4.out",
    });
    tl.to(
        "#screen-8 , #customer-delight", {
        duration: 2,
        left: "0vw",
        ease: "power4.out",
        onComplete: function () {
            screen8();
        },
    },
        "-=2"
    );
});

//screen 8 script
function screen8() {
    gsap.set($("#customer-delight-icon"), { visibility: "visible" });
    // gsap.to('#customer-delight', { duration: 2, left: '0vw', ease: 'power4.out' });

    customerDelightAnimation.setSpeed(0.8);
    setTimeout(function () {
        customerDelightAnimation.play();
    }, 1000);

    let iconAppeared = false;
    let nextButtonAppeared = false;

    //screen 8 graph animation frame entry trigger function to pause animation and to enable graph icon
    customerDelightAnimation.addEventListener("enterFrame", function () {
        if (
            Math.floor(customerDelightAnimation.currentFrame) === 79 ||
            Math.floor(customerDelightAnimation.currentFrame) === 80
        ) {
            if (!iconAppeared) {
                customerDelightAnimation.pause();
                gsap.to($("#customer-delight-icon .cd-icon"), 0.5, {
                    opacity: 1,
                    visibility: "visible",
                });
            }
        }
        if (
            Math.floor(customerDelightAnimation.currentFrame) === 199 ||
            Math.floor(customerDelightAnimation.currentFrame) === 200 ||
            Math.floor(customerDelightAnimation.currentFrame) === 201
        ) {
            if (!nextButtonAppeared) {
                gsap.to($("#customer-delight-icon .next.main"), 0.5, {
                    opacity: 1,
                    visibility: "visible",
                });
                nextButtonAppeared = true;
            }
        }
    });

    //screen 8 graph icon click function
    $("#customer-delight-icon .cd-icon").on("click", function () {
        iconSelect.play();
        gsap.to($("#customer-delight-icon .cd-icon"), 0.5, {
            visibility: "hidden",
            opacity: 0,
            onComplete: function () {
                customerDelightAnimation.goToAndPlay(81, true);
            },
        });
    });
}

//screen 8 next button click function
$("#customer-delight-icon .next.main").on("click", function () {
    awardRecognitionOne.play();
    tl.to("#screen-8 , #customer-delight , #customer-delight-icon", {
        duration: 2,
        left: "-100vw",
        width: "100%",
        ease: "power4.out",
    });
    tl.to(
        "#award-recognition-one", {
        duration: 2,
        left: "0vw",
        ease: "power4.out",
        onComplete: function () {
            screen9();
        },
    },
        "-=2"
    );
});

//screen 9 script
function screen9() {
    gsap.set(
        $(
            "#award-regognition-click-icon , #award-regognition-click-icon .collect-award"
        ), { visibility: "visible" }
    );
    gsap.set($("#award-recognition-two"), { opacity: 0 });
    gsap.set($("#award-recognition-three"), { opacity: 0 });
    let tl9 = gsap.timeline();
    let awardScreenNextAppeared = false;
    let collectAwardButton = false;
    // let buttonOn = false

    setTimeout(function () {
        gsap.to($("#award-regognition-click-icon .collect-award"), 0.2, {
            opacity: 1,
        });
    }, 2000);

    // awardRecognitionOne.addEventListener('enterFrame', function () {
    //     if (Math.floor(awardRecognitionOne.currentFrame) === 100 || Math.floor(awardRecognitionOne.currentFrame) === 101 || Math.floor(awardRecognitionOne.currentFrame) === 102) {
    //         if (!collectAwardButton) {
    //             gsap.to($('#award-regognition-click-icon .collect-award'), 0.2, { opacity: 1});
    //             collectAwardButton = true;
    //         }
    //     }
    // })

    awardRecognitionTwo.setSpeed(0.9);
    awardRecognitionThree.setSpeed(0.9);

    //screen 9 part two animation on complete funciton
    awardRecognitionTwo.addEventListener("complete", function () {
        gsap.to($("#team-lead"), 0, { visibility: "visible" });
        tl9.to("#award-recognition-one", 0.5, { visibility: "hidden", opacity: 0 });
        tl9.to(
            "#award-recognition-two",
            0.5, { visibility: "hidden", opacity: 0 },
            "-=0.5"
        );
        tl9.to(
            "#award-recognition-three",
            0.5, {
            visibility: "visible",
            opacity: 1,
            onComplete: function () {
                awardRecognitionThree.play();
            },
        },
            "-=0.5"
        );
    });

    //screen 9 part three animation on complete funciton
    awardRecognitionThree.addEventListener("loopComplete", function () {
        if (!awardScreenNextAppeared) {
            gsap.to("#award-regognition-click-icon .next.main", 0.5, {
                visibility: "visible",
                opacity: 1,
            });
            awardScreenNextAppeared = true;
        }
    });

    //sccreen 9 collect your award button click function
    $("#award-regognition-click-icon .collect-award").on("click", function () {
        next.play();
        tl9.to($("#award-regognition-click-icon .collect-award"), 0.5, {
            opacity: 0,
            onComplete: function () {
                tl9.to("#award-regognition-click-icon .collect-award", 0, {
                    visibility: "hidden",
                });
                tl9.to("#award-recognition-two", 0.5, {
                    visibility: "visible",
                    opacity: 1,
                });
                awardRecognitionOne.pause();
                awardRecognitionTwo.play();
                awardPopup.play();
            },
        });
    });
}

//screen 9 next button click function
$("#award-regognition-click-icon .next.main").on("click", function () {
    gsap.to(".screen-container", 1, { background: "#92e3ff" });
    tl.to("#award-regognition-click-icon , #award-recognition-three", {
        duration: 2,
        left: "-100vw",
        width: "100%",
        ease: "power4.out",
    });
    tl.to(
        "#team-lead", {
        duration: 2,
        left: "0vw",
        ease: "power4.out",
        onComplete: function () {
            screen10();
        },
    },
        "-=2"
    );
});

//screen 10 script
function screen10() {
    gsap.to("#team-lead-next-btn", 1, { visibility: "visible" });
    gsap.set("#team-lead-endtext", { visibility: "visible", opacity: 0 });

    //screen 10 text animation initialization
    let teamLeadEndText = bodymovin.loadAnimation({
        container: document.getElementById("team-lead-endtext"),
        renderer: "svg",
        loop: false,
        autoplay: false,
        path: "json/team-lead-endtext/data.json",
    });

    setTimeout(function () {
        teamLead.play();
    }, 1000);

    //screen 10 temalead animation on complete function
    teamLead.addEventListener("complete", function () {
        gsap.to(" #team-lead-endtext", 0.5, {
            opacity: 1,
            onComplete: function () {
                teamLeadEndText.play();

                //screen 11 airport background animation initialization (initializing early for smooth animation)
                gsap.set($("#airport-background-animation"), { visibility: "visible" });
                airportBackgroundAnimation = bodymovin.loadAnimation({
                    container: document.getElementById("airport-background-animation"),
                    renderer: "svg",
                    loop: true,
                    autoplay: false,
                    path: "json/airport-background/data.json",
                });
            },
        });
    });

    //screen 10 text aimation on complete function
    teamLeadEndText.addEventListener("complete", function () {
        gsap.to(" #team-lead-endtext", 0.5, { opacity: 0 });
        gsap.to(" #team-lead-endtext", 0, { visibility: "visible" });
        gsap.to(" #team-lead-next-btn .next", 0.5, {
            opacity: 1,
            visibility: "visible",
            delay: 0.5,
        });
    });
}

//screen 10 next button click function
$("#team-lead-next-btn .next").on("click", function () {
    tl.to("#team-lead , #team-lead-next-btn", {
        duration: 2,
        left: "-100vw",
        width: "100%",
        ease: "power4.out",
    });
    tl.to(
        "#airport-background-animation", {
        duration: 2,
        left: "0vw",
        ease: "power4.out",
        onComplete: function () {
            screen11();
        },
    },
        "-=2"
    );
});

//screen 11 script
function screen11() {
    gsap.set($("#airport-animation , #airport-next-btn"), {
        visibility: "visible",
    });

    airportBackgroundAnimation.setSpeed(0.8);
    airportBackgroundAnimation.play();

    setTimeout(function () {
        airportWalkAnimation.play();
    }, 2000);

    let airportNextButtonAppeared = false;

    //screen 11 walk animation frame entry function to enable next buttom
    airportWalkAnimation.addEventListener("enterFrame", function () {
        if (
            Math.floor(airportWalkAnimation.currentFrame) === 199 ||
            Math.floor(airportWalkAnimation.currentFrame) === 200 ||
            Math.floor(airportWalkAnimation.currentFrame) === 201
        ) {
            if (!airportNextButtonAppeared) {
                gsap.to($(" #airport-next-btn .next"), 0.5, {
                    opacity: 1,
                    visibility: "visible",
                });
                airportNextButtonAppeared = true;
            }
        }
    });

    //screen 11 walk animation on complete function to enable next buttom (if frame entry falis to enable next button)
    airportWalkAnimation.addEventListener("complete", function () {
        gsap.to($(" #airport-next-btn .next"), 0.5, {
            opacity: 1,
            visibility: "visible",
        });
    });
}

//screen 11 next button click function
$("#airport-next-btn .next").on("click", function () {
    gsap.to(".screen-container", 1, { background: "#66CCFF" });
    gsap.to(".header .logo", 0, { display: "block" });
    tl.to(
        "#airport-background-animation , #airport-animation , #airport-next-btn", { duration: 2, left: "-100vw", width: "100%", ease: "power4.out" }
    );
    tl.to(
        "#screen-12", {
        duration: 2,
        left: "0vw",
        ease: "power4.out",
        onComplete: function () {
            screen12();
        },
    },
        "-=2"
    );
});

//screen 12 script
function screen12() {
    gsap.set("#screen-12 .show-pot .leaf", { rotation: 0 });
    gsap.to("#screen-12 .show-pot .leaf", 5, {
        rotation: 6,
        transformOrigin: "bottom",
        yoyo: true,
        repeat: -1,
        ease: "power1.inOut",
        stagger: 0.4,
    });
    gsap.set("#apply-now-animation , #apply-share-button", {
        visibility: "visible",
    });
    gsap.set("#apply-share-button .elements .child", { opacity: 0 });

    setTimeout(function () {
        applyNowWalk.play();
    }, 2000);

    //screen 12 walk animation frame entry function to enable content of the screen
    let textAppeared = false;
    applyNowWalk.addEventListener("enterFrame", function () {
        if (
            Math.floor(applyNowWalk.currentFrame) === 109 ||
            Math.floor(applyNowWalk.currentFrame) === 110 ||
            Math.floor(applyNowWalk.currentFrame) === 111
        ) {
            if (!textAppeared) {
                gsap.to("#apply-share-button .elements .child", 0.5, {
                    opacity: 1,
                    stagger: 0.2,
                    ease: Back.easeOut.config(2),
                });
                textAppeared = true;
            }
        }
    });

    //screen 12 walk animation on complete function to enable content of the screen (if frame entry fails)
    applyNowWalk.addEventListener("complete", function () {
        gsap.to("#apply-share-button .elements .child", 0.5, {
            opacity: 1,
            stagger: 0.2,
            ease: Back.easeOut.config(2),
        });
    });
}

//screen 12 apply now button click function
$("#apply-share-button .apply-btn").on("click", function () {
    next.play();
    window.open("https://www.joinhgs.com/jm/current-openings", "_blank");
});

//screen 12 subscribe button click function
$("#apply-share-button .subscribe-btn").on("click", function () {
    next.play();
    window.open("https://www.joinhgs.com/", "_blank");
});


//screen 12 social icon button click function
$("#apply-share-button .social-icon").on("click", function () {
    next.play();
    let media = $(this).attr("data-info");
    urlShare(media);
});

//screen 12 social share function
function urlShare(media) {
    var shareURL = "";
    var sharepagePath = window.location.href;

    if (media == "facebook") {
        shareURL = "https://www.facebook.com/sharer/sharer.php?u=" + sharepagePath;
        window.open(shareURL, "_blank", "height=600,width=314");
    } else if (media == "linkedin") {
        shareURL =
            "https://www.linkedin.com/shareArticle?mini=true&url=" + sharepagePath;
        window.open(shareURL, "_blank", "height=600,width=314");
    } else if (media == "twitter") {
        shareURL = "https://twitter.com/intent/tweet?url=" + sharepagePath;
        window.open(shareURL, "_blank", "height=600,width=314");
    } else if (media == "whatsapp") {
        var sText =
            "Live the journey of a contact center champ through this interactive virtual experience.";
        var sMsg =
            encodeURIComponent(sText) + " - " + encodeURIComponent(sharepagePath);
        var whatsapp_url = "https://api.whatsapp.com/send?text=" + sMsg;
        // window.location.href = whatsapp_url;
        window.open(whatsapp_url, "_blank");
    } else {
        return false;
    }
}

// sound script

$(".start , .next").on("click", function () {
    next.play();
});