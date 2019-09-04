const title = document.querySelector("#title");

const BASE_COLOR = "#34495e";

const OTHER_COLOR = "#7f8c8d";

const CLICKED_CLASS = 'clicked';

function handleClick(){
  title.style.color="red";

  const currentColor = title.style.color;
  console.log(currentColor);
}

function init(){
  title.style.color = BASE_COLOR;
  title.addEventListener("click", handleClick);
}
init();
