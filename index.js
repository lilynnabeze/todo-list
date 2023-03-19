const form = document.querySelector(".submit-form");

const input = document.querySelector(".task");

const ul = document.querySelector(".list");

let lists = JSON.parse(localStorage.getItem("lists"));

lists.forEach((task) => {
  todoList(task);
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  todoList();
});

function todoList(task) {
  let newTask = input.value;
  if (task) {
    newTask = task.name;
  }

  let li = document.createElement("li");
  if (task && task.checked) {
    li.classList.add("todolist");
  }

  li.innerText = newTask;
  ul.appendChild(li);
  input.value = "";
  const checkBox = document.createElement("div");
  checkBox.innerHTML = `<i class="fa-solid fa-square-check"></i>`;
  li.appendChild(checkBox);
  const trashBtn = document.createElement("div");
  trashBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`;
  li.appendChild(trashBtn);

  checkBox.addEventListener("click", () => {
    li.classList.toggle("todolist");
    updateLocalStorage();
  });

  trashBtn.addEventListener("click", () => {
    li.remove();
    updateLocalStorage();
  });

  updateLocalStorage();
}

function updateLocalStorage() {
  const liElements = document.querySelectorAll("li");

  lists = [];
  liElements.forEach((li) => {
    lists.push({
      name: li.innerText,
      checked: li.classList.contains("todolist"),
    });
  });

  localStorage.setItem("lists", JSON.stringify(lists));
}
