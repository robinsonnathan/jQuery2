function startTime() {
  //Set vars for current hour / minute
  var hourAdjustment = '';
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();

  // Call back loop in on itself for clock updates
  setTimeout(startTime, 800);

  //Prepend single digit minutes with a 0
  m = checkMinutes(m);

  // Deliver either AM or PM time based on current hour
  if (h > 12){
    document.getElementById('time-container').innerHTML =
    h - 12 + ":" + m + " PM"
  } else {
    document.getElementById('time-container').innerHTML =
    h + ":" + m + " AM"
  }
}
function checkMinutes(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
}
startTime();
