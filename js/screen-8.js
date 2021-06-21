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
gsap.set($("#customer-delight-icon"), { visibility: "visible" });
gsap.set($("#customer-delight"), { visibility: "visible" });
gsap.to("#customer-delight", { duration: 2, left: "0vw", ease: "power4.out" });
gsap.set($(".back-head"), { rotate: -5, x: -5 });
gsap.set($(".back-leg"), { rotate: -5 });
gsap.to($(".back-head"), 2, {
  rotate: 5,
  transformOrigin: "bottom",
  repeat: -1,
  yoyo: true,
  stagger: 1,
});
gsap.to($(".back-leg"), 2, {
  rotate: 5,
  transformOrigin: "top-left",
  repeat: -1,
  yoyo: true,
});
let customerDelightAnimation = bodymovin.loadAnimation({
  container: document.getElementById("customer-delight"),
  renderer: "svg",
  loop: false,
  autoplay: false,
  path: "json/customer-delight/avatar-" + avatarNum + ".json",
});

customerDelightAnimation.setSpeed(0.8);
customerDelightAnimation.addEventListener("DOMLoaded", function () {
  setTimeout(function () {
    customerDelightAnimation.play();
  }, 2000);
});
let iconAppeared = false;
let nextButtonAppeared = false;
customerDelightAnimation.addEventListener("enterFrame", function () {
  if (Math.floor(customerDelightAnimation.currentFrame) === 80) {
    if (!iconAppeared) {
      customerDelightAnimation.pause();
      gsap.to($("#customer-delight-icon .cd-icon"), 0.5, {
        opacity: 1,
        visibility: "visible",
      });
      iconAppeared = true;
    }
  }
  if (Math.floor(customerDelightAnimation.currentFrame) === 200) {
    if (!nextButtonAppeared) {
      gsap.to($("#customer-delight-icon .next.main"), 0.5, {
        opacity: 1,
        visibility: "visible",
      });
      nextButtonAppeared = true;
    }
  }
});

$("#customer-delight-icon .cd-icon").on("click", function () {
  gsap.to($("#customer-delight-icon .cd-icon"), 0.5, {
    visibility: "hidden",
    opacity: 0,
    onComplete: function () {
      customerDelightAnimation.goToAndPlay(81, true);
    },
  });
});
