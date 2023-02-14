const todoInput = document.querySelector(".todo-input");
const todoBtn = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

document.addEventListener("DOMContentLoaded", LoadDOM);
document.addEventListener("keypress", addTodoKey);
todoBtn.addEventListener("click", addTodo);

function addTodoKey(event) {
  if (event.which === 13) {
    addTodo();
  }
}

function addTodo(event) {
  event.preventDefault();
  const TextInput = document.querySelector(".todo-input").value;
  localStorage.setItem("Todos", TextInput);
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  todoList.appendChild(newTodo);
  todoInput.value = "";

  const CompleteBtn = document.createElement("button");
  CompleteBtn.innerHTML = '<i class="fas fa-check-circle">';
  CompleteBtn.classList.add("com-btn");
  todoList.appendChild(CompleteBtn);

  const TrashBtn = document.createElement("button");
  TrashBtn.innerHTML = '<i class="fas fa-trash">';
  TrashBtn.classList.add("trash-btn");
  todoList.appendChild(TrashBtn);
  console.log(todoList);
}

function LoadDOM(event) {
  console.log("DOM!");
}
