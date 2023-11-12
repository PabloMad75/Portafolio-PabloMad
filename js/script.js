document.addEventListener('DOMContentLoaded', function () {
  // Función para mostrar/ocultar el menú en dispositivos pequeños
  function toggleMenu() {
    var menu = document.querySelector('.menu');
    menu.classList.toggle('show');
  }

  // Asociar la función toggleMenu al evento click del ícono de menú
  var menuIcon = document.querySelector('.menu-icon');
  menuIcon.addEventListener('click', toggleMenu);

  // También cerrar el menú al hacer clic en un enlace del menú
  var menuItems = document.querySelectorAll('.menu a');
  menuItems.forEach(function (item) {
    item.addEventListener('click', toggleMenu);
  });
});


console.log("conectado2")