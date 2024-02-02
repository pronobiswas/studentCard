let studentName = document.getElementById("student_name");
let mailInput = document.getElementById("mailInput");
let phoneInput = document.getElementById("phoneInput");
let inputDate = document.getElementById("inputDate");
let imgFile = document.querySelector("#imgFile");
let sig = document.getElementById("sig");
let btn = document.getElementById("btn");

// ====card section variable====
let pic = document.querySelector("#pic");
let fullName = document.getElementById("fullName");
let emailAddress = document.getElementById("email_address");
let phonNumber = document.getElementById("phonenum");
let startDate = document.getElementById("startDate");
let validityDate = document.querySelector("#validityDate");
let signn = document.getElementsByClassName("signn");

// =========test==========


// ============fire triger============
btn.addEventListener("click" , function(){
    studentName.innerHTML = fullName.value;
    emailAddress.innerHTML = mailInput.value;
    phonenum.innerHTML = phoneInput.value;
    signn.innerHTML = sig.value;
    startDate.innerHTML = inputDate.value;
    let maindate = new Date(inputDate.value);
    let y = maindate.getFullYear() +1;
    let m = maindate.getMonth() + 3;
    let d = maindate.getDate();
    validityDate.innerHTML = d + "-" + m + "-" + y;
    console.log(sig.value);
    console.log(signn);
    console.log(sig);
})
