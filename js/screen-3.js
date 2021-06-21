// var url_string = window.location.href; //window.location.href
// var url = new URL(url_string);
// var urlNum = url.searchParams.get("avatar");
// let avatarNum ;
// if(urlNum!= null || urlNum === 'one' || urlNum === 'two' || urlNum === 'three' || urlNum === 'four' || urlNum === 'five' || urlNum === 'six'){
// avatarNum = urlNum;
// }else{
let avatarNum = "one";
// }
gsap.set("#screen-3 .other-laptop .upper , #screen-3 .laptop .upper", {
  scaleY: 0,
  opacity: 1,
  y: 80,
});
gsap.to("#screen-3 .avatar-" + avatarNum, 0, {
  opacity: 1,
  visibility: "visible",
});
gsap.set("#screen-3 .trainer-right-leg , .trainer-left-leg", { rotation: 3 });
gsap.set("#screen-3 .wel-popup", { scale: 0, transformOrigin: "bottom right" });
gsap.set("#screen-3 .congrats-popup", {
  scale: 0,
  transformOrigin: "bottom right",
});
gsap.set("#screen-3 .trainer", { x: 500, opacity: 1 });
gsap.set("#screen-3 .eye", { scaleY: 1 });

let calendarFlip = bodymovin.loadAnimation({
  container: document.getElementById("calnder-pp"),
  renderer: "svg",
  loop: false,
  autoplay: false,
  path: "json/screen3-calendar/data.json",
});

let isFirefox = typeof InstallTrigger !== "undefined";

let E0 = Sine.easeInOut,
  E1 = Sine.easeIn,
  E2 = Sine.easeOut;
gsap.set("#screen-3 .right-popup .letters path", { opacity: 0 });
gsap.set("#screen-3 .wrong-popup .letters path", { opacity: 0 });
gsap.set("#screen-3 .wel-popup .letters path", { opacity: 0 });
gsap.set("#screen-3 .congrats-popup .letters path", { opacity: 0 });

function M(p1, p2) {
  let tlm = gsap
    .timeline({ repeat: 2 })
    .add("l1", 0)
    .add("l2", 0.25)
    .add("l3", 0.5)
    .add("l4", 0.75)
    .add("l5", 1)
    .to(p1, 0.5, { rotation: -8, ease: E0 }, "l1")
    .to(p1, 0.25, { rotation: 3, ease: E1 }, "l3")
    .to(p1 + " .lower", 0.25, { rotation: -10, ease: E0, y: 5, x: -5 }, "l2")
    .to(p1 + " .lower", 0.25, { rotation: -20, ease: E1, y: 3, x: -3 }, "l3")
    .to(p1 + " .lower", 0.25, { rotation: 0, ease: E2, y: 0, x: 0 }, "l4")
    .to(p2, 0.5, { rotation: 15, ease: E0 }, "l1")
    .to(p2, 0.5, { rotation: 0, ease: E0 }, "l3")
    .to(
      p2 + " .elbow",
      0.5,
      { rotation: 15, ease: E0, x: 10, transformOrigin: "top" },
      "l1"
    )
    .to(
      p2 + " .elbow",
      0.5,
      { rotation: 0, ease: E0, x: 0, transformOrigin: "top" },
      "l3"
    );
  return tlm;
}

