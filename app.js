let btn = document.querySelector("button");
let ol = document.querySelector("ol");
let inp = document.querySelector("input");
let Date = document.querySelector("#date");
var todo_list = [];

btn.addEventListener("click", function () {
  let item = document.createElement("li");
  let value = inp.value.trim();
  let date = Date.value;

  let contentTask = document.createElement("h1")
  contentTask.innerText = value;
  item.appendChild(contentTask);

  let contentDate = document.createElement("p")
  contentDate.innerText = `Deadline:${date}`;
  item.appendChild(contentDate);


  let delBtn = document.createElement("button");
  delBtn.innerText = "Delete";
  delBtn.classList.add("delete");

  item.appendChild(delBtn);
  ol.appendChild(item);
  inp.value = "";
});

ol.addEventListener("click", function (event) {
  if (event.target.nodeName == "BUTTON") {
    let listItem = event.target.parentElement;
    listItem.remove();
  }
});

