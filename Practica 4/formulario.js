document.getElementById('infoFormulario').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const edad = document.getElementById('edad').value;
    const genero = document.querySelector('input[name="genero"]:checked').value;
    const fechaNacimiento = document.getElementById('fechaNacimiento').value;
    const colorFavorito = document.getElementById('colorFavorito').value;

    const mensaje = `
        Nombre: ${nombre}<br>
        Correo: ${correo}<br>
        Edad: ${edad}<br>
        Género: ${genero}<br>
        Fecha de Nacimiento: ${fechaNacimiento}<br>
        Color Favorito: <span style="color: ${colorFavorito};">${colorFavorito}</span> `;
    document.getElementById('resultado').innerHTML = mensaje;
});