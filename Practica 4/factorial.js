document.getElementById('factorialForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const numero = parseInt(document.getElementById('numero').value);
    const resultado = calcularFactorial(numero);

    if (resultado === null) {
        document.getElementById('resultado').textContent = "Error: El factorial no está definido para números negativos.";
    } else {
        document.getElementById('resultado').textContent = `El factorial de ${numero} es: ${resultado}`;
    }
});

function calcularFactorial(n) {
    if (n < 0) {
        return null; 
    } else if (n === 0) {
        return 1; 
    } else {
        return n * calcularFactorial(n - 1);
    }
}