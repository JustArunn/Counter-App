let count = 0;

document.getElementById("minus").onclick = function () {
  count -= 1;
  document.getElementById("show").innerHTML = count;
  if (count > 0) {
    document.getElementById("show").style.color = "green";
  }
  if (count < 0) {
    document.getElementById("show").style.color = "red";
  }
  if(count == 0)
  {
    document.getElementById("show").style.color = "gray";
  }
};

document.getElementById("plus").onclick = function () {
  count += 1;
  document.getElementById("show").innerHTML = count;
  if (count > 0) {
    document.getElementById("show").style.color = "green";
  }
  if (count < 0) {
    document.getElementById("show").style.color = "red";
  }
  if(count == 0)
  {
    document.getElementById("show").style.color = "gray";
  }
};

document.getElementById("resat").onclick = function () {
  count = 0;
  document.getElementById("show").innerHTML = count;
  document.getElementById("show").style.color = "gray";
};
