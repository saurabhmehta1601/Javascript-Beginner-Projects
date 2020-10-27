// variables
let currentPerson = 0;
const profileImg = document.querySelector(".profile-img img");
const profileJob = document.querySelector(".profile-job");
const profileInfo = document.querySelector(".profile-info");
const arrowLeft = document.querySelector("#left-arrow");
const arrowRight = document.querySelector("#right-arrow");
const profileName = document.querySelector(".profile-name");
const surpriseButton = document.querySelector("button#random");
profiles = [
  {
    name: "Steve Martin",
    img: "images/image0.jpg",
    job: "Web Developer",
    info:
      " Great Web developer developed my cool websites and working with google right now ",
  },
  {
    name: "John Doe",
    job: "Graphic designer",
    img: "images/image1.jpg",
    info:
      " Great Graphic designer developed my cool graphics and working with NVEDIA right now ",
  },
  {
    name: "Larry Johnson",
    job: "Game Developer",
    img: "images/image2.jpg",
    info:
      " Great Game developer developed my cool games and working with Unity right now ",
  },
  {
    name: "Mitchel Warner",
    img: "images/image3.jpg",
    job: "Database Designer",
    info:
      " Great Database developer developed my cool databases and working with oracle right now ",
  },
];

// function

function showNextProfile() {
  if (currentPerson < profiles.length - 1) currentPerson++;
  profileImg.src = profiles[currentPerson].img;
  profileJob.textContent = profiles[currentPerson].job;
  profileName.textContent = profiles[currentPerson].name;
}
function showPreviousProfile() {
  if (currentPerson > 0) currentPerson--;
  profileImg.src = profiles[currentPerson].img;
  profileJob.textContent = profiles[currentPerson].job;
  profileName.textContent = profiles[currentPerson].name;
  profileInfo.textContent = profiles[currentPerson].info;
}
function showProfile() {
  currentPerson = Math.floor(Math.random() * 4);
  profileImg.src = profiles[currentPerson].img;
  profileJob.textContent = profiles[currentPerson].job;
  profileName.textContent = profiles[currentPerson].name;
  profileInfo.textContent = profiles[currentPerson].info;
}

// event listeners

arrowLeft.addEventListener("click", showPreviousProfile);
arrowRight.addEventListener("click", showNextProfile);
surpriseButton.addEventListener("click", showProfile);
