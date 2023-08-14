let val = 95;
document.getElementById("add").onclick = function () {
  if (val == 100) {
    window.prompt("You reached increment limit bro 😁");
    val = 0;
  } else {
    ++val;
  }
  document.getElementById("view_part").innerHTML = val;
};
document.getElementById("minus").onclick = function () {
  if (val <= 0) {
    val = 0;
    window.prompt("Value is Less Than Zero", val);
  } else {
    --val;
  }
  document.getElementById("view_part").innerHTML = val;
};
