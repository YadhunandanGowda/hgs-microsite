

gsap.set($('#game-controls'), {visibility:'visible'})
gsap.set($('#games'), {visibility:'visible'})
// let tl7 = gsap.timeline();
let gameNumber = 1;
let games = bodymovin.loadAnimation({
    container: document.getElementById('games'),
    renderer: 'svg',
    loop: true,
    autoplay: false,
    path: 'json/games/data.json'
});

games.setSpeed(0.8);
setTimeout(function(){ 
    games.play() }, 3000);
    let pass = true;

games.addEventListener('enterFrame', function(){    
    if(Math.floor(games.currentFrame) === 60 && pass){
        games.pause()
        gsap.to($('#game-controls .init-btn'), 0.5, { opacity: 1, visibility:'visible'})
        pass = false;
    }
    // if(Math.floor(games.currentFrame) === 205){
    //     games.goToAndPlay(105, true);
    // }
    // if(Math.floor(games.currentFrame) === 325){
    //     games.goToAndPlay(228, true);
    // }
    // if(Math.floor(games.currentFrame) === 435){
    //     games.goToAndPlay(355, true);
    // }
    // if(Math.floor(games.currentFrame) === 560){
    //     games.goToAndPlay(465, true);
    // }
    // if(Math.floor(games.currentFrame) === 670){
    //     games.goToAndPlay(585, true);
    // }
})

$('#game-controls .init-btn').on('click', function(){
    gsap.to($('#game-controls .init-btn'), 0.5, { visibility:'hidden', opacity: 0, onComplete: function(){
        // games.goToAndPlay(61, true);
        games.playSegments([105, 205], true);
        gsap.to($('#game-controls .next-btn'), 0.5, { opacity: 1, visibility:'visible', delay:1.5})
    }})
})


$('#game-controls .next-btn').on('click', function(){
    if(gameNumber === 1) {
        // games.goToAndPlay(206, true);
        games.playSegments([228, 325], true);
        gsap.to($('#game-controls .back-btn'), 0.5, { visibility:'visible', opacity: 1})
        gameNumber = 2;
    }
    else if(gameNumber === 2) {
        // games.goToAndPlay(326, true);
        games.playSegments([355, 435], true);
        gsap.to($('#game-controls .next-btn'), 0.5, { visibility:'hidden', opacity: 0})
        gameNumber = 3;
    }
})


$('#game-controls .back-btn').on('click', function(){
    if(gameNumber === 2) {
        // games.goToAndPlay(561, true);
        games.playSegments([585, 670], true);
        gsap.to($('#game-controls .back-btn'), 0.5, { visibility:'hidden', opacity: 0})
        gameNumber = 1;
    }
    else if(gameNumber === 3) {
        // games.goToAndPlay(436, true);
        games.playSegments([465, 560], true);
        gsap.to($('#game-controls .next-btn'), 0.5, { visibility:'visible', opacity: 1})
        gameNumber = 2;
    }
})