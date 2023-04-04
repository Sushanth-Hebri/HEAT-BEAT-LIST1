function updateClock() {
    // Get the current time
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
  
    // Calculate the rotation of the hands
    var hourRotation = (hour / 12) * 360;
    var minuteRotation = (minute / 60) * 360;
    var secondRotation = (second / 60) * 360;
  
    // Update the rotation of the hands
    document.getElementById('hour-hand').style.transform = 'rotate(' + hourRotation + 'deg)';
    document.getElementById('minute-hand').style.transform = 'rotate(' + minuteRotation + 'deg)';
    document.getElementById('second-hand').style.transform = 'rotate(' + secondRotation + 'deg)';
  }
  
  // Update the clock every second
  setInterval(updateClock, 1000);
  