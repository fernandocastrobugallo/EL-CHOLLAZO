function mostrarPremio(numeroPremio) {
  const numeros = generarNumerosAleatorios(5); // Generar 5 números aleatorios
  const letra = generarLetraAleatoria(); // Generar una letra aleatoria
  const codigoPremiado = numeros.join('') + letra; // Combinar números y letra
  const numerosPremiadosElement = document.getElementById(`premio-${numeroPremio}-numeros`);
  if (numerosPremiadosElement) {
    numerosPremiadosElement.innerHTML = `<strong>Número premiado:</strong> ${codigoPremiado}`;
  }
}

function generarNumerosAleatorios(cantidad) {
  const numeros = [];
  for (let i = 0; i < cantidad; i++) {
    numeros.push(Math.floor(Math.random() * 10)); // Generar número aleatorio del 0 al 9
  }
  return numeros;
}

function generarLetraAleatoria() {
  const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return letras.charAt(Math.floor(Math.random() * letras.length)); // Generar letra aleatoria
}

function validarFormulario() {
  const nombre = document.getElementById('nombre').value.trim();
  const apellidos = document.getElementById('apellidos').value.trim();
  const dni = document.getElementById('dni').value.trim();
  const email = document.getElementById('email').value.trim();
  const telefono = document.getElementById('telefono').value.trim();
  /*
  if (!nombre || !apellidos || !dni.match(/0-9]{8}[A-Za-z]/) || !email || !telefono.match(/^[679]{1}[0-9]{8}$/)) {
    alert('Por favor, completa todos los campos correctamente.');
    return false; // Evita que se envíe el formulario si hay campos vacíos o incorrectos
  }
*/
  return true; // Envía el formulario si todos los campos son válidos

}

function cancelarFormulario() {
  document.getElementById('datosForm').reset(); // Reinicia el formulario
}

function comprobarPremio() {
  const numero = prompt('Introduce un número para comprobar:');
  if (numero) {
      const premio1 = document.getElementById('premio-1-numeros').innerText.toLowerCase();
      const premio2 = document.getElementById('premio-2-numeros').innerText.toLowerCase();
      const premio3 = document.getElementById('premio-3-numeros').innerText.toLowerCase();

      let premioGanado = '';

      if (premio1.includes(numero.toLowerCase())) {
          premioGanado = '1º Premio';
      } else if (premio2.includes(numero.toLowerCase())) {
          premioGanado = '2º Premio';
      } else if (premio3.includes(numero.toLowerCase())) {
          premioGanado = '3º Premio';
      }

      if (premioGanado) {
          alert(`¡El número está premiado! Has ganado el ${premioGanado}. ¡Felicidades!`);
          document.getElementById('formulario').style.display = 'block';
      } else {
          alert('Lo siento, el número no está premiado. ¡Mejor suerte la próxima vez!');
      }
  }
}
