let AddTodos = document.getElementById("addtodos");
let Container = document.getElementById("todoContainer");
let inputField = document.getElementById("inputfield");

AddTodos.addEventListener('click', function () {
  var letter = document.createElement("p");
  letter = document.createTextNode(inputField.value)
  Container.appendChild(letter);
  letter.classList.add('changer');
  inputField.value="";
})