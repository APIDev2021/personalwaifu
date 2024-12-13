// HEY YOU, ARE YOU CHEATING?? ~ ty alex for the idea <3 ~

var fairyaudio = new Audio("assets/secretfairycode.ogg"),
  spamtonAudio = new Audio("assets/spamton.ogg"),
  peppyAudio = new Audio("assets/doabarrellroll.ogg"),
  wiiAudio = new Audio("assets/wii.ogg"),
  fettyAudio = new Audio("assets/1738.ogg"),
  maxwellAudio = new Audio("assets/stockmarket.ogg"),
  vineAudio = new Audio("assets/vineboom.ogg"),
  bruhAudio = new Audio("assets/bruh.ogg"),
  uwuAudio = new Audio("assets/uwu.ogg"),
  f0rdAudio = new Audio("assets/f0rd.ogg"),
  boykisser = document.getElementById("kisser"),
  op = 1, // initial opacity
  indicator = this.document.getElementById("pee"),
  indicatorBK = this.document.getElementById("peeHolder"),
  cmarquee = this.document.querySelector("marquee"),
  reference = this.document.getElementById("reference");

let timeout,
  timer,
  typingStarted = false,
  fadeInProgress = false;

fairyaudio.volume = 0.25;
spamtonAudio.volume = 0.5;
peppyAudio.volume = 0.5;
wiiAudio.volume = 0.5;

// Display keypresses on <p id = "pee"></p>.. actually kinda proud of this one...

window.addEventListener(
  "keydown",
  function (e) {
    clearTimeout(timeout);
    clearInterval(timer);

    if (!typingStarted) {
      indicator.innerHTML = "> ";
      typingStarted = true;
    }

    indicator.innerHTML += `${e.key}`;

    // Smooth transition for fade-in
    if (!fadeInProgress) {
      fadeInProgress = true;
      let fadeOpacity = op;

      const fadeInInterval = setInterval(function () {
        if (fadeOpacity < 1) {
          fadeOpacity += 0.05;
          op = fadeOpacity;
          indicatorBK.style.opacity = fadeOpacity;
          indicatorBK.style.filter = "alpha(opacity=" + fadeOpacity * 100 + ")";
        } else {
          clearInterval(fadeInInterval);
          fadeInProgress = false;
        }
      }, 25);
    }

    // Initiate the fade-out process
    timeout = setTimeout(function () {
      fadeInProgress = false;
      timer = setInterval(function () {
        if (op <= 0.1) {
          clearInterval(timer);
          indicator.innerHTML = "";
          op = 0;
          typingStarted = false;
          document.querySelector("#fen").style.display = "none";
          kkeys = [];
        } else {
          op -= op * 0.1;
          indicatorBK.style.opacity = op;
          indicatorBK.style.filter = "alpha(opacity=" + op * 100 + ")";
        }
      }, 25);
    }, 1000);
  },
  true
);

if (window.addEventListener) {
  var kkeys = [],
    konami = "38,38,40,40,37,39,37,39,66,65",
    shoryuken = "39,40,40,39,80",
    aceAttorney = "39,37,40,39,65,65",
    secretfairy = "38,37,38,39,40,39,39",
    klonoa = "75,76,79,78,79,65",
    tails = "84,65,73,76,83",
    changed = "67,72,65,78,71,69,68",
    puro = "80,85,82,79",
    floppa = "70,76,79,80,80,65",
    fennec = "70,69,78,78,69,67",
    shoebill = "83,72,79,69,66,73,76,76",
    keldeo = "75,69,76,68,69,79",
    debug = "68,69,66,85,71",
    fetty = "49,55,51,56",
    bruh = "66,82,85,72",
    e621 = "69,54,50,49",
    e926 = "69,57,50,54",
    wii = "87,73,73",
    tunic = "84,85,78,73,67",
    barrelroll = [
      "66,65,82,82,69,76,82,79,76,76",
      "66,65,82,82,69,76,32,82,79,76,76",
      "68,79,65,66,65,82,82,69,76,82,79,76,76",
      "68,79,32,65,32,66,65,82,82,69,76,32,82,79,76,76",
    ],
    pacman = ["80,65,67,77,65,78", "80,65,67,32,77,65,78"],
    starwars = ["83,84,65,82,87,65,82,83", "83,84,65,82,32,87,65,82,83"],
    christmas = ["67,72,82,73,83,84,77,65,83", '"83,78,79,87"'],
    halloween = ["72,65,76,76,79,87,69,69,78", "83,80,79,79,75,89"],
    newyears = ["78,69,87,89,69,65,82,83", "78,69,87,32,89,69,65,82,83"],
    maxwell = [
      "77,65,88,87,69,76,76",
      "66,73,71,32,66,79,79,66,83",
      "66,73,71,66,79,79,66,83",
      "66,79,79,66,83",
    ],
    theugly = [
      "78,73,71,71,69,82",
      "78,73,71,71,65",
      "67,79,79,78",
      "70,65,71",
      "66,69,65,78,69,82",
      "68,73,75,69",
      "70,71,84",
    ],
    f0rd = ["70,85,67,75", "16,70,85,67,75", "70,85,75", "70,85,81"],
    uwu = ["85,87,85", "16,85,87,16,85"],
    owo = ["79,87,79", "16,79,87,16,79"],
    theTalk = "83,69,88",
    mirror = "77,73,82,82,79,82",
    kisser = [
      "66,79,89,83",
      "71,73,82,76,83",
      "66,79,89,75,73,83,83,69,82",
      "71,73,82,76,75,73,83,83,69,82",
      "75,73,83,83,73,78,71",
      "75,73,83,83,69,82",
      "77,69,78",
      "87,79,77,69,78",
    ],
    mountaindoor =
      "38,37,40,37,38,37,40,37,38,39,38,39,38,37,38,39,40,39,38,37,38,37,38,39,38,37,40,37,38,39,38,38,37,38,39,40,39,40,39,38,39,40,37,40,39,38,39,39,40,39,38,39,40,39,38,39,39,40,37,40,37,40,39,40,39,40,37,37,40,39,40,37,40,39,38,39,40,39,38,39,39,40,40,37,38,39,38,37,40,37,38,37,38,37,38,39,39,38,37,38";

  window.addEventListener("keydown", window_keyDown, true);
}

