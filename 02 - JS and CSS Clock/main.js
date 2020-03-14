const secondHand = document.querySelector(".second-hand");
const minutesHand = document.querySelector(".min-hand");
const hoursHand = document.querySelector(".hour-hand");
function setDate() {
  const now = new Date();
  return now;
}

function moveHands(time) {
  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours();
  moveSecondsHand(seconds);
  moveMinutesHand(minutes);
  moveHoursHand(hours);
}

function moveSecondsHand(seconds) {
  const secondDegrees = (seconds / 60) * 360 + 90;
  secondHand.style.transform = `rotate(${secondDegrees}deg)`;
}

function moveMinutesHand(minutes) {
  const minutesDegrees = (minutes / 60) * 360 + 90;
  minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;
}

function moveHoursHand(hours) {
  console.log(hours);
  const hoursDegrees = (hours / 12) * 360 + 90;
  hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(() => moveHands(setDate()), 1000);
