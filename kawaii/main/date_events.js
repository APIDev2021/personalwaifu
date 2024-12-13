/* 
Date Handler for [ the absolute realm ]
*/

var currentPage = window.location.pathname,
  theTime = document.getElementById("theTime"),
  today = new Date(),
  dd = String(today.getDate()).padStart(2, "0"),
  mm = String(today.getMonth() + 1).padStart(2, "0"), // January is 0!
  yyyy = today.getFullYear(),
  ebText = document.querySelectorAll("#ebtext"),
  butons = document.getElementById("bC"),
  fr = document.getElementById("activateIframe"),
  titlee = document.getElementById("activateTitle"),
  ebBorder = document.querySelectorAll(".earthbtble"),
  ebHeader = document.querySelectorAll(".ebheader"),
  uhed = document.getElementsByTagName("h2"),
  thegradient = document.getElementById("thegradient"),
  player = document.getElementById("player"),
  theLogo = document.getElementById("thelogo"),
  js = document.createElement("script"),
  holiday = ["christmas", "halloween", "newyears", "aprilfools"],
  today = mm + "/" + dd + "/" + yyyy,
  bgm = document.getElementById("player"),
  title = document.getElementById("title"),
  artist = document.getElementById("artist"),
  artistLink = document.getElementById("artistLink"),
  link = document.getElementById("link");

function updateClock() {
  let today = new Date(),
    hours = today.getHours() % 12 || 12,
    minutes =
      today.getMinutes() < 10 ? "0" + today.getMinutes() : today.getMinutes(),
    seconds = today.getSeconds(),
    ampm = today.getHours() >= 12 ? "pm" : "am",
    time = hours + ":" + minutes + ampm,
    months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    // a cleaner way than string concatenation
    date = [
      today.getDate(),
      months[today.getMonth()],
      today.getFullYear(),
    ].join(" ");

  theTime.innerHTML = [date, time].join(" // ");

  document.getElementById("hour").innerHTML = hours;
  document.getElementById("minute").innerHTML = minutes;

  setTimeout(updateClock, 1000);
}

async function backgroundMusic(selection) {
  var response = await fetch("singularitySonglist.json"),
    music = await response.json(),
    track =
      music[selection][
        Math.floor(Math.random() * Object.keys(music[selection]).length + 1)
      ];
  let sound = new Howl({
    src: [track.fileName],
    volume: track.Volume,
    loop: true,
    autoplay: true,
    html5: true,
  });

  title.innerHTML = track.Name;
  artist.innerHTML = track.Artist;
  artistLink.href = track.ArtistLink;
  link.href = track.Link;
  console.log(
    "%cOh yeah by the way, the song is: " +
      track.Name +
      ", by " +
      track.Artist +
      ".",
    "display: block; padding:15px; border-radius: 10px; font-size:1em; border: #41efd2 1px solid; color:#41efd2;"
  );

  /* And so it appears that the music has stopped autoplaying for me :( */

  $(document).ready(function () {
    $("body").click(function () {
      if (sound.playing()) {
      } else {
        sound.play();

        $("body").off("click");
      }
    });
  });
  sound.play();
}

/* NEW YEARS */
if (today >= "01/01/${yyyy}" && today <= "01/05/${yyyy}") {
  if (currentPage === "/main/") {
    // main
    theLogo.src = "assets/lolo-halloween.gif";
    js.src = "confetti.js";
    document.body.appendChild(js);
    setTheme("newyears");
  } else if (currentPage === "/") {
    // singularity
    backgroundMusic("newyears");
    secondGreet = "happy new years from the absolute realm!";
  }
} else if (today === "02/14/" + yyyy) {
  /* Valentines */
} else if (today === "03/17/" + yyyy) {
  /* St. Patricks */
} else if (today === "04/01/" + yyyy) {
  /* APRIL FOOLS HAHAHA */

  if (currentPage === "/main/") {
  } else if (currentPage === "/") {
    backgroundMusic("aprilfools");
  }
} else if (today === "05/12/" + yyyy) {
  /* my bday <33 */
  console.log(currentPage);

  if (currentPage === "/main/") {
    let yippee = document.querySelector("#confetti");

    js.src = "confetti.js";
    document.body.appendChild(js);
    document.getElementById("smolboi").src = "assets/creature.png";
    yippee.style.display = "Block";
  } else if (currentPage === "/") {
    backgroundMusic("default");
  }

  console.log("OH YEAH ITS BIRTHDAY TIME!!");
} else if (today === "07/04/" + yyyy) {
  /* FOURTH OF JULY */
} else if (today === "10/" + dd + "/" + yyyy) {
  /* HALLOWEEN!! */

  if (currentPage === "/main/") {
    // main
    setTheme("halloween");
    theLogo.src = "assets/lolo-halloween.gif";
    document.getElementById("smolboi").src = "assets/Pumpkin_ghost.png";
  } else if (currentPage === "/") {
    // singularity
    secondGreet = "happy spooky month from the absolute realm!";
    backgroundMusic("halloween");
    thegradient.style.background =
      "linear-gradient(124deg, black, black, black, black)";
    thegradient.style.backgroundSize = "1800% 1800%";
    document.getElementById("darken").style.boxShadow =
      "0 0 200px #000000 inset";
    document.getElementById("fade").style.backgroundColor = "#000";
    document.getElementById("particles-js").style.display = "none";
  } else if (currentPage === "main/update.html") {
    document.querySelector("h2").style.color = "#c9712c";
  } else if (currentPage === "/thumbnail/") {
    document.getElementById("background").style.filter = "grayscale(1)";
  }
} else if (today === "12/" + dd + "/" + yyyy) {
  /* CHRISSMAASSS!!! */

  if (currentPage === "/main/") {
    // main
    theLogo.src = "assets/lolo-halloween.gif";
    setTheme("christmas");

    js.src = "snow.js";
    document.body.appendChild(js);
  } else if (currentPage === "/") {
    // singularity
    backgroundMusic("christmas");

    thegradient.style.background =
      "linear-gradient(124deg, rgb(169 218 244),rgb(20 37 64), rgb(169 218 244), rgb(20 37 64))";
    thegradient.style.backgroundSize = "1800% 1800%";
    document.getElementById("particles-js").style.transform =
      "scaleX(-1) rotate(180deg)";
    document.getElementById("backvid2").style.transform =
      "scaleX(1) rotate(-180deg)";
    secondGreet = "happy holidays from the absolute realm!";
  } else if (currentPage === "/main/update.html") {
  } else if (currentPage === "/thumbnail/") {
    document.getElementById("background").src = "/assets/tempImg2.png";
    document.getElementById("background").style.filter = "hue-rotate(1deg)";
    document.getElementById("background").style.transform = "rotate(180deg)";
  }
} else {
  if (currentPage === "/") {
    backgroundMusic("default");
  }

  if (holiday.includes(localStorage.themed)) {
    setTheme("default");
  }
}
