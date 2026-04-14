if (text === "C") {
      display = "";
      document.getElementById("taskInput").value = "";
    } 
    else if (text === "=") {
      // Вычисляем и сразу превращаем в строку для стабильности
      display = eval(display).toString();
      document.getElementById("taskInput").value = display;
    } 
    else {
      // Просто добавляем нажатый символ
      display += text;
      document.getElementById("taskInput").value = display;
    }
  });
});
