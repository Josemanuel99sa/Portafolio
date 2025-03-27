function validateAndAddRow() {
   
    const text = document.getElementById('text').value;
    const email = document.getElementById('email').value;
    const checkboxes = document.querySelectorAll('input[name="checkbox"]:checked');
    const radios = document.querySelector('input[name="radio"]:checked');
    const datetime = document.getElementById('datetime').value;
    const color = document.getElementById('color').value;
    const range = document.getElementById('range').value;

    if (!text) {
        alert('El campo Texto está vacío');
        return;
    }
    if (!email) {
        alert('El campo Email está vacío');
        return;
    }
    if (checkboxes.length === 0) {
        alert('Debes seleccionar al menos una opción en Checkbox');
        return;
    }
    if (!radios) {
        alert('Debes seleccionar una opción');
        return;
    }
    if (!datetime) {
        alert('El campo Fecha y Hora está vacío');
        return;
    }
    if (!color) {
        alert('El campo Color está vacío');
        return;
    }
    if (!range) {
        alert('El campo Rango está vacío');
        return;
    }

    const table = document.getElementById('dataTable').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);
    const cell6 = newRow.insertCell(5);
    const cell7 = newRow.insertCell(6);

    cell1.textContent = text;
    cell2.textContent = email;

    let checkboxValues = [];
    checkboxes.forEach(checkbox => {
        checkboxValues.push(checkbox.value);
    });
    cell3.textContent = checkboxValues.join(', ');

    cell4.textContent = radios.value;
    cell5.textContent = datetime;
    cell6.innerHTML = `<div style="width: 50px; height: 20px; background-color: ${color};"></div>`;
    cell7.textContent = range;

    document.getElementById('dataForm').reset();
}