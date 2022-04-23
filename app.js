// * targeting elements
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

// 1 second = 1000 milliseconds
// 1 minute = 60 seconds
// 1 hour = 60 minutes
// 1 day = 24 hours

// first we need to set the future date
let futureDate = new Date("August 1, 2022 08:30:00");
console.log(futureDate);
// total time in milliseconds
let totalTime = futureDate.getTime();
console.log(totalTime);

// * function for the remaining time till the date
let updateTime = setInterval(function () {
  // get today's day
  let todayDate = new Date().getTime();
  console.log(todayDate);

  //   future time minus today
  let timeDifference = futureDate - todayDate;
  console.log(timeDifference);

  //   get one day
  const oneDay = 24 * 60 * 60 * 1000;
  console.log(oneDay);

  const oneHour = 60 * 60 * 1000;
  console.log(oneHour);

  const oneMinute = 60 * 1000;
  console.log(oneMinute);

  // values in milliseconds, for one day
  let day = timeDifference / oneDay;
  day = Math.floor(day);
  console.log("days", day);

  // values in milliseconds, for one hour
  let hour = timeDifference / oneHour;
  hour = Math.floor((timeDifference % oneDay) / oneHour);
  console.log("hours", hour);

  // values in milliseconds, for one minute
  let minute = timeDifference / oneMinute;
  minute = Math.floor((timeDifference % oneHour) / oneMinute);
  console.log("minutes", minute);

  // values in milliseconds, for one second
  let second = (timeDifference / oneMinute) * 1000;
  second = Math.floor((timeDifference % oneMinute) / 1000);
  console.log("seconds", second);

  //   adding to html document
  days.innerHTML = day;
  hours.innerHTML = hour;
  minutes.innerHTML = minute;
  seconds.innerHTML = second;
}, 1000);
