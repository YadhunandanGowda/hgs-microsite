
var url_string = window.location.href; //window.location.href
var url = new URL(url_string);
var urlNum = url.searchParams.get("avatar");
let avatarNum ;
if(urlNum!= null || urlNum === 'one' || urlNum === 'two' || urlNum === 'three' || urlNum === 'four' || urlNum === 'five' || urlNum === 'six'){
avatarNum = urlNum;
}else{
    avatarNum  = 'one';
}
    
gsap.set($('#cafeteria-text'), { opacity: 0 })
gsap.set($('#cafeteria-walk , #insta-selfi'), { visibility: 'visible' })
gsap.set($('#insta-selfi .mobile'), { scale: 0, transformOrigin: 'center' })
gsap.set($('#insta-selfi .pic-posted'), { transformOrigin: 'center' })
gsap.set($("#insta-selfi .inner-tag .letters path , #insta-selfi .choose-your-tag"), { opacity: 0 })
gsap.set($('.coffee-drop'), { y: -10 })
gsap.to($('.order-placer-hand'), 2, { rotate: 15, y: -5, x: 5, transformOrigin: 'top left', repeat: -1, yoyo: true, ease: 'none' })
gsap.to($('.boy-hand'), 4, { rotate: 15, transformOrigin: 'bottom', repeat: -1, yoyo: true, ease: 'none' })
gsap.to($('.girl-hand'), 4, { rotate: -10, transformOrigin: 'bottom', repeat: -1, yoyo: true, ease: 'none' })
gsap.to($('.coffee-drop'), 2, { y: 10, repeat: -1 })
let tl5 = gsap.timeline();
let outerTagClicked = false;

let cafeteriaText = bodymovin.loadAnimation({
    container: document.getElementById('cafeteria-text'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: "json/cafeteria-text/data.json"
});

let cafeteriaWalk = bodymovin.loadAnimation({
    container: document.getElementById('cafeteria-walk'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: "json/cafeteria-walk/avatar-" + avatarNum + ".json"
});

setTimeout(function () {
    gsap.to($('#cafeteria-text'), 1, { visibility: 'visible', opacity: 1 })
    cafeteriaText.play();
}, 2000);


cafeteriaText.addEventListener('complete', function () {
    tl5.to($('#cafeteria-text'), 1, {
        opacity: 0, onComplete: function () {
            cafeteriaWalk.play()
        }
    })
    tl5.to($('#cafeteria-text'), 0, { visibility: 'hidden' })
})
let mobileAppeared = false;
cafeteriaWalk.addEventListener('enterFrame', function () {
    if (Math.floor(cafeteriaWalk.currentFrame) === 169 || Math.floor(cafeteriaWalk.currentFrame) === 170 || Math.floor(cafeteriaWalk.currentFrame) === 171) {
        if(!mobileAppeared) {
            tl5.to($("#insta-selfi .mobile." + avatarNum), 0.5, { opacity: 1, visibility: 'visible', scale: 1, transformOrigin: 'center', ease: 'Back.out' })
            tl5.to('#insta-selfi .choose-your-tag', 0.5,{opacity: 1})
            tl5.to($('#insta-selfi .outer-tag'), 0.5, { opacity: 1, visibility: 'visible', stagger: 0.5, onComplete: function(){
                $('#insta-selfi .outer-tag').on('click', function () {
                    if (!outerTagClicked) {
                        outerTagClicked = true;
                        let tagNum = $(this).attr('data-num');
                        gsap.to($('#insta-selfi .outer-tag , #insta-selfi .choose-your-tag'), 0.2, { opacity: 0, delay: 0.3 })
                        gsap.to($('#insta-selfi .outer-tag'), 0, { visibility: 'hidden', delay: 1 })
                        tl5.to($("#insta-selfi .inner-tag." + tagNum), 0.2, { opacity: 1, visibility: 'visible' }, '-=0.5')
                        tl5.to($("#insta-selfi .inner-tag." + tagNum + " .letters path"), 0.1, { opacity: 1, stagger: 0.1 })
                        tl5.to($('#insta-selfi .send .bg'), { fill: '#2e599c' }, '-=0.2')
                        tl5.to($('#insta-selfi .send'), { cursor: 'pointer' }, '-=0.2')
                
                        $('#insta-selfi .send').on('click', function () {
                            tl5.to($('#insta-selfi .pic-posted'), 0.5, { opacity: 1, visibility: 'visible', transformOrigin: 'center', ease: 'Back.out' })
                            tl5.to($('#insta-selfi .next'), 0.5, { opacity: 1, visibility: 'visible' })
                        })
                    }
                })
            } })
            mobileAppeared = true;
        }
    }
})