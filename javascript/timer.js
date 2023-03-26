var count = 3251;
function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function timeDisp() {
    count++;
    document.getElementById("num_4").innerHTML = count;
    if (count > 5000) {
            count = 4168;
            document.getElementById("num_4").innerHTML = count;
    }
}
setInterval(timeDisp, getRandomInRange(800, 1800));				var count = 3251;
function getRandomInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function timeDisp() {
    count++;
    document.getElementById("num_4").innerHTML = count;
    if (count > 5000) {
            count = 4168;
            document.getElementById("num_4").innerHTML = count;
    }
}
setInterval(timeDisp, getRandomInRange(800, 1800));