let btn = document.querySelector("button");
let ol = document.querySelector("ol");
let inp = document.querySelector("input");
let Date = document.querySelector("#date");
var todo_list = [];
// $(".content").empty();
btn.addEventListener("click", function () {
  let box = document.createElement("div.content")
  let item = document.createElement("li");
  let value = inp.value.trim();
  let date = Date.value;
  item.appendChild(box);
  let Box = `<div class="content">
  <h1>${value}</h1>
  <p>Deadline:<span>${date}</span></p>
  </div>`;
  
  box.innerHTML = Box;
  

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

