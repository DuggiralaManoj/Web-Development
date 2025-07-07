const form = document.getElementById("registerForm");
const message = document.getElementById("message");
const todoSection = document.getElementById("todoSection");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;


  if (!username || !email || !password || !confirmPassword) {
    message.textContent = "All fields are required.";
    return;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    message.textContent = "Invalid email format.";
    return;
  }

  if (password !== confirmPassword) {
    message.textContent = "Passwords do not match.";
    return;
  }


  message.style.color = "green";
  message.textContent = "Registration successful!";
  form.classList.add("hidden");
  todoSection.classList.remove("hidden");
});


const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");

addTaskBtn.addEventListener("click", function () {
  const task = taskInput.value.trim();
  if (!task) return;

  const li = document.createElement("li");
  li.textContent = task;

  const btnGroup = document.createElement("div");
  btnGroup.classList.add("task-buttons");

  const doneBtn = document.createElement("button");
  doneBtn.textContent = "Done";
  doneBtn.onclick = () => li.classList.toggle("done");

  const delBtn = document.createElement("button");
  delBtn.textContent = "Delete";
  delBtn.onclick = () => taskList.removeChild(li);

  btnGroup.appendChild(doneBtn);
  btnGroup.appendChild(delBtn);
  li.appendChild(btnGroup);
  taskList.appendChild(li);

  taskInput.value = "";
});
