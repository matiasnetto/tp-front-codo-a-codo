const form = document.getElementById('tiket-form');
const resumenButton = document.getElementById('resumentButton');
const borrarButton = document.getElementById('borrarButton');
const categoriaInput = document.getElementById('categoria');
const cantidadInput = document.getElementById('cantidad');
const valorEntrada = document.getElementById('valorEntrada');

VALOR_TIKET = 200;

function calcularPrecioAPagar() {
  let porcentajeDescuento = 0;

  switch (categoriaInput.value) {
    case 'estudiante':
      porcentajeDescuento = 80;
      break;

    case 'trainee':
      porcentajeDescuento = 50;
      break;

    case 'junior':
      porcentajeDescuento = 15;
      break;
  }

  return (VALOR_TIKET - (VALOR_TIKET * porcentajeDescuento) / 100) * parseInt(cantidadInput.value);
}

function onResumenClick(e) {
  e.preventDefault();

  if (cantidadInput.value == '' || parseInt(cantidadInput.value) <= 0) {
    return alert('Ingrese una cantidad valida');
  }

  const valor = calcularPrecioAPagar();
  valorEntrada.innerText = valor;
}

function onBorrarClick(e) {
  e.preventDefault();
  form.reset();
  valorEntrada.innerText = '';
}

resumenButton.addEventListener('click', onResumenClick);
borrarButton.addEventListener('click', onBorrarClick);
