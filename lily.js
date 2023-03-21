// const input = document.querySelector(".task");
//   const ul = document.querySelector(".list");
//   const addBtn = document.querySelector(".add-button");

//   function loadDataFromLocalStorage() {
//     let lists = JSON.parse(localStorage.getItem("lists"));
//     if (lists !== null) {
//       lists.forEach((task) => {
//         createNewTask(task);
//       });
//     }
//   }

//   function createNewTask(task) {
//     let newTask = input.value;
//     if (task) {
//       newTask = task.name;
//     }

//     let li = document.createElement("li");
//     if (task && task.checked) {
//       li.classList.add("todolist");
//     }

//     if (newTask === "") {
//       return alert("Enter valid task");
//     } else {
//       ul.appendChild(li);
//     }

//     li.innerText = newTask;
//     input.value = "";
//     const checkBox = document.createElement("div");
//     checkBox.innerHTML = `<i class="fa-solid fa-square-check"></i>`;
//     li.appendChild(checkBox);
//     const trashBtn = document.createElement("div");
//     trashBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`;
//     li.appendChild(trashBtn);

//     checkBox.addEventListener("click", () => {
//       li.classList.toggle("todolist");
//       updateLocalStorage();
//     });

//     trashBtn.addEventListener("click", () => {
//       li.remove();
//       updateLocalStorage();
//     });

//     updateLocalStorage();
//   }

//   function updateLocalStorage() {
//     const liElements = document.querySelectorAll("li");

//     let lists = [];
//     Array.from(liElements).forEach(li => {
//       lists.push({
//         name: li.innerText,
//         checked: li.classList.contains("todolist"),
//       });
//     });

//     localStorage.setItem("lists", JSON.stringify(lists));
//   }

//   loadDataFromLocalStorage();

//   addBtn.addEventListener("click", (event) => {
//     event.preventDefault();
//     createNewTask();
//   });

  let fruit = ['apple', 'mango', 'banana'];
  function changeFruit( fruit ) {
        fruit[2] = "orange";
        return fruit;
  }