let MTl;
if (isFirefox) {
  MTl = gsap
    .timeline()
    .add(M("#screen-3 .trainer-right-leg", "#screen-3 .trainer-right-hand"))
    .add(M("#screen-3 .trainer-left-leg", "#screen-3 .trainer-left-hand"), 0.5)
    .to("#screen-3 .trainer-right-leg , #screen-3 .trainer-left-leg", 0.5, {
      rotation: 0,
    })
    .to(
      "#screen-3 .wel-popup",
      1,
      { opacity: 1, scale: 1, transformOrigin: "bottom right" },
      "-=0.5"
    )
    .to("#screen-3 .wel-popup .letters path", 0, { opacity: 1, stagger: 0.05 })
    .to("#screen-3 .ques-icon", 1, { opacity: 1, visibility: "visible" })
    .to(
      "#screen-3 .trainer-right-hand",
      1,
      { rotate: 30, y: -10, x: 10, transformOrigin: "top" },
      "-=1"
    )
    .to(
      "#screen-3 .trainer-right-hand .elbow",
      1,
      { rotate: 90, x: 35, y: 5, transformOrigin: "top" },
      "-=1"
    );

  // gsap.to('#screen-3 .head', 2, { rotate: 5, transformOrigin: 'bottom', repeat: -1, yoyo: true, ease: "none" });
  gsap.to("#screen-3 .leaf", 2, {
    rotate: 5,
    transformOrigin: "bottom",
    repeat: -1,
    yoyo: true,
    ease: "none",
    stagger: 0.2,
  });
  gsap.to("#screen-3 .trainer", 3, { x: 0, ease: "none" });
  gsap.to("#screen-3 .trainer-head", 0.5, {
    rotate: -5,
    transformOrigin: "bottom",
    yoyo: true,
    repeat: 6,
  });
  gsap.to("#screen-3 .participant-3-hair", 3, {
    scale: 1.02,
    rotate: -5,
    repeat: -1,
    transformOrigin: "top left",
    yoyo: true,
  });
} else {
  MTl = gsap
    .timeline()
    .add(M("#screen-3 .trainer-right-leg", "#screen-3 .trainer-right-hand"))
    .add(M("#screen-3 .trainer-left-leg", "#screen-3 .trainer-left-hand"), 0.5)
    .to("#screen-3 .trainer-right-leg , #screen-3 .trainer-left-leg", 0.5, {
      rotation: 0,
    })
    .to(
      "#screen-3 .wel-popup",
      1,
      { opacity: 1, scale: 1, transformOrigin: "bottom right" },
      "-=0.5"
    )
    .to("#screen-3 .wel-popup .letters path", 0, { opacity: 1, stagger: 0.05 })
    .to("#screen-3 .ques-icon", 1, { opacity: 1, visibility: "visible" })
    .to(
      "#screen-3 .trainer-right-hand",
      1,
      { rotate: 30, y: -10, x: 10, transformOrigin: "top" },
      "-=1"
    )
    .to(
      "#screen-3 .trainer-right-hand .elbow",
      1,
      { rotate: 90, x: 50, y: 30, transformOrigin: "top" },
      "-=1"
    );

  // gsap.to('#screen-3 .head', 2, { rotate: 5, transformOrigin: 'bottom', repeat: -1, yoyo: true, ease: "none" });
  gsap.to("#screen-3 .leaf", 2, {
    rotate: 5,
    transformOrigin: "bottom",
    repeat: -1,
    yoyo: true,
    ease: "none",
    stagger: 0.2,
  });
  gsap.to("#screen-3 .trainer", 3, { x: 0, ease: "none" });
  gsap.to("#screen-3 .trainer-head", 0.5, {
    rotate: -5,
    transformOrigin: "bottom",
    yoyo: true,
    repeat: 6,
  });
  gsap.to("#screen-3 .participant-3-hair", 3, {
    scale: 1.02,
    rotate: -5,
    repeat: -1,
    transformOrigin: "top left",
    yoyo: true,
  });
}

// let tlManBlink = new TimelineMax({});
// tlManBlink.from("#screen-3 .avatar-" + avatarNum + " .eye", 0.3, { scaleY: 0.3, transformOrigin: "bottom", yoyo: true, ease: "power1.inOut" });

// function manBlink() {
//     tlManBlink.restart();
//     TweenLite.delayedCall(3, manBlink);
// }

// TweenLite.delayedCall(3, manBlink);

