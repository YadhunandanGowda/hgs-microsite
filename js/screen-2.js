$(document).on('ready', function() {
    var url_string = window.location.href; //window.location.href
    var url = new URL(url_string);
    var urlNum = url.searchParams.get("avatar");
    let avatarNum ;
    if(urlNum!= null || urlNum === 'one' || urlNum === 'two' || urlNum === 'three' || urlNum === 'four' || urlNum === 'five' || urlNum === 'six'){
    avatarNum = urlNum;
    }else{
     avatarNum  = 'one';
    }
    // console.log(c);
    // let avatarNum = 'two';

    let tl = gsap.timeline();
    let tlManBlink = new TimelineMax({});
    let tlWomenBlink = new TimelineMax({});
    tlManBlink.to("#screen-2 .avatar-" + avatarNum, 0, { opacity: 1, visibility: 'visible' });
    tlManBlink.from("#screen-2 .avatar-" + avatarNum + " .avatar-head .eye", 0.3, { scaleY: 0.3, transformOrigin: "bottom", yoyo: true, ease: "power1.inOut" });
    tlWomenBlink.from('#screen-2 .rec-head .eye', 0.3, { scaleY: 0.3, transformOrigin: "bottom", yoyo: true, ease: "power1.inOut" });


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
    gsap.set('#screen-2 .popup', { scale: 0, opacity: 1 , transformOrigin: "bottom right"});
    gsap.set('#screen-2 .avatar-head .eye, .rec-head .eye', { scaleY: 1 });
    gsap.set('#screen-2 .hello-msg path', { opacity: 0 });
    gsap.set('#screen-2 .show-pot .leaves .leaf', { rotation: -3, x: -20 });
    gsap.from('#screen-2 .avatar-head', 1, { rotate: 5, transformOrigin: "bottom", yoyo: true, ease: "power1.inOut", repeat: -1 });
    gsap.from('#screen-2 .rec-head .hair', 2, { rotate: 2, transformOrigin: "top left", yoyo: true, ease: "power1.inOut", repeat: -1 });
    gsap.to('#screen-2 .show-pot .leaves .leaf', 5, { rotation: 3, transformOrigin: 'bottom', yoyo: true, repeat: -1, ease: 'power1.inOut', stagger: 0.4 });
    tl.to('#screen-2 .popup', 1, { scale: 1, transformOrigin: "bottom right", ease: 'power4.out', delay: 1 });
    tl.to('#screen-2 .hello-msg path', 0, { opacity: 1, stagger: 0.1 });
    tl.to('#screen-2 .next', 1, { opacity: 1, visibility: 'visible' });
})