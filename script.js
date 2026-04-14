if (text === "C") {
      display = "";
      document.getElementById("taskInput").value = "";
    } 
    else if (text === "=") {
      display = eval(display).toString();
      document.getElementById("taskInput").value = display;
    } 
    else {
      display += text;
      document.getElementById("taskInput").value = display;
    }
  });
});
