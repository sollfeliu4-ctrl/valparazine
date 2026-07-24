const boton = document.querySelector(".desembarcar");

boton.addEventListener("click", function(){

alert("Bienvenida al Puerto Digital 🌙⚓");

});


document.body.addEventListener('click', function iniciarMusica() {
  const musica = document.getElementById('musica');
  musica.play();
  document.body.removeEventListener('click', iniciarMusica);
}, { once: true });
