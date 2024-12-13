let playing = false;

// Main function to call the Last.fm API and process data
function LastfmCall() {
  fetch("/data.json")
    .then((response) => response.json())
    .then((data) => fetch(data.key))
    .then((response) => response.json())
    .then((data) => {
      const currentTrack = data.recenttracks.track[0];
      updatePlayingStatus(currentTrack);
      updateTrackInfo(currentTrack, "songlink", "url", "#");
      updateTrackImage(currentTrack);
      updateSongName(currentTrack);
      updateArtistName(currentTrack);
    });
}

// Update the playing status based on current track data
function updatePlayingStatus(track) {
  playing = !!track["@attr"]?.nowplaying;
  document.getElementById("currentlylistening").innerText = playing
    ? "| now playing |"
    : "# latest listen #";
}

// Update track URL
function updateTrackInfo(track, elementId, property, defaultValue) {
  const elem = document.getElementById(elementId);
  elem.href = track[property] || defaultValue;
}

// Update track image
function updateTrackImage(track) {
  const albumCoverElem = document.getElementById("albumcover");
  const imageUrl =
    track.image?.[3]?.["#text"] || "/main/assets/defaultmusicicon.png";
  albumCoverElem.src = imageUrl;
}

// Update the song name and handle the transition between <span> and <marquee> based on length
function updateSongName(track) {
  const songNameElem = document.getElementById("songname");
  const songName = track.name || "Undefined";
  songNameElem.innerText = songName;

  if (songName.length > 11 && songNameElem.tagName === "SPAN") {
    songNameElem.outerHTML = songNameElem.outerHTML.replace(
      /<span(.*?)/g,
      "<marquee$1"
    );
  } else if (songName.length <= 11 && songNameElem.tagName === "MARQUEE") {
    songNameElem.outerHTML = songNameElem.outerHTML.replace(
      /<marquee(.*?)/g,
      "<span$1"
    );
  }
}

// Update the artist name
function updateArtistName(track) {
  const artistNameElem = document.getElementById("artist");
  const artistName = track.artist ? track.artist["#text"] : "Unknown";
  artistNameElem.innerText = artistName;
}

// Initial call and interval setup for refreshing track data
setTimeout(LastfmCall, 25);
setInterval(LastfmCall, 7525);
