document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("task").addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      newElement();
    }
  });
});

function newElement() {
  const inputValue = document.getElementById("task").value;
  if (inputValue === "") {
    showErrorToast();
  } else {
    addTask(inputValue);
    showSuccessToast();
  }
  document.getElementById("task").value = "";
}

function addTask(taskText) {
  const li = document.createElement("li");
  const t = document.createTextNode(taskText);
  li.appendChild(t);
  document.getElementById("list").appendChild(li);
}

function showSuccessToast() {
  const successToast = new bootstrap.Toast(document.getElementById("success"));
  successToast.show();
}

function showErrorToast() {
  const errorToast = new bootstrap.Toast(document.getElementById("error"));
  errorToast.show();
}
