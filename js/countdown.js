var currentDate = new Date();
var currentMonth = currentDate.getMonth();
var currentDay = currentDate.getDate();
var currentYear = currentDate.getFullYear();

if(currentMonth >= 3 && currentDay >= 2){
    var aprilFools = "Apr 1, " + (currentYear + 1) + " 00:00:00";
}
    else{
var aprilFools = "Apr 1, " + currentYear + " 00:00:00";
};



var countDown = setInterval(function() {
    var countDownDate = new Date(aprilFools).getTime();
    var currentTime = new Date().getTime();
    var timeLeft = countDownDate - currentTime;

    if (timeLeft <= 0) {
        clearInterval(countDown);
        alert('April Fools!');
        document.getElementById("timer").classList.add("active");
        document.getElementById("banner").classList.add("active");
        document.getElementById("title").innerHTML = "APRIL FOOLS!";
        console.log('Made Ya Look!');
        document.getElementById("consolePrompt").innerHTML = 'Check the console...';
        document.getElementById("days").innerHTML = '0 days';
        document.getElementById("hours").innerHTML = '0 hrs';
        document.getElementById("minutes").innerHTML = '0 mins';
        document.getElementById("seconds").innerHTML = '0 secs';
        }
        else{
            var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
            var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            var mins = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
            var secs = Math.floor((timeLeft % (1000 * 60)) / 1000);
            document.getElementById("days").innerHTML = days + ' days ';
            document.getElementById("hours").innerHTML = hours + ' hrs ';
            document.getElementById("minutes").innerHTML = mins + ' mins ';
            document.getElementById("seconds").innerHTML = secs + ' secs';
            }
}, 1000);
