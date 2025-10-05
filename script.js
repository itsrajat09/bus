// =================== TICKET COUNTER & FARE ===================
const inc = document.getElementById('incBtn');
const dec = document.getElementById('decBtn');
const countEl = document.getElementById('ticketCount');
const fareEl = document.getElementById('fare');

if (countEl && fareEl) {
    let count = 1;
    const baseFare = 22.79;

    function updateFare() {
        countEl.textContent = count;
        fareEl.textContent = '₹ ' + (baseFare * count).toFixed(2);
    }

    inc.addEventListener('click', () => {
        if (count < 4) { count++; updateFare(); }
    });

    dec.addEventListener('click', () => {
        if (count > 1) { count--; updateFare(); }
    });

    const payLink = document.getElementById("payLink");
    if (payLink) {
        payLink.addEventListener("click", (e) => {
            e.preventDefault();
            localStorage.setItem("finalFare", fareEl.textContent);
            window.location.href = payLink.getAttribute("href");
        });
    }
}

// =================== DISPLAY FARE ON PAYMENT SCREENS ===================
const paymentAmountEl = document.getElementById("paymentAmount");
if (paymentAmountEl) {
    const storedFare = localStorage.getItem("finalFare");
    if (storedFare) {
        paymentAmountEl.textContent = storedFare;
        // Remove only on final screen (index7.html)
        if (window.location.pathname.includes("index7.html")) {
            localStorage.removeItem("finalFare");
        }
    }
}

// =================== TIMER (OPTIONAL) ===================
const timer = document.querySelector(".timer");
if (timer) {
    let count = 125;
    let interval = setInterval(() => {
        timer.innerText = count;
        count--;
        if (count < 0) {
            clearInterval(interval);
            window.location.href = "index.html";
        }
    }, 1000);
}

// =================== OPENING SCREEN ANIMATIONS ===================
const display_img = document.querySelector(".display_img");
if (display_img) setTimeout(() => display_img.classList.add("hide"), 1000);

const opening_phonepay = document.querySelector(".opening_phonepay");
if (opening_phonepay) setTimeout(() => opening_phonepay.classList.add("hidden"), 1000);

// =================== PIN INPUT LOGIC ===================
const boxes = [
    document.querySelector(".box1"),
    document.querySelector(".box2"),
    document.querySelector(".box3"),
    document.querySelector(".box4")
];

let currentIndex = 0; // Track which box is active

function handleKeyPress(value) {
    if (currentIndex < boxes.length) {
        let box = boxes[currentIndex];
        box.innerText = value; // Show number first
        setTimeout(() => { box.innerText = "●"; }, 300); // Convert to dot
        currentIndex++;
    }
}

function handleDelete() {
    if (currentIndex > 0) {
        currentIndex--;
        boxes[currentIndex].innerText = ""; // Reset to underscore
    }
}

// Select keypad buttons
const keys = document.querySelectorAll(".keypad .key");
keys.forEach(key => {
    if (!key.classList.contains("key_delete") && !key.classList.contains("key_ok")) {
        key.addEventListener("click", () => handleKeyPress(key.textContent));
    }
});

// Delete button
const keyDelete = document.querySelector(".key_delete");
if (keyDelete) keyDelete.addEventListener("click", handleDelete);

// OK button
const keyOk = document.querySelector(".key_ok");
if (keyOk) {
    keyOk.addEventListener("click", () => {
        if (currentIndex === boxes.length) {
            // Play success sound
            let audio = new Audio("success.mp3");
            audio.play();
            // Redirect after short delay
            setTimeout(() => {
                window.location.href = "index8.html";
            }, 1000);
        } else {
            alert("Please enter 4 digits");
        }
    });
}

// =================== START AND END ROUTE EDITING ===================
const routeInput = document.getElementById("route_input");
const stopInput = document.getElementById("stop_input");
const changeRoute = document.getElementById("changeRoute");
const changeStop = document.getElementById("changeStop");

if (routeInput) {
    routeInput.addEventListener("change", () => {
        if (routeInput.value.trim() !== "") routeInput.disabled = true;
    });
}
if (stopInput) {
    stopInput.addEventListener("change", () => {
        if (stopInput.value.trim() !== "") stopInput.disabled = true;
    });
}
if (changeRoute) changeRoute.addEventListener("click", () => { routeInput.disabled = false; routeInput.focus(); });
if (changeStop) changeStop.addEventListener("click", () => { stopInput.disabled = false; stopInput.focus(); });
