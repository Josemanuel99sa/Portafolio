const unidades = {
    temperatura: ["Celsius", "Fahrenheit", "Kelvin"],
    distancia: ["Metros", "Kilómetros", "Millas", "Pies", "Pulgadas"],
    tiempo: ["Años", "Días", "Horas", "Segundos"],
    moneda: ["MXN", "USD", "Euro"]
};

function actualizarUnidades() {
    let categoria = document.getElementById("categoria").value;
    let unidadOrigen = document.getElementById("unidad-origen");
    let unidadDestino = document.getElementById("unidad-destino");
    
    unidadOrigen.innerHTML = "";
    unidadDestino.innerHTML = "";
    
    unidades[categoria].forEach(unidad => {
        let opcion1 = new Option(unidad, unidad);
        let opcion2 = new Option(unidad, unidad);
        unidadOrigen.add(opcion1);
        unidadDestino.add(opcion2);
    });
}

function convertir() {
    let categoria = document.getElementById("categoria").value;
    let valor = parseFloat(document.getElementById("valor-origen").value);
    let unidadOrigen = document.getElementById("unidad-origen").value;
    let unidadDestino = document.getElementById("unidad-destino").value;
    let resultado = document.getElementById("resultado");
    let valorConvertido = 0;
    
    if (isNaN(valor)) {
        resultado.textContent = "Ingrese un valor válido";
        return;
    }
    
    if (categoria === "temperatura") {
        if (unidadOrigen === "Celsius" && unidadDestino === "Fahrenheit") valorConvertido = (valor * 9/5) + 32;
        else if (unidadOrigen === "Celsius" && unidadDestino === "Kelvin") valorConvertido = valor + 273.15;
        else if (unidadOrigen === "Fahrenheit" && unidadDestino === "Celsius") valorConvertido = (valor - 32) * 5/9;
        else if (unidadOrigen === "Fahrenheit" && unidadDestino === "Kelvin") valorConvertido = (valor - 32) * 5/9 + 273.15;
        else if (unidadOrigen === "Kelvin" && unidadDestino === "Celsius") valorConvertido = valor - 273.15;
        else if (unidadOrigen === "Kelvin" && unidadDestino === "Fahrenheit") valorConvertido = (valor - 273.15) * 9/5 + 32;
        else valorConvertido = valor;
    }
    else if (categoria === "distancia") {
        const factores = {"Metros": 1, "Kilómetros": 1000, "Millas": 1609.34, "Pies": 0.3048, "Pulgadas": 0.0254};
        valorConvertido = (valor * factores[unidadOrigen]) / factores[unidadDestino];
    }
    else if (categoria === "tiempo") {
        const factores = {"Años": 31536000, "Días": 86400, "Horas": 3600, "Segundos": 1};
        valorConvertido = (valor * factores[unidadOrigen]) / factores[unidadDestino];
    }
    else if (categoria === "moneda") {
        const tasas = {"MXN": {"USD": 0.056, "Euro": 0.051}, "USD": {"MXN": 18, "Euro": 0.92}, "Euro": {"MXN": 19.5, "USD": 1.09}};
        valorConvertido = unidadOrigen === unidadDestino ? valor : valor * (tasas[unidadOrigen][unidadDestino] || 1);
    }
    
    resultado.textContent = `Resultado: ${valorConvertido.toFixed(2)} ${unidadDestino}`;
}

actualizarUnidades();
