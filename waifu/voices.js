/* 

THE VOICES!! WHO AREE THEY AND WHY ARE THEY TALKING TO ME
WHAT DO YOU WANT FROM ME

*/

const voices = [
  "but what if..",
  "you're not alone..",
  "but why..",
  "but how..",
  "keep dreaming..",
  "you're alive..",
  "to be continued..",
  "it all starts here..",
  "the hidden paths..",
  "far away..",
  "truly..",
  "the",
  "absolute",
  "realm",
  "is it all a dream?",
  "everything's okay..",
  "you're safe here!",
  "who are you?",
  "for real life?",
  "for real life",
  "congrats making it!",
  "believe in yourself..",
  "you're doing great",
  "you got this!",
  "be careful out there..",
  "you're worth it.",
  "an escape from reality..",
  "keep your friends close..",
  "you only live once..",
  "yeag",
  "very safe",
  "woag",
  "yes",
  "shinto was here",
  "never give up!",
  "secrets to be found..",
  "a rip through time and space..",
  "singularity",
  "much wow",
  "truth be told..",
  "relax..",
  "take a break sometime...",
  "can you hear me?",
  "hey, listen!",
  "keep yourself safe",
];
const directions = ["normal", "reverse"];

$(
  "<div id='voicesWrapper'><div id='text1'></div><div id='text2'></div><div id='text3'></div><div id='text4'></div><div id='text7'></div><div id='text8'></div><div id='text9'></div><div id='text10'></div></div>"
).insertBefore($(".particles"));

let tCount = 0;
const textInterval = setInterval(() => {
  const vC = voicesWrapper.children[tCount];
  tCount = tCount >= voicesWrapper.children.length - 1 ? 0 : tCount + 1;

  updateVoiceElement(vC);
}, 3000);

function updateVoiceElement(element) {
  element.style.animation = "none";
  element.offsetHeight; // Trigger reflow
  element.innerHTML = getRandomElement(voices);
  element.style.cssText = `
    left: ${getRandomPosition(window.innerWidth - 150)}px;
    top: ${getRandomPosition(window.innerHeight - 150)}px;
    animation: textInOut ${getRandomInt(7, 15)}s linear ${getRandomElement(
    directions
  )};
    font-size: ${getRandomInt(15, 40)}px;`;
}

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomPosition(max) {
  return Math.floor(Math.random() * max) + 25;
}
