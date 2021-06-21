
    var url_string = window.location.href; //window.location.href
    var url = new URL(url_string);
    var urlNum = url.searchParams.get("avatar");
    let avatarNum ;
    if(urlNum!= null || urlNum === 'one' || urlNum === 'two' || urlNum === 'three' || urlNum === 'four' || urlNum === 'five' || urlNum === 'six'){
    avatarNum = urlNum;
    }else{
     avatarNum  = 'one';
    }
    gsap.to($('#airport-background-animation'), 1, {visibility:'visible', left:'0vw'})
gsap.set($('#airport-animation , #airport-next-btn'), {visibility:'visible'})
let airportAnimation = bodymovin.loadAnimation({
    container: document.getElementById('airport-animation'),
    renderer: 'svg',
    loop: false,
    autoplay: false,
    path: "json/airport-avatar/avatar-"+avatarNum+".json"
});


let airportBackgroundAnimation = bodymovin.loadAnimation({
    container: document.getElementById('airport-background-animation'),
    renderer: 'svg',
    loop: true,
    autoplay: false,
    path: 'json/airport-background/data.json'
});

airportBackgroundAnimation.setSpeed(0.8);
airportBackgroundAnimation.play()
setTimeout(function(){ 
    airportAnimation.play() }, 2000);

    
airportAnimation.addEventListener('enterFrame', function(){
    if (Math.floor(Math.floor(airportAnimation.currentFrame) === 199 || airportAnimation.currentFrame) === 200 || Math.floor(airportAnimation.currentFrame) === 201) {
        gsap.to($(' #airport-next-btn .next'),0.5, {opacity:1 , visibility: 'visible'})
    }
})
