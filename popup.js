const btnOn = document.getElementById('btn-on');
const btnOff = document.getElementById('btn-off');
const statusText = document.getElementById('status');

function updateUI(isBlocking) {
  if (isBlocking) {
    statusText.innerText = "Status: 🔴 Lock in sir!!";
    statusText.style.color = "#e74c3c";
  } else {
    statusText.innerText = "Status: 🟢 Normal";
    statusText.style.color = "#2ecc71";
  }
}

browser.storage.local.get("isBlocking").then((result) => {
  updateUI(result.isBlocking || false);
});

btnOn.addEventListener('click', () => {
  browser.runtime.sendMessage({ action: "start_block" });
  browser.storage.local.set({ isBlocking: true });
  updateUI(true);
});

btnOff.addEventListener('click', () => {
  browser.runtime.sendMessage({ action: "stop_block" });
  browser.storage.local.set({ isBlocking: false });
  updateUI(false);
});