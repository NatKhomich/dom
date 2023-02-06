const bodyElement = document.body;
console.log(bodyElement);

const firstChildNode = bodyElement.firstChild;
const lastChildNode = bodyElement.lastChild;

console.log(firstChildNode);
console.log(lastChildNode);

const childNodes = bodyElement.childNodes;
console.log(childNodes);

console.log(bodyElement.hasChildNodes());
//
const bodyChildren = bodyElement.children;
console.log(bodyChildren);

const bodyFirstElement = bodyElement.firstElementChild;
console.log(bodyFirstElement);

const bodyParentElement = bodyElement.parentElement;
console.log(bodyParentElement);
//поиск по селектору класса
const oneElems = document.querySelectorAll(".lorem");
console.log(oneElems);
//поиск по селектору тега
const twoElems = document.querySelectorAll("li");
console.log(twoElems);
//получ конкретного эл коллекции
console.log(twoElems[1]);
//создание эл-та
const newElement = document.createElement("div");
console.log(newElement);
newElement.innerHTML = "Привет";
//вставить эл
const textElems = document.querySelector(".lorem"); //получ эл-т
const newElementMy = document.createElement("div"); //созд новый эл
newElementMy.innerHTML = "Новый элемент"; //наполняем эл
textElems.before(newElementMy);
//style
const myElement = document.querySelector(".list");
myElement.style.color = "blue";
myElement.style.marginLeft = "40px";
//перезапись стилей
const myEl = document.querySelector(".lorem");
myEl.style.cssText = `
margin-top: 30px;
margin-bottom: 30px;
color: red;
`;

