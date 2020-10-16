document.querySelector('form').addEventListener('submit', handleSubmitForm);
document.querySelector('ul').addEventListener('click', handleClickDeleteOrCheck);
document.querySelector('.clearAll').addEventListener('click', handleClearAll);
let itemsArray = localStorage.getItem('items')
  ? JSON.parse(localStorage.getItem('items'))
  : [];

  localStorage.setItem('items', JSON.stringify(itemsArray));
const data = JSON.parse(localStorage.getItem('items'));

function handleSubmitForm(e){
    e.preventDefault();
    let input = document.querySelector('input');
    if(input.value != '')
        itemsArray.push(input.value);
        localStorage.setItem('items', JSON.stringify(itemsArray));
        addTodo(input.value);
        input.value = '';
}

data.forEach((item) => {
    addTodo(item);
  });

function handleClickDeleteOrCheck(e){
    if(e.target.name == 'checkButton')
        checkTodo(e);

    if(e.target.name == 'deleteButton')
        deleteTodo(e);    
}

function handleClearAll(e){
    document.querySelector('ul').innerHTML = '';
    localStorage.clear();
}

function addTodo(todo) {
    let ul = document.querySelector('ul');
    let li = document.createElement('li');

    li.innerHTML = `
        <span class="todo-item">${todo}</span>
        <button name="checkButton"><i class="fas fa-check-square"></i></button>
        <button name="deleteButton"><i class="fas fa-trash-alt"></i></button>
        `;
        li.classList.add('todo-list-item');
        ul.appendChild(li);
}

function checkTodo(e){
    let item = e.target.parentNode;
    if(item.tagName === 'LI'){
        item.classList.toggle('checked');
      
    }   
}

function deleteTodo(e){
 let item = e.target.parentNode;
 item.addEventListener('transitionend', function (){
      item.remove();
 });
 item.classList.add('todo-list-item-fall');
}
