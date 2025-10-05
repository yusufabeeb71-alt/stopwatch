

let startTime;
let elapsedTime = 0;
let timerInterval;

function updateTime() {
  const currentTime = Date.now();
  const time = elapsedTime + (currentTime - startTime);

  const hours = Math.floor(time / (1000 * 60 * 60));
  const minutes = Math.floor((time / (1000 * 60)) % 60);
  const seconds = Math.floor((time / 1000) % 60);

  const formattedTime =
    (hours < 10 ? "0" + hours : hours) + ":" +
    (minutes < 10 ? "0" + minutes : minutes) + ":" +
    (seconds < 10 ? "0" + seconds : seconds);

  document.getElementById("display").textContent = formattedTime;
}

document.getElementById("start").addEventListener("click", () => {
  if (!timerInterval) {
    startTime = Date.now();
    timerInterval = setInterval(updateTime, 1000);
  }
});

document.getElementById("stop").addEventListener("click", () => {
  if (timerInterval) {
    elapsedTime += Date.now() - startTime;
    clearInterval(timerInterval);
    timerInterval = null;
  }
});

document.getElementById("reset").addEventListener("click", () => {
  clearInterval(timerInterval);
  timerInterval = null;
  elapsedTime = 0;
  document.getElementById("display").textContent = "00:00:00";
});
