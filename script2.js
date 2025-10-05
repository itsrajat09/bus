const inc = document.getElementById('incBtn');
const dec = document.getElementById('decBtn');
const countEl = document.getElementById('ticketCount');
const fareEl = document.getElementById('fare');
const startRow = document.getElementById('startRow');
const endRow = document.getElementById('endRow');
const startStation = document.getElementById('startStation');
const endStation = document.getElementById('endStation');
const payBtn = document.getElementById('payBtn');

let count = 1;
const baseFare = 10;

function update() {
  countEl.textContent = count;
  fareEl.textContent = '₹ ' + (baseFare * count);
}

inc.addEventListener('click', () => {
  if (count < 10) {
    count++;
    update();
  }
});

dec.addEventListener('click', () => {
  if (count > 1) {
    count--;
    update();
  }
});

startRow.onclick = () => {
  const v = prompt('Enter starting station name:', startStation.textContent);
  if (v) startStation.textContent = v;
};

endRow.onclick = () => {
  const v = prompt('Enter ending stop name:', endStation.textContent);
  if (v) endStation.textContent = v;
};

if (payBtn) {
  payBtn.onclick = () => {
    alert('Proceeding to pay: ' + count + ' ticket(s) - ' + fareEl.textContent);
  };
}

