/*

Yup, this keeps track of all the stuff you do! :3

*/

var currentPage = window.location.pathname,
  storage = window.localStorage;

if (!storage.achievements) {
  storage.setItem("achievements", JSON.stringify(["visited"]));
}
userAchievements = JSON.parse(storage.getItem("achievements"));
userAchievements = [...new Set(userAchievements)];

function StickerCheck(sticker) {
  // fetch the current stickers that exist!!
  fetch("achievements.json")
    .then((u) => u.json())
    .then((goal) => {
      function SetAchievements(sticker) {
        var stickersFound = "",
          totalStickers = 0,
          theComment = goal.scans[sticker].Desc,
          foundText = goal.scans[sticker].title,
          totalStickers = Object.keys(goal.scans).length,
          outCount = userAchievements.filter(function (obj) {
            return Object.keys(goal.scans).indexOf(obj) !== -1;
          });

        userAchievements.push(sticker);
        userAchievements = [...new Set(userAchievements)];
        storage.setItem("achievements", JSON.stringify(userAchievements));

        if (outCount.length === totalStickers) {
          stickersFound = "You found all the stickers!";
        } else {
          stickersFound =
            "Stickers Found: " + outCount.length + " of " + totalStickers;
        }

        console.log(
          "%cv Sticker Found! v",
          "display: block; padding:15px; border-radius: 10px; font-size:1.1em; border: #50dffe 1px solid; color:#50dffe;"
        );
        console.log(
          "%c[ " + foundText + " ] " + theComment,
          "display: block; padding:15px; border-radius: 10px; font-size:1.1em; border: #50dffe 1px solid; color:#50dffe;"
        );

        $(
          "<!-- sticker stuff! --> <div id='" +
            sticker +
            "' class='cardContainer'><img id='card' src='assets/stickers/" +
            sticker +
            ".png' style='animation: wiggle 1s infinite alternate ease-in-out'alt='sticker'/><div id='foundtextWrapper'><p id='foundText'>" +
            foundText +
            "</p><div style='border: #fff 1px solid; margin-top: 3px'></div><em id='comment'>" +
            theComment +
            "</em></div><em id='stickersFound'>" +
            stickersFound +
            "</em></div>"
        ).insertAfter($("#moosic"));
      }

      SetAchievements(sticker);
    });
}

function GeneralCheck() {}

/*
if (currentPage === "/") {
} else if (currentPage === "/main/") {
}
*/
