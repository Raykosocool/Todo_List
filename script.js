const todoInput = document.querySelector(".todo-input");
const todoBtn = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

todoBtn.addEventListener("keypress", addTodoKey);
todoBtn.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);

function addTodoKey(event) {
  if (event.which === 13) {
    addTodo();
  }
}

function addTodo(event) {
  event.preventDefault();
  const TextInput = todoInput.value;
  Savelocal(TextInput);
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todos");
  todoDiv.appendChild(newTodo);
  todoList.appendChild(todoDiv);
  todoInput.value = "";

  const CompleteBtn = document.createElement("button");
  CompleteBtn.innerHTML = '<i class="fas fa-check-circle">';
  CompleteBtn.classList.add("combtn");
  todoDiv.appendChild(CompleteBtn);

  const TrashBtn = document.createElement("button");
  TrashBtn.innerHTML = '<i class="fas fa-trash">';
  TrashBtn.classList.add("trashbtn");
  todoDiv.appendChild(TrashBtn);
}

function deleteCheck(event) {
  const target = event.target;

  if (target.classList[0] === "trashbtn") {
    target.parentNode.remove();
    localStorage.removeItem("Todos");
  }
}

function Savelocal(todo) {
  let t;
  if (localStorage.getItem("Todos") === null) {
    t = [];
  } else {
    t = JSON.parse(localStorage.getItem("Todos"));
  }
  t.push(todo);
  localStorage.setItem("Todos", JSON.stringify(t));
}
