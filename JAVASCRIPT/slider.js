window.onload = function() {
const IMG = [
  'IMG/csgo.jpg',
  'IMG/dota_2.jpg',
  'IMG/Path_of_Exile.jfif',
  'IMG/Team_Fortress_2.jpg',
  'IMG/Warframe.jpg',
];

var posicionInicial = 0;

var $botonDerecha = document.querySelector('.next');

var $botonIzquierda = document.querySelector('.back');

var $imagen = document.querySelector('#div_img');

function pasarImg() {
  if(posicionInicial >= IMG.length - 1) {
    posicionInicial = 0;
  }
  else {
    posicionInicial++;
  }
  mostrarImagen();
}

function retrocederImg(){
  if(posicionInicial <= 0) {
    posicionInicial = IMG.length - 1;
  }
  else {
    posicionInicial--;
  }
  mostrarImagen();
}

function mostrarImagen(){
  $imagen.style.backgroundImage = `url(${IMG[posicionInicial]})`;
}

$botonDerecha.addEventListener('click', pasarImg);

$botonIzquierda.addEventListener('click', retrocederImg);

mostrarImagen();
}