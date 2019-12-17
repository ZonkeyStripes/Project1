let  = document.querySelector("#");
let  = document.querySelector("#");
let  = document.querySelector("#");
let  = document.querySelector("#");

let ingredients = [];

init();

function renderIngredients() {
  // Clear ingredents element (and update todoCountSpan)
  todoList.innerHTML = "";
  todoCountSpan.textContent = todos.length;

  // Render a new li for each todo
  for (let i = 0; i < ingredients.length; i++) {
    let ingredents = ingredients[i];

    let li = document.createElement("li");
    li.textContent = ingredents;
    li.setAttribute("data-index", i);

    let button = document.createElement("button");
    button.textContent = "Complete";

    li.appendChild(button);
    todoList.appendChild(li);
  }
}

function init() {
  // Get stored todos from localStorage
  // Parsing the JSON string to an object
  var storedTodos = JSON.parse(localStorage.getItem("todos"));

  // If todos were retrieved from localStorage, update the todos array to it
  if (storedTodos !== null) {
    todos = storedTodos;
  }

  // Render todos to the DOM
  renderTodos();
}

function storeTodos() {
  // Stringify and set "todos" key in localStorage to todos array
  localStorage.setItem("todos", JSON.stringify(todos));
}

// When form is submitted...
todoForm.addEventListener("submit", function(event) {
  event.preventDefault();

  var todoText = todoInput.value.trim();

  // Return from function early if submitted todoText is blank
  if (todoText === "") {
    return;
  }

  // Add new todoText to todos array, clear the input
  todos.push(todoText);
  todoInput.value = "";

  // Store updated todos in localStorage, re-render the list
  storeTodos();
  renderTodos();
});

// When a element inside of the todoList is clicked...
todoList.addEventListener("click", function(event) {
  var element = event.target;

  // If that element is a button...
  if (element.matches("button") === true) {
    // Get its data-index value and remove the todo element from the list
    var index = element.parentElement.getAttribute("data-index");
    todos.splice(index, 1);

    // Store updated todos in localStorage, re-render the list
    storeTodos();
    renderTodos();
  }
});
