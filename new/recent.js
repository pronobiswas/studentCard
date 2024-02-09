let element = document.getElementById("div1");
element.style.width = "400px";
element.style.height = "400px";
element.style.backgroundColor = "whitesmoke"
// =======prgraph=========
const para = document.createElement("p");
const mynode = document.createTextNode("This is new.");
para.appendChild(mynode);
element.appendChild(para);
// ===========heading==========
const headdding = document.createElement("h1");
headdding.style.color= "red"
const secondNode = document.createTextNode("hello");
headdding.appendChild(secondNode);
element.appendChild(headdding);

console.log(headdding);
// ======div=====
const redDiv = document.createElement("div");
redDiv.style.width = "100px"
redDiv.style.height = "100px"
redDiv.style.backgroundColor = "red"
element.appendChild(redDiv);

const h3 = document.createElement("h3");
const whiteText = document.createTextNode("on Nice");
h3.appendChild(whiteText);
redDiv.appendChild(h3)


// =====images========
const pic = document.createElement("img");
pic.style.width = "120px";
pic.style.height = "120px";
pic.style.backgroundColor = "green"
pic.alt = "photos";
pic.src = "./pic.jpg"
element.appendChild(pic);

// ===========next stape=======
let person = [];
 person1 = {
    name : "pronob biswas",
    batch : 2306,
    program : "MERN stack"
};
person.push(person1)
person2 = {
    name : "dipto vai",
    batch : 2306,
    program : "MERN stack"
};
person.push(person2);
person3 = {
    name : "arup dhar",
    batch : 2306,
    program : "MERN stack"
};
person.push(person3);
person4 = {
    name : "bejoy vai",
    batch : 2306,
    program : "MERN stack"
};
person.push(person4);
console.log(person);

// ==============asimple constractor function=========
function secondPerson(names,batch,depertment,gitlink){
    this.names = names;
    this.batch = batch;
    this.depertment = depertment;
    this.gitlink = gitlink;
};

const ami = new secondPerson ("pronob" , 2306 , "MERN", "github.com");
const dipto = new secondPerson ("dipto" , 2306 , "MERN", "github.com");
const saykat = new secondPerson("saykat", "####" , "radiology" ,"github.com");

console.log(ami);
console.log(saykat);

let I = saykat.names;
const h4 = document.createElement("h4");
const secondText = document.createTextNode(I);
h4.appendChild(secondText);
element.appendChild(h4)


// ===========second division=============

let section = document.querySelector("#secndSection"); //maindiv
section.classList.add('section2nd');

let flexbox = document.createElement('div');//flexbox
flexbox.classList.add('flexbox');
flexbox.innerHTML = `<h1>hello</h1>`;

let formBox =  document.createElement('div');
formBox.classList.add('formBox');
flexbox.appendChild(formBox);
// =====this the form=====
let forms =  document.createElement('form');
forms.classList.add('formBox');
formBox.appendChild(forms);
// =====input type text=====
let inputs =  document.createElement('input');
inputs.classList.add('formBox');
inputs.type = "text";
forms.appendChild(inputs);
// =======the button elements====
let doBtn = document.createElement('button');
doBtn.innerText = "click me";
forms.appendChild(doBtn);
// ========output result========
let toDo = document.createElement('div');
formBox.appendChild(toDo);
// =======******form Input Value******=======
// =======******form Input Value******=======
toDo.addEventListener("click" , function(){
    let inputValue = inputs.value;
    toDo.innerText = inputValue;
    console.log(inputs.value);
})





section.appendChild(flexbox);



