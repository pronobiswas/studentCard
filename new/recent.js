let element = document.getElementById("div1");
element.style.width = "400px";
element.style.height = "400px";
element.style.backgroundColor = "whitesmoke"

const para = document.createElement("p");
const mynode = document.createTextNode("This is new.");
para.appendChild(mynode);
element.appendChild(para);

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





