//создать div
const div = document.createElement('div');
//добавить класс wrapper
div.classList.add('wrapper');
//поместить его в тег body
const tagBody = document.body//получаем body
tagBody.append(div);
console.log(tagBody)
//создать заголовок h1 с текстом "DOM (Document Object Model)"
const header = document.createElement('h1');
header.textContent = 'DOM (Document Object Model)';
//добавить h1 перед div с классом wrapper
div.insertAdjacentElement('beforebegin', header);
//создать список <ul></ul> и доб в него 3 <li></li> с текстом 1, 2, 3
const ul = `
    <ul>
        <li>один</li>
        <li>два</li>
        <li>три</li>
    </ul>
`;
//поместить ul в div
div.innerHTML = ul;
//==================================================================
//создать изображение
const img = document.createElement('img');
//добавить атрибут source
img.src = 'https://picsum.photos/250';
//добавить атрибут width сщ значением 250
img.width = 250;
//добавить класс super
img.classList.add('super');
//добавить свойство alt со значением "Super Man"
img.alt = "Super Man";
//поместить изображение внутрь div
div.append(img);
//используя HTML строку, сщздать div с классом pDiv с 2-мя параграфами
const elemHTML = `
    <div class = 'pDiv'>
        <p>Параграф 1</p>
        <p>Параграф 2</p>
    </div>`;
//поместить новый div до элемента <ul></ul>
const ulList = div.querySelector('ul');
ulList.insertAdjacentHTML('beforebegin', elemHTML)
//добавить для 2-го параграфа класс текст
const pDiv = document.querySelector('.pDiv');
pDiv.children[1].classList.add('text');
//удалить первый параграф
pDiv.firstElementChild.remove();
//====================================================================