$("#screen-3 .ques-icon").on("click", function () {
  gsap.set("#quest-sec .screen3-question1", {
    visibility: "visible",
    left: "0%",
  });
  MTl.to("#screen-3 .wel-popup", 1, {
    opacity: 0,
    scale: 1,
    transformOrigin: "bottom right",
  })
    .to(
      "#screen-3 .other-laptop .upper",
      2,
      { scale: 1, transformOrigin: "bottom", ease: "power2.out", stagger: 0.2 },
      "-=1"
    )
    .to(
      "#screen-3 .avatar-" + avatarNum + " .laptop .upper",
      2,
      { scale: 1, transformOrigin: "bottom", ease: "power2.out", stagger: 0.2 },
      "-=2"
    )
    .to(
      "#screen-3 .avatar-" + avatarNum + " .right-hand",
      { duration: 2, rotate: -10, ease: "power2.out" },
      "-=2"
    )
    .to(
      "#screen-3 .avatar-" + avatarNum + " .right-hand .elbow",
      { duration: 2, rotate: -15, scaleX: 1, ease: "power2.out", y: 5 },
      "-=2"
    )
    .to("#screen-3 .avatar-" + avatarNum + " .right-hand", {
      duration: 2,
      rotate: 0,
      ease: "power2.out",
    })
    .to(
      "#screen-3 .avatar-" + avatarNum + " .right-hand .elbow",
      { duration: 2, rotate: 0, scaleX: 0.9, ease: "power2.out", y: 0 },
      "-=2"
    )
    .to("#screen-3 .avatar-" + avatarNum + " .right-hand .elbow", {
      duration: 0.3,
      rotate: -3,
      repeat: -1,
      yoyo: true,
      ease: "power2.in",
      y: 0,
    })
    .to("#screen-3 .avatar-" + avatarNum + " .left-hand .elbow", {
      duration: 0.3,
      rotate: -3,
      repeat: -1,
      yoyo: true,
      ease: "power2.in",
      y: 0,
    })
    .to("#quest-sec", 1, { right: "-70vw", ease: "power4.out" }, "-=4")
    .to("#screen-container", 1, { width: "70vw", ease: "power4.out" }, "-=1")
    .to(
      "#screen-3",
      { duration: 1, left: "-18vw", width: "130%", ease: "power4.out" },
      "-=1"
    )
    .to("#screen-3 .ques-icon", 0.5, { opacity: 0, visibility: "hidden" });
});

let ans1 = "Customer Satisfaction";
let ans2 = "Request to hold, explain the reason and wait time";
let answered1 = false;
let answered2 = false;
let poptl1 = gsap.timeline();
let poptl2 = gsap.timeline();

$(".screen3-question1 .option").on("click", function () {
  let wrngPopNum = Math.floor(Math.random() * 6) + 1;
  let num = $(this).attr("data-num");
  if (!answered1) {
    if ($(this).children("text").attr("data-name") == ans1) {
      answered1 = true;
      gsap.to(".screen3-question1 .option .background", 0.5, {
        fill: "#e6e6e6",
      });
      gsap.to(".screen3-question1 .option text", 0.5, { fill: "#0e3e7c" });
      gsap.to(".screen3-question1 .option-" + num + " .background", 0.5, {
        fill: "#739F2D",
      });
      gsap.to($(this).children("text"), 0.5, { fill: "#fff" });
      gsap.set("#screen-3 .right-popup.one", {
        y: 0,
        scale: 0,
        transformOrigin: "bottom right",
      });
      poptl1.progress(0).clear();
      poptl1.to("#screen-3 .right-popup.one", 1, { scale: 1, opacity: 1 });
      poptl1.to(
        "#screen-3 .right-popup.one .letters path",
        0,
        { opacity: 1, stagger: 0.1 },
        "-=0.5"
      );
      poptl1.to(
        "#screen-3 .right-popup.one",
        1,
        { scale: 0, opacity: 0 },
        "+=1"
      );
      poptl1.to("#screen-3 .right-popup.one .letters path", 0, { opacity: 0 });
      poptl1.to(
        "#quest-sec .screen3-question1",
        1,
        { opacity: 0, left: "30%" },
        "-=3"
      );
      poptl1.to(
        "#quest-sec .screen3-question2",
        1,
        { left: "0%", opacity: 1 },
        "-=2"
      );
    } else {
      gsap.to(".screen3-question1 .option .background", 0.5, {
        fill: "#e6e6e6",
      });
      gsap.to(".screen3-question1 .option text", 0.5, { fill: "#0e3e7c" });
      gsap.to(".screen3-question1 .option-" + num + " .background", 0.5, {
        fill: "red",
      });
      gsap.to($(this).children("text"), 0.5, { fill: "#fff" });
      gsap.set("#screen-3 .wrong-popup-" + wrngPopNum, {
        y: 0,
        scale: 0,
        transformOrigin: "bottom right",
      });
      poptl1.progress(0).clear();
      poptl1.to("#screen-3 .wrong-popup-" + wrngPopNum, 1, {
        scale: 1,
        opacity: 1,
      });
      poptl1.to(
        "#screen-3 .wrong-popup-" + wrngPopNum + " .letters path",
        0,
        { opacity: 1, stagger: 0.1 },
        "-=0.5"
      );
      poptl1.to(
        "#screen-3 .wrong-popup-" + wrngPopNum,
        1,
        { scale: 0, opacity: 0 },
        "+=1"
      );
      poptl1.to("#screen-3 .wrong-popup-" + wrngPopNum + " .letters path", 0, {
        opacity: 0,
      });
    }
  }
});

