// var url_string = window.location.href; //window.location.href
// var url = new URL(url_string);
// var urlNum = url.searchParams.get("avatar");
// let avatarNum ;
// if(urlNum!= null || urlNum === 'one' || urlNum === 'two' || urlNum === 'three' || urlNum === 'four' || urlNum === 'five' || urlNum === 'six'){
// avatarNum = urlNum;
// }else{
let avatarNum = "six";
// }

// let tl7 = gsap.timeline();
let games = bodymovin.loadAnimation({
  container: document.getElementById("screen-7-games"),
  renderer: "svg",
  loop: false,
  autoplay: false,
  path: "json/games/avatar-" + avatarNum + ".json",
});

var isIE = /*@cc_on!@*/ false || !!document.documentMode;

// setTimeout(function(){
//     alert($('#screen-7-games').width());
// }, 3000)

let gameNumber = 1;
let gameScreenNext = true;
gsap.to("#screen-7-games", { duration: 2, left: "0vw", ease: "power4.out" });
gsap.set($("#screen-7-game-controls"), { visibility: "visible" });
gsap.set($("#screen-7-games"), { visibility: "visible" });
games.setSpeed(0.8);
setTimeout(function () {
  games.play();
}, 2000);

games.addEventListener("enterFrame", function () {
  if (Math.floor(games.currentFrame) === 60) {
    games.pause();
    gsap.to($("#screen-7-game-controls .init-btn"), 0.5, {
      opacity: 1,
      visibility: "visible",
    });
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

$("#screen-7-game-controls .init-btn").on("click", function () {
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
  if (isIE) {
    $("#screen-7-games").css("height", "99.99vh");
  }
});

$("#screen-7-game-controls .next-btn").on("click", function () {
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
    }
    gameNumber = 3;
  }
});

$("#screen-7-game-controls .back-btn").on("click", function () {
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
