// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    
    // Suma de tres valores constantes
    document.getElementById('btn-suma').addEventListener('click', function() {
        const valor1 = 25;
        const valor2 = 21;
        const valor3 = 7;
        const suma = valor1 + valor2 + valor3;
        
        document.getElementById('resultado-suma').innerHTML = 
            `La suma de los valores constantes es: <strong>${suma}</strong>`;
    });
    
    // Cuadrado de un número
    document.getElementById('btn-cuadrado').addEventListener('click', function() {
        const inputNumero = document.getElementById('numero-cuadrado');
        const numero = parseInt(inputNumero.value);
        
        if (isNaN(numero)) {
            document.getElementById('resultado-cuadrado').innerHTML = 
                'Por favor, ingresa un número válido.';
            return;
        }
        
        const cuadrado = numero * numero;
        document.getElementById('resultado-cuadrado').innerHTML = 
            `El cuadrado de <strong>${numero}</strong> es: <strong>${cuadrado}</strong>`;
    });
    
    // Promedio de calificaciones
    document.getElementById('btn-promedio').addEventListener('click', function() {
        const nombre = document.getElementById('nombre-estudiante').value.trim();
        const calificacion1 = parseFloat(document.getElementById('calificacion1').value);
        const calificacion2 = parseFloat(document.getElementById('calificacion2').value);
        const calificacion3 = parseFloat(document.getElementById('calificacion3').value);
        
        if (!nombre) {
            document.getElementById('resultado-promedio').innerHTML = 
                'Por favor, ingresa el nombre del estudiante.';
            return;
        }
        
        if (isNaN(calificacion1) || isNaN(calificacion2) || isNaN(calificacion3)) {
            document.getElementById('resultado-promedio').innerHTML = 
                'Por favor, ingresa las tres calificaciones válidas.';
            return;
        }
        
        if (calificacion1 < 0 || calificacion1 > 20 || 
            calificacion2 < 0 || calificacion2 > 20 || 
            calificacion3 < 0 || calificacion3 > 20) {
            document.getElementById('resultado-promedio').innerHTML = 
                'Las calificaciones deben estar entre 0 y 20.';
            return;
        }
        
        const promedio = (calificacion1 + calificacion2 + calificacion3) / 3;
        document.getElementById('resultado-promedio').innerHTML = 
            `El promedio de <strong>${nombre}</strong> es: <strong>${promedio.toFixed(2)}</strong> puntos`;
    });
    
    // Conversión de unidades
    document.getElementById('btn-conversion').addEventListener('click', function() {
        const metros = parseFloat(document.getElementById('metros').value);
        
        if (isNaN(metros) || metros < 0) {
            document.getElementById('resultado-conversion').innerHTML = 
                'Por favor, ingresa un valor válido en metros.';
            return;
        }
        
        const centimetros = metros * 100;
        const kilometros = metros / 1000;
        
        document.getElementById('resultado-conversion').innerHTML = 
            `<strong>${metros}</strong> metros equivalen a <strong>${centimetros.toLocaleString()}</strong> centímetros y <strong>${kilometros}</strong> kilómetros.`;
    });
    
    // Comparación de dos valores
    document.getElementById('btn-comparacion').addEventListener('click', function() {
        const numero1 = parseFloat(document.getElementById('numero1').value);
        const numero2 = parseFloat(document.getElementById('numero2').value);
        
        if (isNaN(numero1) || isNaN(numero2)) {
            document.getElementById('resultado-comparacion').innerHTML = 
                'Por favor, ingresa dos números válidos.';
            return;
        }
        
        if (numero1 === numero2) {
            document.getElementById('resultado-comparacion').innerHTML = 
                'Los números no pueden ser iguales. Por favor, ingresa números diferentes.';
            return;
        }
        
        let mayor, menor;
        if (numero1 > numero2) {
            mayor = numero1;
            menor = numero2;
        } else {
            mayor = numero2;
            menor = numero1;
        }
        
        const diferencia = mayor - menor;
        
        document.getElementById('resultado-comparacion').innerHTML = 
            `El número mayor es <strong>${mayor}</strong>, el menor es <strong>${menor}</strong>, y su diferencia es <strong>${diferencia}</strong>.`;
    });
    
    // Limpiar resultados al cambiar de operación
    const inputs = document.querySelectorAll('input');
    inputs.forEach(input => {
        input.addEventListener('input', function() {
            const card = this.closest('.operation-card');
            const resultDiv = card.querySelector('.result');
            resultDiv.innerHTML = '';
        });
    });
});