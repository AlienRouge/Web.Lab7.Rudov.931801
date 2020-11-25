let DrawSmth = (type) => {
  value = document.querySelector("input").value;
  for (let i = 0; i < value; i++) {
    figure = document.createElement("div");
    size = Math.random() * 100 + 20 + "px";
    figure.classList.add(type);
    figure.ondblclick = removeDiv;
    if (type == "triangle") {
      figure.style.borderLeftWidth = size;
      figure.style.borderRightWidth = size;
      figure.style.borderBottomWidth = size;
    } else {
      figure.style.width = size;
      figure.style.height = size;
    }
    figure.style.top = Math.random() * (80 - 10) + 10 + "%";
    figure.style.left = Math.random() * (85 - 4) + 4 + "%";
    document.querySelector(".canvas").append(figure);
  }
};
function removeDiv() {
  document.querySelector(".canvas").removeChild(this);
}
