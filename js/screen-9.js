var url_string = window.location.href; //window.location.href
var url = new URL(url_string);
var urlNum = url.searchParams.get("avatar");
let avatarNum;
if (
  urlNum != null ||
  urlNum === "one" ||
  urlNum === "two" ||
  urlNum === "three" ||
  urlNum === "four" ||
  urlNum === "five" ||
  urlNum === "six"
) {
  avatarNum = urlNum;
} else {
  avatarNum = "one";
}

// gsap.to($('#screen9-sec'), 1, {visibility:'visible' , left:'0vw'})
gsap.set($("#award-regognition-click-icon"), { visibility: "visible" });
gsap.to($("#award-recognition-one"), 1, { visibility: "visible", left: "0vw" });
gsap.set($("#award-recognition-two"), { opacity: 0 });
gsap.set($("#award-recognition-three"), { opacity: 0 });
let tl9 = gsap.timeline();
let awardScreenNext = true;
// let buttonOn = false

let awardRecognitionOne = bodymovin.loadAnimation({
  container: document.getElementById("award-recognition-one"),
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "json/award-recognition/avatar-" + avatarNum + "/data-01.json",
});

setTimeout(function () {
  gsap.to($("#award-regognition-click-icon .collect-award"), 0.2, {
    opacity: 1,
    visibility: "visible",
  });
}, 1500);

// let awardRecognitionTwo;

// let awardRecognitionThree;

let awardRecognitionTwo = bodymovin.loadAnimation({
  container: document.getElementById("award-recognition-two"),
  renderer: "svg",
  loop: false,
  autoplay: false,
  path: "json/award-recognition/avatar-" + avatarNum + "/data-02.json",
});

let awardRecognitionThree = bodymovin.loadAnimation({
  container: document.getElementById("award-recognition-three"),
  renderer: "svg",
  loop: true,
  autoplay: false,
  path: "json/award-recognition/avatar-" + avatarNum + "/data-03.json",
});
awardRecognitionTwo.setSpeed(0.9);
awardRecognitionThree.setSpeed(0.9);

awardRecognitionTwo.addEventListener("complete", function () {
  tl9.to("#award-recognition-one", 0.5, { visibility: "hidden", opacity: 0 });
  tl9.to(
    "#award-recognition-two",
    0.5,
    { visibility: "hidden", opacity: 0 },
    "-=0.5"
  );
  tl9.to(
    "#award-recognition-three",
    0.5,
    {
      visibility: "visible",
      opacity: 1,
      onComplete: function () {
        awardRecognitionThree.play();
      },
    },
    "-=0.5"
  );
});

awardRecognitionThree.addEventListener("loopComplete", function () {
  if (awardScreenNext) {
    gsap.to("#award-regognition-click-icon .next.main", 0.5, {
      visibility: "visible",
      opacity: 1,
    });
    awardScreenNext = false;
  }
});

$("#award-regognition-click-icon .collect-award").on("click", function () {
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
    },
  });
});
