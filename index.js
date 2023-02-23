function updateClock() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
  
    // Add leading zeros to minutes and seconds
    minutes = (minutes < 10 ? "0" : "") + minutes;
    seconds = (seconds < 10 ? "0" : "") + seconds;
  
    // Format the time as HH:MM:SS
    var time = hours + ":" + minutes + ":" + seconds;
  
    // Update the clock element
    document.getElementById("clock").innerHTML = time;
  }
  
  // Update the clock every second
  setInterval(updateClock, 1000);
  