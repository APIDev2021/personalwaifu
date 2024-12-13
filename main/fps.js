const fpsElement = document.getElementById("fpsCounter");
let lastTimestamp = performance.now();
let frameCount = 0;
let lowFpsCounter = 0;

const lowFpsThreshold = 30;
const lowFpsDuration = 5000;

function updateFPS() {
  const currentTimestamp = performance.now();
  frameCount++;

  const elapsedMilliseconds = currentTimestamp - lastTimestamp;

  if (elapsedMilliseconds >= 1000) {
    const fps = Math.round((frameCount * 1000) / elapsedMilliseconds);

    fpsElement.textContent = `${fps}`;

    if (fps < lowFpsThreshold) {
      lowFpsCounter += 1000;
    } else {
      lowFpsCounter = 0;
    }

    if (lowFpsCounter >= lowFpsDuration) {
      console.log(
        "Low FPS Detected. Do you have hardware acceleration disabled? Attempting fixes for you..."
      );
      if (currentPage === "/main/") {
        document.querySelector(".spacebg").style.animation = "none";
        document.querySelector(".spacebg2").style.animation = "none";
        document.querySelector("#wholeshinto").style.animation = "none";
      }
    } else {
    }

    frameCount = 0;
    lastTimestamp = currentTimestamp;
  }

  requestAnimationFrame(updateFPS);
}

updateFPS();
