// Selección de elementos desde el index (DOM)
const boton = document.getElementById('botonPropina');
const resultado = document.getElementById('resultadoComponent');

// Evento de clic en el botón
boton.addEventListener('click', e => {
    e.preventDefault();

    // Obtener y convertir los valores de los campos de entrada
    let saldo = parseInt(document.getElementById('saldo').value);
    let propina = parseInt(document.getElementById('propina').value);

    // Calcular los totales
    let totalPropina = saldo * (propina / 100);
    let total = saldo + totalPropina;

    // Mostrar el resultado meidante el innerhtml
    resultado.innerHTML = `
        <h2>Resumen</h2>
        <p>Total de la cuenta: $ ${saldo}</p>
        <p>Total de la propina: $${totalPropina}</p>
        <p>Total a pagar: $ ${total}</p>
    `;
});
