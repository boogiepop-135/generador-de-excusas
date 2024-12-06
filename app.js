//puse las excusas en español por que me es mas comodo, pero me defiendo en ingles//
let quien = ['El perro', 'Mi abuela', 'El cartero', 'Mi loro'];
let accion = ['se comió', 'orinó en', 'rompió', 'tiró'];
let que = ['mis tareas', 'mi teléfono', 'el coche', 'los apuntes'];
let cuando = [
  'antes de la clase',
  'mientras dormía',
  'mientras hacía ejercicio',
  'durante mi almuerzo',
  'mientras rezaba'
];

// Función para generar excusas aleatorias//
function generateExcuse() {
  let quienIndex = Math.floor(Math.random() * quien.length);
  let accionIndex = Math.floor(Math.random() * accion.length);
  let queIndex = Math.floor(Math.random() * que.length);
  let cuandoIndex = Math.floor(Math.random() * cuando.length);

  //aca concatenamos las excusas es como si las juntaramos//
  return `${quien[quienIndex]} ${accion[accionIndex]} ${que[queIndex]} ${cuando[cuandoIndex]}.`;
}

//segun esto deberia darme una escusa cada vez que cargo la pagina//
window.onload = () => {
  document.getElementById('excuse').innerHTML = generateExcuse();
};
