// var url_string = window.location.href; //window.location.href
// var url = new URL(url_string);
// var urlNum = url.searchParams.get("avatar");
// let avatarNum ;
// if(urlNum!= null || urlNum === 'one' || urlNum === 'two' || urlNum === 'three' || urlNum === 'four' || urlNum === 'five' || urlNum === 'six'){
// avatarNum = urlNum;
// }else{
avatarNum = "one";
// }
gsap.set("#screen-12 .show-pot .leaf", { rotation: 0 });
gsap.to("#screen-12 .show-pot .leaf", 5, {
  rotation: 6,
  transformOrigin: "bottom",
  yoyo: true,
  repeat: -1,
  ease: "power1.inOut",
  stagger: 0.4,
});
gsap.set("#apply-now-animation , #apply-share-button", {
  visibility: "visible",
});
gsap.set("#apply-share-button .elements .child", { opacity: 0 });
let applyNow = bodymovin.loadAnimation({
  container: document.getElementById("apply-now-animation"),
  renderer: "svg",
  loop: false,
  autoplay: false,
  path: "json/apply-now/avatar-" + avatarNum + ".json",
});

setTimeout(function () {
  applyNow.play();
}, 5000);
let textAppeared = false;
applyNow.addEventListener("enterFrame", function () {
  if (
    Math.floor(applyNow.currentFrame) === 109 ||
    Math.floor(applyNow.currentFrame) === 110 ||
    Math.floor(applyNow.currentFrame) === 111
  ) {
    if (!textAppeared) {
      gsap.to("#apply-share-button .elements .child", 0.5, {
        opacity: 1,
        stagger: 0.2,
        ease: Back.easeOut.config(2),
      });
      textAppeared = true;
    }
  }
});

// $(document).ready(function () {
//        $(document).on("click", '.apply-btn', function () {
//         //   if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
//         var sText = "Live the journey of a contact center champ through this interactive virtual experience.";
//             var sUrl = window.location.href;
//             var sMsg = encodeURIComponent(sText) + " - " + encodeURIComponent(sUrl);
//             var whatsapp_url = "https://api.whatsapp.com/send?text=" + sMsg;
//             window.location.href = whatsapp_url;
//         //  }
//       });
//     });

$("#apply-share-button .apply-btn").on("click", function () {
  window.open("https://www.joinhgs.com/in/current-openings", "_blank");
});

$("#apply-share-button .subscribe-btn").on("click", function () {
  window.open("https://www.joinhgs.com/", "_blank");
});

$("#apply-share-button .social-icon").on("click", function () {
  let media = $(this).attr("data-info");
  urlShare(media);
});

function urlShare(media) {
  var shareURL = "";
  var sharepagePath = window.location.href;

  if (media == "facebook") {
    shareURL = "https://www.facebook.com/sharer/sharer.php?u=" + sharepagePath;
    window.open(shareURL, "_blank", "height=600,width=314");
  } else if (media == "linkedin") {
    shareURL =
      "https://www.linkedin.com/shareArticle?mini=true&url=" + sharepagePath;
    window.open(shareURL, "_blank", "height=600,width=314");
  } else if (media == "twitter") {
    shareURL = "https://twitter.com/intent/tweet?url=" + sharepagePath;
    window.open(shareURL, "_blank", "height=600,width=314");
  } else if (media == "whatsapp") {
    var sText =
      "Live the journey of a contact center champ through this interactive virtual experience.";
    var sMsg =
      encodeURIComponent(sText) + " - " + encodeURIComponent(sharepagePath);
    var whatsapp_url = "https://api.whatsapp.com/send?text=" + sMsg;
    // window.location.href = whatsapp_url;
    window.open(whatsapp_url, "_blank");
  } else {
    return false;
  }
}
