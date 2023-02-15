const todoInput = document.querySelector(".todo-input");
const todoBtn = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const Filter = document.querySelector(".todo-select");

todoBtn.addEventListener("keypress", addTodoKey);
todoBtn.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
Filter.addEventListener("change", FilterStatus);

localStorage.removeItem("Todos");

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
  newTodo.innerHTML = TextInput;
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

  if (target.classList.contains("trashbtn")) {
    target.parentNode.remove();
    let value = JSON.parse(localStorage.getItem("Todos"));
    let a = target.parentNode.innerText;

    if (value.includes(a)) {
      value.splice(value.indexOf(a), 1);
      localStorage.setItem("Todos", JSON.stringify(value));
      console.log(value);
    }
  }

  if (target.classList.contains("combtn")) {
    target.parentNode.classList.toggle("completed");
  }
}

function Savelocal(event) {
  const t = JSON.parse(localStorage.getItem("Todos")) || [];
  t.push(event);
  localStorage.setItem("Todos", JSON.stringify(t));
  console.log(t);
}

function FilterStatus(event) {
  const Select = document.querySelectorAll(".todos");
  Select.forEach(function (CheckCompleted) {
    switch (event.target.value) {
      case "All":
        CheckCompleted.style.display = "flex";
        break;

      case "Completed":
        if (CheckCompleted.classList.contains("completed")) {
          CheckCompleted.style.display = "flex";
        } else {
          CheckCompleted.style.display = "none";
        }
        break;

      case "Incomplete":
        if (CheckCompleted.classList.contains("completed")) {
          CheckCompleted.style.display = "none";
        } else {
          CheckCompleted.style.display = "flex";
        }
        break;
    }
  });
}