function window_keyDown(evt) {
  kkeys.push(evt.keyCode);

  if (kkeys.toString().indexOf(konami) >= 0) {
    indicator.style.color = "#00f700";
    kkeys = [];
    window.location = "https://en.wikipedia.org/wiki/Konami_Code";
  } else if (kkeys.toString().indexOf(secretfairy) >= 0) {
    var lala = document.getElementById("faries");
    lala.style.display = "inline";

    indicator.style.color = "#00f700";
    cmarquee.innerHTML = "well done :D";
    fairyaudio.play();
    kkeys = [];
    popup.style.display = "none";
    setTimeout(() => (window.location = "/404/FarShore/"), 8200);
  } else if (kkeys.toString().indexOf(shoryuken) >= 0) {
    indicator.style.color = "#00f700";
    kkeys = [];
    window.location =
      "https://www.youtube.com/watch?v=vpYdEjvAg3k&ab_channel=Djchamploo132";
  } else if (kkeys.toString().indexOf(mountaindoor) >= 0) {
    indicator.style.color = "#00f700";
    kkeys = [];
    window.location = "/404/BadNews/";
  } else if (kkeys.toString().indexOf(klonoa) >= 0) {
    indicator.style.color = "#00f700";
    kkeys = [];
    window.location = "/404/klonoa/";
  } else if (kkeys.toString().indexOf(aceAttorney) >= 0) {
    indicator.style.color = "#00f700";
    kkeys = [];
    window.location = "https://youtu.be/nPnh6XgRaxY";
  } else if (kkeys.toString().indexOf(fennec) >= 0) {
    indicator.style.color = "#00f700";
    kkeys = [];
    window.location = "/404/not_found/";
  } else if (kkeys.toString().indexOf(shoebill) >= 0) {
    indicator.style.color = "#00f700";
    kkeys = [];
    window.location = "/404/hmcastle/";
  } else if (
    kkeys.toString().indexOf(puro) >= 0 ||
    kkeys.toString().indexOf(changed) >= 0
  ) {
    indicator.style.color = "#00f700";
    kkeys = [];
    window.location = "/404/puro/";
  } else if (kkeys.toString().indexOf(tails) >= 0) {
    indicator.style.color = "#00f700";
    kkeys = [];
    window.location = "/404/tails/";
  } else if (kkeys.toString().indexOf(keldeo) >= 0) {
    indicator.style.color = "#00f700";
    kkeys = [];
    window.location = "/404/keldeo/";
  } else if (kkeys.toString().indexOf(floppa) >= 0) {
    indicator.style.color = "#00f700";
    kkeys = [];
    window.location = "/404/floppa/";
  } else if (starwars.includes(kkeys.toString())) {
    kkeys = [];
    window.location = "/404/creds/";
  }

  // [Press F1 For] HELP
  else if (kkeys.toString().indexOf("112") >= 0) {
    spamtonAudio.play();
    kkeys = [];
  } else if (kkeys.toString().indexOf(tunic) >= 0) {
    window.location = "CoolStuff/secretlegend.html";
  }

  // auto 404
  else if (kkeys.toString().indexOf("52,48,52") >= 0) {
    indicator.style.color = "red";
    kkeys = [];
    window.location = "not_found.html";
  } else if (barrelroll.includes(kkeys.toString())) {
    var dobarrellroll = document
      .querySelector("body")
      .classList.add("dothebarrellroll");
    peppyAudio.play();
    console.log("Rest in peace Rick May");
    setTimeout(
      () => (
        (dobarrellroll = document
          .querySelector("body")
          .classList.remove("dothebarrellroll")),
        (kkeys = [])
      ),

      3000
    );
  } else if (kkeys.toString().indexOf(debug) >= 0) {
    window.location = "debug.html";
  } else if (pacman.includes(kkeys.toString())) {
    kkeys = [];
    window.location = "https://www.google.com/logos/2010/pacman10-i.html";
  } else if (kkeys.toString().indexOf(wii) >= 0) {
    indicator.style.color = "red";
    indicator.innerHTML = "oh no";
    cmarquee.innerHTML = "now look what you've done.";

    // Define the function
    // to screenshot the div
    function takeshot() {
      let div = document.querySelector("body");

      // Use the html2canvas
      // function to take a screenshot
      // and append it
      // to the output div
      html2canvas(div).then(function (canvas) {
        document.querySelector("#nowplaying").remove();
        div.style.pointerEvents = "none";
        document.getElementById("wii").style.display = "block";
        document.getElementById("wii").appendChild(canvas);
        wiiAudio.play();
      });
    }

    html2canvas(document.body, {
      onrendered: function (canvas) {
        document.body.appendChild(canvas);
      },
    });
    takeshot();

    kkeys = [];
  } else if (kkeys.toString().indexOf(e926) >= 0) {
    window.location = "https://e926.net/";
    kkeys = [];
  } else if (kkeys.toString().indexOf(e621) >= 0) {
    window.location = "https://e621.net/";
    kkeys = [];
  } else if (kkeys.toString().indexOf(fetty) >= 0) {
    fettyAudio.play();
    kkeys = [];
  } else if (kkeys.toString().indexOf(bruh) >= 0) {
    bruhAudio.play();
    kkeys = [];
  } else if (christmas.includes(kkeys.toString())) {
    document.getElementById("thelogo").src = "assets/lolo-halloween.gif";
    document.getElementById("css-link").href = `themes/christmas.css`;
    kkeys = [];
  } else if (halloween.includes(kkeys.toString())) {
    document.getElementById("thelogo").src = "assets/lolo-halloween.gif";
    document.getElementById("smolboi").src = "assets/Pumpkin_ghost.png";
    document.getElementById("css-link").href = `themes/halloween.css`;
    kkeys = [];
  } else if (newyears.includes(kkeys.toString())) {
    document.getElementById("thelogo").src = "assets/lolo-halloween.gif";
    document.getElementById("css-link").href = `themes/newyears.css`;
    kkeys = [];
  } else if (maxwell.includes(kkeys.toString())) {
    reference.style.display = "block";
    maxwellAudio.play();
    maxwellAudio.addEventListener("ended", function () {
      reference.style.display = "none";
      kkeys = [];
    });
  } else if (theugly.includes(kkeys.toString())) {
    vineAudio.pause();
    vineAudio.currentTime = 0;
    vineAudio.play();
    indicator.style.color = "red";
    cmarquee.innerHTML = "Come on now, do better..";
    kkeys = [];
  } else if (uwu.includes(kkeys.toString())) {
    uwuAudio.pause();
    uwuAudio.currentTime = 0;
    uwuAudio.play();
    kkeys = [];
  } else if (f0rd.includes(kkeys.toString())) {
    f0rdAudio.pause();
    f0rdAudio.currentTime = 0;
    f0rdAudio.play();
    kkeys = [];
  } else if (kkeys.toString().indexOf(mirror) >= 0) {
    document.body.style.transform = "rotateY(180deg)";
    kkeys = [];
  } else if (kisser.includes(kkeys.toString())) {
    vineAudio.pause();
    vineAudio.currentTime = 0;
    vineAudio.play();

    boykisser.style.display = "block";
    boykisser.style.animation = "none";
    boykisser.offsetHeight; /* trigger reflow */
    boykisser.style.animation = null;

    cmarquee.innerHTML = "";
    kkeys = [];
  }

  if (indicator.innerHTML.length >= 1000) {
    this.document.querySelector("#fen").style.display = "block";
  }
}

window.addEventListener("keydown", function (e) {}, true);

// Disable chrome, ff, or ie to display the help screen if the user presses F1
function avoidInvalidKeyStorkes(evtArg) {
  var evt = document.all ? window.event : evtArg,
    isIE = document.all ? true : false,
    KEYCODE = document.all ? window.event.keyCode : evtArg.which,
    element = document.all ? window.event.srcElement : evtArg.target;

  if (KEYCODE == "112") {
    if (isIE) {
      document.onhelp = function () {
        return false;
      };
      window.onhelp = function () {
        return false;
      };
    }

    evt.preventDefault();
  }
}

if (window.document.addEventListener) {
  window.document.addEventListener("keydown", avoidInvalidKeyStorkes, false);
} else {
  window.document.attachEvent("onkeydown", avoidInvalidKeyStorkes);
  document.captureEvents(Event.KEYDOWN);
}

// Modal functionality for Secret Fairy Code
let popup = document.querySelector(".popup");
var modalsrc = document.getElementById("modalimg");

function openPop(img) {
  modalsrc.src = img;
  popup.style.display = "block";
}

window.addEventListener("click", closePop);

function closePop(e) {
  if (e.target == popup) {
    popup.style.display = "none";
  }
}