$(".screen3-question2 .option").on("click", function () {
  let wrngPopNum = Math.floor(Math.random() * 6) + 1;
  let num = $(this).attr("data-num");
  if (!answered2) {
    if ($(this).children("text").attr("data-name") == ans2) {
      answered2 = true;
      gsap.to(".screen3-question2 .option .background", 0.5, {
        fill: "#e6e6e6",
      });
      gsap.to(".screen3-question2 .option text", 0.5, { fill: "#0e3e7c" });
      gsap.to(".screen3-question2 .option-" + num + " .background", 0.5, {
        fill: "#739F2D",
      });
      gsap.to($(this).children("text"), 0.5, { fill: "#fff" });
      gsap.set("#screen-3 .right-popup.two", {
        y: 0,
        scale: 0,
        transformOrigin: "bottom right",
      });
      poptl2.progress(0).clear();
      poptl2.to("#screen-3 .right-popup.two", 1, { scale: 1, opacity: 1 });
      poptl2.to(
        "#screen-3 .right-popup.two .letters path",
        0,
        { opacity: 1, stagger: 0.1 },
        "-=0.5"
      );
      poptl2.to(
        "#screen-3 .right-popup.two",
        1,
        { scale: 0, opacity: 0 },
        "+=1"
      );
      poptl2.to("#screen-3 .right-popup.two .letters path", 0, { opacity: 0 });
      poptl2.to("#quest-sec", 1, {
        right: "-100vw",
        ease: "power4.out",
        delay: 0.5,
      });
      poptl2
        .to(
          " #screen-container",
          1,
          { width: "100vw", ease: "power4.out" },
          "-=1"
        )
        .to(
          "#screen-3",
          { duration: 1, left: "0vw", width: "100%", ease: "power4.out" },
          "-=1"
        );
      poptl2.to("#calnder-pp", 1, {
        opacity: 1,
        visibility: "visible",
        onComplete: function () {
          // $('#calnder-pp .icon').addClass('calendar');
          // gsap.to($('#calnder-pp .ttll'), 0.2, { opacity: 1 })
          // setTimeout(() => {
          //     $('#calnder-pp .icon').removeClass('calendar');
          // }, 3000);
          calendarFlip.play();
          calendarFlip.addEventListener("complete", function () {
            poptl2.to("#calnder-pp", 1, { opacity: 0 });
            poptl2.to("#calnder-pp", 0, { visibility: "hidden" });
            poptl2.to("#screen-3 .congrats-popup", 1, {
              opacity: 1,
              scale: 1,
              transformOrigin: "bottom right",
            });
            poptl2.to("#screen-3 .congrats-popup .letters path", 0, {
              opacity: 1,
              stagger: 0.05,
            });
            poptl2.to("#screen-3 .next", 1, {
              opacity: 1,
              visibility: "visible",
            });
          });
        },
      });
    } else {
      gsap.to(".screen3-question2 .option .background", 0.5, {
        fill: "#e6e6e6",
      });
      gsap.to(".screen3-question2 .option text", 0.5, { fill: "#0e3e7c" });
      gsap.to(".screen3-question2 .option-" + num + " .background", 0.5, {
        fill: "red",
      });
      gsap.to($(this).children("text"), 0.5, { fill: "#fff" });
      gsap.set("#screen-3 .wrong-popup-" + wrngPopNum, {
        y: 0,
        scale: 0,
        transformOrigin: "bottom right",
      });
      poptl2.progress(0).clear();
      poptl2.to("#screen-3 .wrong-popup-" + wrngPopNum, 1, {
        scale: 1,
        opacity: 1,
      });
      poptl2.to(
        "#screen-3 .wrong-popup-" + wrngPopNum + " .letters path",
        0,
        { opacity: 1, stagger: 0.1 },
        "-=0.5"
      );
      poptl2.to(
        "#screen-3 .wrong-popup-" + wrngPopNum,
        1,
        { scale: 0, opacity: 0 },
        "+=1"
      );
      poptl1.to("#screen-3 .wrong-popup-" + wrngPopNum + " .letters path", 0, {
        opacity: 0,
      });
    }
  }
});
