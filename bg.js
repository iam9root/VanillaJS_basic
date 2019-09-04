const body = document.querySelector("body");

const IMG_NUMBER = 2;



function paintImage(imgNumber){
  const image = new Image();
  image.src = `./images/${imgNumber}.gif`
  image.classList.add("bgImage");
  body.prepend(image);

}
/*
function genRandom(){
  const number = Math.floor(Math.random() * IMG_NUMBER);
  return number;
}
*/
function init(){
  // const randomNumber = genRandom();
  paintImage('gagul');
}
init();
