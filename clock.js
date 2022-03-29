var cal = new Date();

var hours = cal.getHours();
var mins = cal.getMinutes();
var day = cal.toLocaleString("default", { weekday: "short" });

var date = cal.getDate();
var month = cal.toLocaleString("default", { month: "short" });
var year = cal.getFullYear();

function clock() {
  hours = hours % 12;

  // Am & Pm Conversion
  if (hours > 12) {
    document.querySelector(".part").innerHTML = "PM";
  } else {
    document.querySelector(".part").innerHTML = "AM";
  }

  //add 0 to hrs if less than 10
  if (hours < 10) {
    document.querySelector(".hour").innerHTML = "0" + hours;
  } else {
    document.querySelector(".hour").innerHTML = hours;
  }

  //add 0 to mins if less than 10
  if (mins < 10) {
    document.querySelector(".minutes").innerHTML = "0" + mins;
  } else {
    document.querySelector(".minutes").innerHTML = mins;
  }

  document.querySelector(".day").innerHTML = day;
  document.querySelector(".date").innerHTML = date;
  document.querySelector(".month").innerHTML = month;
  document.querySelector(".year").innerHTML = year;
}


setInterval(clock, 1000);

