paceOptions = {
    ajax: true,
    document: true,
    eventLag: false
  };
  
  Pace.on('done', function() {
    $('#preloader').delay(500).fadeOut(800);
    $('.loader-sec').fadeOut(200);

    tl.from("#screen-1 .avatar", { duration: 1, x: 1500, ease: "power4.out", stagger: 0.2 });
    tl.to("#screen-1 .check-dot", { duration: 0.5, opacity: 1 }, '-=1.5');
    TweenMax.set("#screen-1 .window", { opacity: 1, x: 750 });
    TweenMax.set("#screen-1 .window .cloud", { x: -1050 });
    TweenMax.to("#screen-1 .window .cloud", 15, { x: -700, repeat: -1 });
  });


// screen 1 script
let avatarNum = '';

gsap.set("#screen-1 .avatar", { opacity: 1 });
gsap.set("#screen-1", { opacity: 1 });

let tl = gsap.timeline();



function screen1Click(avatarNum, a, b){
    TweenMax.to("#screen-1 .start", 0.2, { opacity: 1, visibility: 'visible' });
    a.parents(".avatar-container").find(".avatar").each(function (index, item) {
        if ($(item).attr("data-active") == "active") {
            $(item).attr("data-active", "");
        }
    });

    a.attr("data-active", "active");
    gsap.to("#screen-1 .avatar-container .avatar-set .check-dot .green-ccl", 0.5, { opacity: 0 });
    gsap.to("#screen-1 .avatar-container .avatar-set .avatar", 0.5, { scale: 1, y: 0 });
    gsap.to(".avatar .shoulder", 0.5, { rotate: 0, x: 0, y: 0, transformOrigin: 'top' });
    gsap.to(".avatar .elbow", 0.5, { rotate: 0, x: 0, y: 0, transformOrigin: 'top' });
    gsap.to(".avatar .elbow .thumb", 0.5, { opacity: 0 });
    gsap.to($(".avatar").siblings('.popup'), 0.5, { opacity: 0, scale: 0, transformOrigin: "bottom left"  });
    gsap.to(a, 0.5, { scale: 1.04, y: -24, ease: Back.easeOut });
    gsap.to(b, 0.5, { opacity: 1 });
    gsap.to($(".avatar-" + avatarNum).siblings('.popup'), 0.75, { opacity: 1, scale: 1, transformOrigin: "bottom left" });
    gsap.to(".avatar-" + avatarNum + " .shoulder", 0.75, { rotate: -10, transformOrigin: 'top' });
    gsap.to(".avatar-" + avatarNum + " .elbow", 0.75, { rotate: -100, x: 0, y: 8, transformOrigin: 'top' });
    gsap.to(".avatar-" + avatarNum + " .elbow .thumb", 0.75, { opacity: 1 });
}


$("#screen-1 .avatar-container .avatar-set .check-dot").on("click", function () {
    let $this = $(this);
    let child = $(this).children(".green-ccl");
    let sibl = $(this).siblings(".avatar");
    let elbow = $(this).siblings(".avatar").children('.elbow');
    let avatarNum = $(this).parents('.avatar-set').attr('data-avatar-num');

    
    screen1Click(avatarNum, sibl, child);
});

$("#screen-1 .avatar-container .avatar-set .avatar").on("click", function () {
    let sibl = $(this).siblings(".check-dot").children(".green-ccl");
    let $this = $(this);
    let avatarNum = $(this).parents('.avatar-set').attr('data-avatar-num');

    screen1Click(avatarNum, $this, sibl);
});

$("#screen-1 .avatar-container .avatar-set .avatar").on("mouseenter", function () {
    if (!($(this).attr('data-active') || $(this).attr('data-active') == 'active')) {
        TweenMax.to($(this), 0.5, { scale: 1.04, y: -24, ease: Back.easeOut });
    }
}).on('mouseleave', function () {
    if (!($(this).attr('data-active') || $(this).attr('data-active') == 'active')) {
        TweenMax.to($(this), 0.5, { scale: 1, y: 0, ease: Back.easeOut });
    }
});