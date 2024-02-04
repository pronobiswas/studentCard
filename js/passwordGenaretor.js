let passBtn = document.getElementsByClassName(".passwordGenaretor");
let idNum = document.querySelector("#idNum")
let upperCaseLetter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let lowerLaseCetter = "abcdefghijklmnopqrstuvwxyz";
let numberCharector = "0123456789";
let symbolCharector = "./,<>\$@%&|!~+-()^"

let allCharector = upperCaseLetter + lowerLaseCetter + numberCharector + symbolCharector;
let passWord = "";

passWord += upperCaseLetter[Math.floor(Math.random() * upperCaseLetter.length)]
passWord += lowerLaseCetter[Math.floor(Math.random() * lowerLaseCetter.length)]
passWord += numberCharector[Math.floor(Math.random() * numberCharector.length)]
passWord += symbolCharector[Math.floor(Math.random() * symbolCharector.length)]

let lengthss = 10;

while(lengthss > passWord.length){
    passWord += allCharector[Math.floor(Math.random() * allCharector.length)];
}
idNum.innerHTML = passWord


// ========details===========test===
console.log(idNum)

