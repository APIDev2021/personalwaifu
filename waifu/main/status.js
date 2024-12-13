let typingTimeout = null,
dastatus = document.getElementById("thestatus");


function fetchStatusAndUpdate() {
  fetch("https://status.cafe/users/shinto/status.json")
    .then((response) => response.json())
    .then((data) => {
      if (data && data.content) {
        updateStatus(data.content);
      }
    })
    .catch((error) =>
      console.error("uhh.. what was i thinking about again?", error)
    );
}

function playTextSound() {
  textSound.pause();
  textSound.currentTime = 0;
  textSound.play();
}

function updateStatus(newStatus) {
  clearTimeout(typingTimeout);  // Clear existing timeout, if any
  textSound.volume = 0.25;
  dastatus.style.display = "block";

  const decodedStatus = new DOMParser().parseFromString(newStatus, 'text/html').body.textContent || ""; 
  const speed = 30, specialCharSpeed = 200, iChars = "~!&*+=-\\;,./|:<>?";
  cafeStatus.innerHTML = "";

  const typeWriter = (i) => {
    if (i < decodedStatus.length) {
      cafeStatus.innerHTML += decodedStatus[i];
      playTextSound();

      let nextCharDelay = speed + (iChars.includes(decodedStatus[i + 1]) ? specialCharSpeed : 0);
      typingTimeout = setTimeout(() => typeWriter(i + 1), nextCharDelay);
    }
  };

  typeWriter(0);
  dastatus.removeEventListener("click", closeStatus);
  dastatus.addEventListener("click", closeStatus, { once: true });
}

function closeStatus() {
  dastatus.style.display = "none";
  if (typingTimeout !== null) {
    clearTimeout(typingTimeout);
    typingTimeout = null;
  }}
