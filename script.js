"use strict";

const titleElement = document.querySelector(".title");
const buttonsContainer = document.querySelector(".buttons");
const yesButton = document.querySelector(".btn--yes");
const noButton = document.querySelector(".btn--no");
const catVideo = document.querySelector(".cat-img");
const videoSource = catVideo.querySelector("source");

const MAX_VIDEOS = 5;

let play = true;
let noCount = 0;

yesButton.addEventListener("click", handleYesClick);

noButton.addEventListener("click", function () {
  if (play) {
    noCount++;
    const videoIndex = Math.min(noCount, MAX_VIDEOS);
    changeVideo(videoIndex);
    resizeYesButton();
    updateNoButtonText();

    if (noCount === MAX_VIDEOS) {
      play = false;
    }
  }
});

function handleYesClick() {
  // Hide Yes/No buttons
  buttonsContainer.classList.add("hidden");

  // Change video to happy video
  changeVideo("yes");

  // Replace title with a button
  titleElement.innerHTML = `
    <button class="love-btn">Yayyy!! :3 ❤️</button>
  `;

  // Add click event to new button
  const loveBtn = document.querySelector(".love-btn");
  loveBtn.addEventListener("click", () => {
    window.location.href = "love.html"; // goes to new page
  });
}

function resizeYesButton() {
  const computedStyle = window.getComputedStyle(yesButton);
  const fontSize = parseFloat(computedStyle.getPropertyValue("font-size"));
  yesButton.style.fontSize = `${fontSize * 1.6}px`;
}

function generateMessage(noCount) {
  const messages = [
    "No",
    "Are you sure?",
    "Pookie please",
    "Don't do this to me :(",
    "You're breaking my heart",
    "I'm gonna cry...",
  ];

  return messages[Math.min(noCount, messages.length - 1)];
}

function changeVideo(video) {
  videoSource.src = `img/cat-${video}.mp4`;
  catVideo.load();
  catVideo.play();
}

function updateNoButtonText() {
  noButton.innerHTML = generateMessage(noCount);
}

