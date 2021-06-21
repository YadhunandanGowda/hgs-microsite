// paceOptions = {
//     ajax: true,
//     document: true,
//     eventLag: false
//   };
  
//   Pace.on('done', function() {
//     $('#preloader').delay(500).fadeOut(800);
//   });

//   https://codepen.io/ahsanrathore/pen/MwppEB

var url_string = window.location.href; //window.location.href
var url = new URL(url_string);
var urlNum = url.searchParams.get("avatar");
let avatarNum ;
if(urlNum!= null || urlNum === 'one' || urlNum === 'two' || urlNum === 'three' || urlNum === 'four' || urlNum === 'five' || urlNum === 'six'){
avatarNum = urlNum;
}else{
    avatarNum  = 'one';
}

gsap.to("#screen-6 .avatar-"+avatarNum, 0, { opacity:1 , visibility: 'visible'});
gsap.set('#busycall-at-work , #screen-6-next-btn', { visibility:'visible'});
gsap.set('#screen-6 .emp-lptp-ln', { scaleX: 0 });
gsap.to('#screen-6 .emp-lptp-ln', 2, { scaleX: 1, stagger: 2, repeat: -1, transformOrigin: 'left' });
gsap.to('#screen-6 .rth-emp-hnd', 0.5, { rotation: -2, yoyo: true, repeat: -1, transformOrigin: 'bottom right' });
gsap.to('#screen-6 .lft-emp-hnd', 0.5, { rotation: -3, yoyo: true, repeat: -1 });
gsap.to('#screen-6 .show-pot .leaf', 3, { rotation: 3, transformOrigin: 'bottom', yoyo: true, repeat: -1, ease: 'power1.inOut', stagger: 0.4 });
// gsap.from('#screen-6 .avatar-head', 3, {rotate: 5, transformOrigin: "bottom", yoyo: true, ease: "power1.inOut", repeat: -1 });

let busyAtCall = bodymovin.loadAnimation({
    container: document.getElementById('busycall-at-work'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'json/customer-call/data.json'
});

busyAtCall.setSpeed(1.2);
setTimeout(function(){
    busyAtCall.play() }, 1000);

let tlManBlink = new TimelineMax({});
let tlManTalk = new TimelineMax({});
tlManBlink.from("#screen-6 .avatar-"+avatarNum+" .eye", 0.3, { scaleY: 0.3, transformOrigin: "bottom", yoyo: true, ease: "power1.inOut"});
// tlManTalk.from('.avathr-head .mouth', 0.3, { scaleY: 0.3, transformOrigin: "center", yoyo: true, ease: "power1.inOut"});

function manBlink() {
    tlManBlink.restart();
    TweenLite.delayedCall(3, manBlink);
}
// function manTalk() {
//     tlManTalk.restart();
//     TweenLite.delayedCall(0.5, manTalk);
// }
manBlink();
// manTalk();

busyAtCall.addEventListener('complete', function(){
    gsap.to('#screen-6-next-btn .next', 0.5,{opacity:1, visibility: 'visible', delay:0.5})
})