const dayOfTheWeek = (date = new Date()) => {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  return days[date.getDay()];
};

const isWednesday = dayOfTheWeek() === "Wednesday" ? ", my dudes" : null;

try {
  document.getElementById("day").innerText = dayOfTheWeek();
  document.getElementById("mydudes").innerText = isWednesday;
} catch (err) {}

exports.dayOfTheWeek = dayOfTheWeek;
