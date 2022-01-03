//Selectors
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");

//Event Listeners
todoButton.addEventListener("click", addToDo);
todoList.addEventListener("click", deleteTodo);

//Functions
function addToDo(e) {
  e.preventDefault();
  //Create todo div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  //Create li items
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");
  //Stick the li inside of div
  todoDiv.appendChild(newTodo);
  //Create completed button
  const completedButton = document.createElement("button");
  completedButton.innerHTML = "<i class='fas fa-check'></i>";
  completedButton.classList.add("completed-btn");
  todoDiv.appendChild(completedButton);
  //Create delete button
  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = "<i class='fas fa-trash'></i>";
  deleteButton.classList.add("delete-btn");
  todoDiv.appendChild(deleteButton);
  //Sticking the new todos inside of the list
  todoList.appendChild(todoDiv);
  todoInput.value = "";
}

function deleteTodo(e) {
  const item = e.target;
  //When delete btn clicked
  if (item.classList[0] === "delete-btn") {
    const todo = item.parentElement;
    //Animation
    todo.classList.add("fall");
    //Wait for the transition to finish then remove
    todo.addEventListener("transitionend", function () {
      todo.remove();
    });
  }
  //When completed btn clicked
  if (item.classList[0] === "completed-btn") {
    item.parentElement.classList.toggle("checked");
  }
}
