const dayOfTheWeek = (date = new Date()) => {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  return days[date.getDay()];
};

const isWednesday = dayOfTheWeek() === "Wednesday" ? ", my dudes" : null;

const isChungus = Math.floor(Math.random() * 50) === 37 ? true : false;

try {
  document.getElementById("day").innerText = dayOfTheWeek();
  document.getElementById("mydudes").innerText = isWednesday;
  document.getElementById("picture").src = isChungus
    ? "https://i.kym-cdn.com/photos/images/original/001/447/699/3a0.png"
    : "dober.jpg";
} catch (err) {}

exports.dayOfTheWeek = dayOfTheWeek;
