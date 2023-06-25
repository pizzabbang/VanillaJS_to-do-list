const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");
const completedList = document.getElementById("completed-list");
const deleteAllList = document.getElementById("deleteAll");

const TODOS_KEY = "todos";
const COMPLETE_KEY = "completed";

let toDos = [];
let completedArr = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteToDo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function completeToDo(event) {
  const li = event.target.parentElement;
  const completed = event.target.parentElement.childNodes[0].innerText;

  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();

  completedArr.push(completed);
  localStorage.setItem(COMPLETE_KEY, JSON.stringify(completedArr));
  paintCompletedTask(completed);
}

function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  span.innerText = newTodo.text;
  const button = document.createElement("button");
  button.innerText = "삭제";
  const completeBtn = document.createElement("button");
  completeBtn.innerText = "완료";

  button.addEventListener("click", deleteToDo);
  completeBtn.addEventListener("click", completeToDo);

  li.appendChild(span);
  li.appendChild(button);
  li.appendChild(completeBtn);
  toDoList.appendChild(li);
}

function paintCompletedTask(completed) {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.innerText = completed;

  li.appendChild(span);
  completedList.appendChild(li);
}

function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintToDo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
const completedToDos = localStorage.getItem(COMPLETE_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}

if (completedToDos !== null) {
  const parsedCompleted = JSON.parse(completedToDos);
  completedArr = parsedCompleted;
  parsedCompleted.forEach(paintCompletedTask);
}

function deleteAll() {
  completedList.replaceChildren();
  localStorage.removeItem("completed");
}

deleteAllList.addEventListener("click", deleteAll);
