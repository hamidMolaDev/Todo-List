const todoList = [];

renderTodoList();

function renderTodoList() {
  let todoListHTML = '';

  for (let i = 0; todoList.length > i; i++) {
    const todoObject = todoList[i];
    
    //const name = todoObject.name;
   // const dueDate = todoObject.dueDate;
    
    const { name, dueDate } = todoObject;
    
    const  html = `
    <div>
    ${name}</div> 
    <div>${dueDate}</div> 
 
    <button class="delete-button" onclick="
      todoList.splice(${i}, 1);
      renderTodoList();
      ">Delete</button>
    `;
    

    todoListHTML += html;
  }
    console.log(todoListHTML);

    document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addTodo () {
  const inputElement = document.querySelector('.js-name-input')

  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;

  todoList.push({name, dueDate});
  console.log(todoList);

  inputElement.value ='';

  renderTodoList();
}