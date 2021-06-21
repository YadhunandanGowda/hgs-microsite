
// $(".nano").nanoScroller({
//     scroll: 'bottom'
// });


// var url_string = window.location.href; //window.location.href
// var url = new URL(url_string);
// var urlNum = url.searchParams.get("avatar");
let avatarNum  = 'one';
// if(urlNum!= null || urlNum === 'one' || urlNum === 'two' || urlNum === 'three' || urlNum === 'four' || urlNum === 'five' || urlNum === 'six'){
// avatarNum = urlNum;
// }else{
//  avatarNum  = 'one';
// }

$(".chat-box").mCustomScrollbar({
    theme: "inset-dark",
    scrollButtons: {enable:true}
  });

  $('.user-side .pp-img img').attr('src', "./svg/user-pp-"+avatarNum+".svg");

let starPp = bodymovin.loadAnimation({
    container: document.getElementById('screen4-start-pp'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: 'json/screen4-star/data.json'
});
let s4tl = gsap.timeline({ delay: 1 });
let btnBnc = gsap.timeline();

gsap.to("#screen-4 .avatar-" + avatarNum, 0, { opacity: 1, visibility: 'visible' });
gsap.set('#screen-4 .emp-lptp-ln', { scaleX: 0 });
gsap.to('#screen-4 .emp-lptp-ln', 2, { scaleX: 1, stagger: 2, repeat: -1, transformOrigin: 'left' });
gsap.to('#screen-4 .rth-emp-hnd', 0.5, { rotation: -2, yoyo: true, repeat: -1, transformOrigin: 'bottom right' });
gsap.to('#screen-4 .lft-emp-hnd', 0.5, { rotation: -3, yoyo: true, repeat: -1 });
gsap.to('#screen-4 .show-pot .leaf', 3, { rotation: 3, transformOrigin: 'bottom', yoyo: true, repeat: -1, ease: 'power1.inOut', stagger: 0.4 });
s4tl.to('#screen-4 .call-dot', 0.3, { opacity: 1, stagger: 0.3 })
s4tl.to('#screen-4 .caller', 1, { opacity: 1 }, '+=0.1')
s4tl.to('#screen-4 .cal-btn-sec', 1, { opacity: 1, visibility: 'visible' })
btnBnc.to('#screen-4 .call-btn', 1, { y: -5, ease: 'bounce.in', repeat: -1, yoyo: true })
btnBnc.to('#screen-4 .incm-cl .cl-dts path', 0.5, { opacity: 1, repeat: -1, stagger: 0.5 })


let tlManBlink = new TimelineMax({});
tlManBlink.from("#screen-4 .avatar-" + avatarNum + " .eye", 0.3, { scaleY: 0.3, transformOrigin: "bottom", yoyo: true, ease: "power1.inOut" });

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

function s4QuestAns(ans, imgSrc, $this, sec) {
    if ($this.attr('data-ans') == ans) {
        $('#screen4-quest-sec .notfcn .msg img').attr('src', imgSrc);
        s4tl.set($this, { background: '#28a745' }, '+=0.0.3')
        s4tl.to('#screen4-quest-sec .notfcn .msg', 0.5, { top: 0, ease: 'back.out' }, '+=0.5')
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
        s4tl.set($this, { background: '#ffc107' }, '+=0.3')
        s4tl.to('#screen4-quest-sec .notfcn .msg', 0.5, { top: 0, ease: 'back.out' }, '+=0.5')
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
    ans: 'two',
    answered: false
}
let sec3Ans = {
    ans: 'two',
    answered: false
}
let sec7Ans = {
    ans: 'one',
    answered: false
}

// var objDiv = document.getElementById("mCSB_1");
$('#screen4-quest-sec .chat-box .sec-1 .optn').on('click', function () {
    let $this = $(this);
    if (!sec1Ans.answered) {
        s4QuestAns(sec1Ans.ans, './svg/kp-gng.svg', $this, '.sec-1')
        s4tl.to('#screen4-quest-sec .chat-box .sec-2', 0, { display: 'block' }, '+=1')
        s4tl.to('#screen4-quest-sec .chat-box .sec-3', 0, { display: 'block', onComplete: function(){
            $(".chat-box").mCustomScrollbar("scrollTo","bottom",{
                timeout:100
            });
        } }, '+=1')
        // s4tl.to('#mCSB_1', 1, { scrollTop: objDiv.scrollHeight });
        // $("#screen4-quest-sec").mCustomScrollbar("update");
        sec1Ans.answered = true;
    }
})


$('#screen4-quest-sec .chat-box .sec-3 .optn').on('click', function () {
    let $this = $(this);
    if (!sec3Ans.answered) {
        s4QuestAns(sec3Ans.ans, './svg/kp-gng.svg', $this, '.sec-3')
        s4tl.to('#screen4-quest-sec .chat-box .sec-4', 0, { display: 'block' , onComplete: function(){
            $(".chat-box").mCustomScrollbar("scrollTo","bottom",{
                timeout:100
            });
        } }, '+=1')
        // s4tl.to('#mCSB_1', 1, { scrollTop: objDiv.scrollHeight });
        // $("#screen4-quest-sec").mCustomScrollbar("update");
        s4tl.to('#screen4-quest-sec .chat-box .sec-5', 0, { display: 'block' , onComplete: function(){
            $(".chat-box").mCustomScrollbar("scrollTo","bottom",{
                timeout:100
            });
        }}, '+=1')
        // s4tl.to('#mCSB_1', 1, { scrollTop: objDiv.scrollHeight });
        // $("#screen4-quest-sec").mCustomScrollbar("update");
        s4tl.to('#screen4-quest-sec .chat-box .sec-6', 0, { display: 'block' , onComplete: function(){
            $(".chat-box").mCustomScrollbar("scrollTo","bottom",{
                timeout:100
            });
        }}, '+=1')
        // s4tl.to('#mCSB_1', 1, { scrollTop: objDiv.scrollHeight });
        // $("#screen4-quest-sec").mCustomScrollbar("update");
        s4tl.to('#screen4-quest-sec .chat-box .sec-7', 0, { display: 'block' , onComplete: function(){
            $(".chat-box").mCustomScrollbar("scrollTo","bottom",{
                timeout:100
            });
        }}, '+=1')
        // s4tl.to('#mCSB_1', 1, { scrollTop: objDiv.scrollHeight });
        // $("#screen4-quest-sec").mCustomScrollbar("update");
        sec3Ans.answered = true;
    }
})

$('#screen4-quest-sec .chat-box .sec-7 .optn').on('click', function () {
    let $this = $(this);
    // gsap.set('#screen-4 .str-gry-pp .bg-strs', { scale: 0, transformOrigin: 'bottom' })
    if (!sec7Ans.answered) {
        s4QuestAns(sec7Ans.ans, './svg/pro-gng.svg', $this, '.sec-7')
        s4tl.to('#screen4-quest-sec', 1, { right: '-100vw', ease: 'power4.out' }, '+=1')
        s4tl.to('#screen-container', 1, { width: '100vw', ease: 'power4.out' }, '-=1')
        s4tl.to('#screen-container #screen-4', 1, { width: '100%', left: '0%', ease: 'power4.out' , onComplete: function(){
            $(".chat-box").mCustomScrollbar("scrollTo","bottom",{
                timeout:100
            });
        }}, '-=1')
        // s4tl.to('#mCSB_1', 1, { scrollTop: objDiv.scrollHeight });
        // $("#screen4-quest-sec").mCustomScrollbar("update");
        sec7Ans.answered = true;
        s4tl.to('#screen4-start-pp', 0, {visibility: 'visible'})
        s4tl.to('#screen-4 .caller', 1, { opacity: 0 })
        s4tl.to('#screen-4 .call-dot', 0.3, { opacity: 0, stagger: -0.3 , onComplete: function(){
            starPp.play();
            starPp.addEventListener('complete', function () {
                s4tl.to('#screen4-start-pp', 1, { opacity: 0 })
                s4tl.to('#screen4-start-pp', 0, { visibility: 'hidden' })
                s4tl.to('#screen-4 .next', 1, { opacity: 1, visibility: 'visible' });
            })
        }})
        s4tl.to('#screen4-start-pp', 0.2, { opacity: 1})
        // s4tl.to('#screen-4 .str-gry-pp', 0.5, { opacity: 1, visibility: 'visible' })
        // s4tl.to('#screen-4 .str-gry-pp .bg-strs', 0.2, { opacity: 1, scale: 1, ease: 'power4.out', stagger: 0.2 })
        // s4tl.to('#screen-4 .str-gry-pp .sml-strs', 0.3, { opacity: 1, ease: 'power4.out' })
        // s4tl.to('#screen-4 .str-grt-jb .ltrs path', 0.2, { opacity: 1 })
        // s4tl.to('#screen-4 .str-gry-pp', 0.5, { opacity: 0, visibility: 'hidden' }, '+=4')
        // s4tl.to('#screen-4 .next', 1, { opacity: 1, visibility: 'visible' });

    }
})