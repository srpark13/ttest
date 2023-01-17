const cBorder = document.querySelector(".clockBorder");

for (let i = 0; i < 12; i++) {
    const tmpGrad = document.createElement("div");
    tmpGrad.classList.add('grad');
    tmpGrad.style.transform = `rotate(${i * 15}deg)`;
    cBorder.appendChild(tmpGrad);
}
const innerCircle = document.createElement("div");
innerCircle.classList.add('innerCircle');
cBorder.appendChild(innerCircle);


function rotateHand(handObject,degree){
    handObject.style.transform = `rotate(${degree}deg)`;
}
function getTime() {
    const date = new Date();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();
    if (hour < 10) {
        hour = '0' + hour;
    }
    if (minute < 10) {
        minute = '0' + minute;
    }
    if (second < 10) {
        second = '0' + second;
    }

    const timeInfo = document.querySelector(".timeInfo")
    timeInfo.innerText = `${hour} : ${minute} : ${second}`;
    const hourDeg = (360 * (hour / 12));
    const minDeg = (360 * (minute / 60));
    const secDeg = (360 * (second / 60));
    const tmpHHand = document.querySelector(".hourHand");
    const tmpMHand = document.querySelector(".minHand");
    const tmpSHand = document.querySelector(".secHand");
    rotateHand(tmpHHand,hourDeg);
    rotateHand(tmpMHand,minDeg);
    rotateHand(tmpSHand,secDeg);
}
const hourHand = document.createElement("div");
const minHand = document.createElement("div");
const secHand = document.createElement("div");
const center = document.createElement("div");
hourHand.classList.add("hourHand");
minHand.classList.add("minHand");
secHand.classList.add("secHand");
center.classList.add("center");
// const clockBox = document.querySelector(".clockBox");
// clockBox.appendChild(hourHand);
// clockBox.appendChild(minHand);
// clockBox.appendChild(secHand);
// clockBox.appendChild(center);
cBorder.appendChild(hourHand);
cBorder.appendChild(minHand);
cBorder.appendChild(secHand);
cBorder.appendChild(center);
setInterval(getTime, 1000);