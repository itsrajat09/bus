// 🔴 Live Camera Background Only
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




// --- HIDE THE DISPLAY IMAGE AFTER 1 SECOND ---
let display_img = document.querySelector(".display_img");
setTimeout(() => {
  if (display_img) display_img.classList.add("hide");
}, 1000);

// --- TIMER LOGIC (Optional countdown) ---
const timer = document.querySelector(".timer");
if (timer) {
  let count = 125;
  let interval = setInterval(() => {
    timer.innerText = count;
    count--;
    if (count < 0) {
      clearInterval(interval);
      window.location.href = "index.html"; // Redirect after timer ends
    }
  }, 1000);
}

// --- HIDE THE OPENING PHONEPE SCREEN AFTER 1 SECOND ---
let opening_phonepay = document.querySelector(".opening_phonepay");
setTimeout(() => {
  if (opening_phonepay) opening_phonepay.classList.add("hidden");
}, 1000);

// --- PIN BOXES ---
let box1 = document.querySelector(".box1");
let box2 = document.querySelector(".box2");
let box3 = document.querySelector(".box3");
let box4 = document.querySelector(".box4");

const boxes = [box1, box2, box3, box4];
let currentIndex = 0; // Keeps track of which box is being filled

// --- HANDLE KEYPAD NUMBER PRESS ---
function handleKeyPress(value) {
  if (currentIndex < boxes.length) {
    let currentBox = boxes[currentIndex];
    currentBox.innerText = value; // Show number first

    // Convert to dot (●) after 300ms for privacy
    setTimeout(() => {
      currentBox.innerText = "●";
    }, 300);

    currentIndex++; // Move to next box
  }
}

// --- HANDLE DELETE BUTTON ---
function handleDelete() {
  if (currentIndex > 0) {
    currentIndex--; // Go back one box
    boxes[currentIndex].innerText = ""; // Clear that box
  }
}

// --- PLAY SUCCESS SOUND ---
function playSuccessSound() {
  let audio = new Audio("success.mp3"); // Put your sound file in same folder
  audio.play();
}

// --- SELECT ALL KEYPAD BUTTONS ---
let key1 = document.querySelector(".key1");
let key2 = document.querySelector(".key2");
let key3 = document.querySelector(".key3");
let key4 = document.querySelector(".key4");
let key5 = document.querySelector(".key5");
let key6 = document.querySelector(".key6");
let key7 = document.querySelector(".key7");
let key8 = document.querySelector(".key8");
let key9 = document.querySelector(".key9");
let key0 = document.querySelector(".key0");
let key_delete = document.querySelector(".key_delete");
let key_ok = document.querySelector(".key_ok");

// --- ATTACH EVENTS TO NUMBER BUTTONS ---
if (key1) key1.addEventListener("click", () => handleKeyPress("1"));
if (key2) key2.addEventListener("click", () => handleKeyPress("2"));
if (key3) key3.addEventListener("click", () => handleKeyPress("3"));
if (key4) key4.addEventListener("click", () => handleKeyPress("4"));
if (key5) key5.addEventListener("click", () => handleKeyPress("5"));
if (key6) key6.addEventListener("click", () => handleKeyPress("6"));
if (key7) key7.addEventListener("click", () => handleKeyPress("7"));
if (key8) key8.addEventListener("click", () => handleKeyPress("8"));
if (key9) key9.addEventListener("click", () => handleKeyPress("9"));
if (key0) key0.addEventListener("click", () => handleKeyPress("0"));

// --- ATTACH DELETE BUTTON ---
if (key_delete) key_delete.addEventListener("click", handleDelete);


key_ok.addEventListener("click", () => {
  playSuccessSound(); // your sound function
  setTimeout(() => {
    window.location.href = "index8.html"; // redirect to success screen
  }, 1000); // delay to let sound finish
});
