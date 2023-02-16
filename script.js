const todoInput = document.querySelector(".TodoInput");
const todoBtn = document.querySelector(".TodoButton");
const todoList = document.querySelector(".TodoListUl");
const Filter = document.querySelector(".TodoSelect");

todoBtn.addEventListener("keypress", addTodoKey);
todoBtn.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteCheck);
Filter.addEventListener("change", FilterStatus);

//localStorage.removeItem("Todos");

function addTodoKey(event) {
  if (event.which === 13) {
    addTodo();
  }
}

function addTodo(event) {
  event.preventDefault();
  const TextInput = todoInput.value;

  if (TextInput.trim().length === 0) {
    todoInput.value = "";
    return alert("請輸入代辦事項");
  }
  Savelocal(TextInput);

  const todoDiv = document.createElement("div");
  todoDiv.classList.add("TodosDiv");

  const newTodo = document.createElement("li");
  newTodo.classList.add("TodosLi");

  newTodo.innerHTML = TextInput;
  todoDiv.appendChild(newTodo);

  const ComBtn = document.createElement("button");
  ComBtn.innerHTML = '<i class="fas fa-check-circle">';
  ComBtn.classList.add("CompleteButton");
  todoDiv.appendChild(ComBtn);

  const DelBtn = document.createElement("button");
  DelBtn.innerHTML = '<i class="fas fa-trash">';
  DelBtn.classList.add("DeleteButton");
  todoDiv.appendChild(DelBtn);

  todoList.appendChild(todoDiv);
  todoInput.value = "";
}

function deleteCheck(event) {
  const target = event.target;

  if (target.classList.contains("DeleteButton")) {
    target.parentNode.remove();
    let JsonArrayOfValue = JSON.parse(localStorage.getItem("Todos"));
    let TargetText = target.parentNode.innerText;

    if (JsonArrayOfValue.includes(TargetText)) {
      JsonArrayOfValue.splice(JsonArrayOfValue.indexOf(TargetText), 1);
      localStorage.setItem("Todos", JSON.stringify(JsonArrayOfValue));
      console.log(JsonArrayOfValue);
    }
  }

  if (target.classList.contains("CompleteButton")) {
    target.parentNode.classList.toggle("completed");
  }
}

function Savelocal(event) {
  const JsonArrayOfValue = JSON.parse(localStorage.getItem("Todos")) || [];
  JsonArrayOfValue.push(event);
  localStorage.setItem("Todos", JSON.stringify(JsonArrayOfValue));
  console.log(JsonArrayOfValue);
}

function FilterStatus(event) {
  const NodeList = document.querySelectorAll(".TodosDiv");
  NodeList.forEach(function (CheckCompleted) {
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
