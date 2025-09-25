// ==============================
// Live Camera Background
// ==============================
const video = document.getElementById("camera");

navigator.mediaDevices
  .getUserMedia({ video: { facingMode: "environment" } }) // back camera on mobile
  .then((stream) => {
    video.srcObject = stream;
  })
  .catch((err) => {
    console.error("Camera error:", err);
    alert("Unable to access camera. Please allow permission.");
  });

// ==============================
// Bus Number Input Handling
// ==============================
let box1 = document.querySelector(".box1");
let box2 = document.querySelector(".box2");
let box3 = document.querySelector(".box3");
let box4 = document.querySelector(".box4");

const boxes = [box1, box2, box3, box4];
let currentIndex = 0;

function handleKeyPress(value) {
  if (currentIndex < boxes.length) {
    let currentBox = boxes[currentIndex];
    currentBox.value = value;

    // Hide digit after a short delay
    setTimeout(() => {
      currentBox.value = "●";
    }, 300);

    currentIndex++;
  }
}

function handleDelete() {
  if (currentIndex > 0) {
    currentIndex--;
    boxes[currentIndex].value = "";
  }
}

function playSuccessSound() {
  let audio = new Audio("success.mp3");
  audio.play();
}

function handleOk() {
  playSuccessSound();
  setTimeout(() => {
    window.location.href = "index8.html";
  }, 1000);
}

// ==============================
// Example keypad button binding
// (only works if you add keypad HTML)
// ==============================
let keyButtons = document.querySelectorAll("[data-key]");
let keyDelete = document.querySelector(".key_delete");
let keyOk = document.querySelector(".key_ok");

keyButtons.forEach((btn) => {
  btn.addEventListener("click", () => handleKeyPress(btn.dataset.key));
});

if (keyDelete) keyDelete.addEventListener("click", handleDelete);
if (keyOk) keyOk.addEventListener("click", handleOk);
