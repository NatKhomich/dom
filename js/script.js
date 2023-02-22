//создать div
const div = document.createElement('div');
//добавить класс wrapper
div.classList.add('wrapper');
//поместить его в тег body
const tagBody = document.body//получаем body
tagBody.appendChild(div);
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







