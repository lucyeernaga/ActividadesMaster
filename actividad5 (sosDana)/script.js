// Obtener los elementos
const menuHamburguesa = document.getElementById('menu-hamburguesa');
const menu = document.getElementById('menu');

// Función para alternar la visibilidad del menú
menuHamburguesa.addEventListener('click', function() {
    menu.classList.toggle('show');
});