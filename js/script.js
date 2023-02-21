//поиск по селектору класса
const oneElems = document.querySelectorAll(".lorem");
console.log(oneElems);
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
//получение коллекции форм
const forms = document.forms;
console.log(document.forms);
//вывести 'клик' в консоль
const button = document.querySelector('.button__form');
function showConsole() {
    console.log('Клик');
}
button.addEventListener('click', showConsole);
//
const buttonButton = document.querySelectorAll(".button__form")



