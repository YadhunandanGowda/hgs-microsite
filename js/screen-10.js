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
let country_code = "IN";
let teamLeadEndText;
let teamLeadTextPath = "json/team-lead-endtext/data.json";
// $.getJSON("http://ipinfo.io/", function (data) {
//   country_code = data.country;
// });

$(document).on("ready", function () {
  // $.getJSON("http://ip-api.com/json/", function (data) {
  //   country_code = data.country;
  //   alert(country_code);
  // });
  // navigator.geolocation.getCurrentPosition(function (position) {
  //   $.getJSON(
  //     "http://ws.geonames.org/countryCode",
  //     {
  //       lat: position.coords.latitude,
  //       lng: position.coords.longitude,
  //       type: "JSON",
  //     },
  //     function (result) {
  //       alert(result.countryName);
  //     }
  //   );
  // });
  // country_code = geoplugin_countryCode();
  // alert(country_code);
  // if (country_code === "US" || country_code === "CA") {
    // alert("hi");
    teamLeadTextPath = "json/team-lead-endtext/us-ca/data.json";
  // }
  teamLeadEndText = bodymovin.loadAnimation({
    container: document.getElementById("team-lead-endtext"),
    renderer: "svg",
    loop: false,
    autoplay: false,
    path: teamLeadTextPath,
  });
  teamLeadEndText.addEventListener("complete", function () {
    gsap.to(" #team-lead-endtext", 0.5, { opacity: 0 });
    gsap.to(" #team-lead-endtext", 0, { visibility: "visible" });
    gsap.to(" #team-lead-next-btn .next", 0.5, {
      opacity: 1,
      visibility: "visible",
      delay: 0.5,
    });
  });
});

gsap.set("#team-lead-next-btn", { visibility: "visible" });
gsap.set("#team-lead-endtext", { visibility: "visible", opacity: 0 });

let teamLead = bodymovin.loadAnimation({
  container: document.getElementById("team-lead"),
  renderer: "svg",
  loop: false,
  autoplay: false,
  path: "json/team-lead/us-ca/avatar-" + avatarNum + ".json",
});

// teamLead.addEventListener('data_ready', function(){
gsap.to($("#team-lead"), 1, { visibility: "visible", left: "0vw" });
setTimeout(function () {
  teamLead.play();
}, 1000);
// })

teamLead.addEventListener("complete", function () {
  gsap.to(" #team-lead-endtext", 0.5, {
    opacity: 1,
    onComplete: function () {
      teamLeadEndText.play();
    },
  });
});
