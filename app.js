function add_list() {
  var x = document.getElementById("task").value;
  const node = document.createElement("div");
  node.className = "list-group-item list-group-item-primary mb-2";
  const textNode = document.createTextNode(x);
  node.appendChild(textNode);
  var b = document.createElement("button");
  b.className = "btn btn-danger";
  b.textContent = "delete";
  b.style = "float:right;";
  b.onclick = delete_todo;
  node.appendChild(b);

  var e = document.createElement("button");
  e.className = "btn btn-warning";
  e.textContent = "Edit";
  e.style = "float:right;";
  e.onclick = edit_todo;
  node.appendChild(e);

  document.getElementById("result").append(node);
  document.getElementById("task").value = "";
}

function clear_todo() {
  document.getElementById("result").innerHTML = " ";
}

function delete_todo(e) {
  e.target.parentElement.remove();
}

function edit_todo(e) {
  const newdiv = document.createElement("div");
  newdiv.className = "container text-center mt-3";
  var i = document.createElement("input");
  i.className = "form-control";
  i.setAttribute("type", "text");
  newdiv.appendChild(i);
  var b1 = document.createElement("button");

  b1.className = "btn btn-success";
  b1.textContent = "Update";
  b1.onclick = edit_text;
  newdiv.appendChild(b1);

  var b2 = document.createElement("button");
  b2.className = "btn btn-success";
  b2.textContent = "Close";
  b2.onclick = close_box;
  newdiv.appendChild(b2);
  e.target.parentElement.append(newdiv);
}

function edit_text(e) {
  e.target.parentElement.firstChild.value;
  const textnode1 = document.createTextNode(y);
  e.target.parentElement.parentElement.replaceChild(
    textnode1,
    e.target.parentElement.parentElement.firstChild
  );
}

function close_box(e) {
  e.target.parentElement.remove();
}
