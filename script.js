let display = ""
const buttons = document.querySelectorAll('.btn')
buttons.forEach(function(button){
  button.addEventListener("click", function(){

  if (button.textContent === "C") {
    document.getElementById("taskInput").value = ""
    display = "" }
  else if (button.textContent === "=") {
    display = eval(display).toString();
    document.getElementById("taskInput").value = display
  }
  else {
    display += button.textContent
    document.getElementById("taskInput").value = display
}
  })
})
