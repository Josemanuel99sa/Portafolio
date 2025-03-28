document.getElementById('calificacionForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
    
    const calificacion = parseFloat(document.getElementById('calificacion').value);

    const resultado = evaluarCalificacion(calificacion);

    document.getElementById('resultado').textContent = resultado;
});

function evaluarCalificacion(calificacion) {
    if (calificacion < 0 || calificacion > 10) {
        return "Error: La calificación debe estar entre 0 y 10.";
    } else if (calificacion >= 0 && calificacion < 6) {
        return "NA";
    } else if (calificacion >= 6 && calificacion < 7.5) {
        return "S";
    } else if (calificacion >= 7.5 && calificacion < 9) {
        return "B";
    } else if (calificacion >= 9 && calificacion < 10) {
        return "MB";
    } else if (calificacion === 10) {
        return "LAP";
    }
}