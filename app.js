
const arrPrioridades=[[1,"Muy Baja"], [2,"Baja"], [3,"Media"], [4,"Alta"], [5,"Muy Alta"]];

class Proceso{
    constructor(nombre, tamaño, tiempo, array_subprocesos){
        this.nombre=nombre;
        this.tamaño=tamaño;
        this.tiempo=tiempo;
        this.array_subprocesos=array_subprocesos;
    }
  }
  
  class Subproceso{
  constructor(nombre, tamaño, tiempo,prioridad){
  this.nombre=nombre;
  this.tamaño=tamaño;
  this.tiempo=tiempo;
  this.prioridad=prioridad
  }
  }
  
  const array=[[
              new Subproceso("Sub_1", 45, arrPrioridades[0][0],arrPrioridades[0][1]),
              new Subproceso("Sub_2", 74, arrPrioridades[1][0],arrPrioridades[1][1]),
              new Subproceso("Sub_3", 994, arrPrioridades[3][0],arrPrioridades[3][1]),
              new Subproceso("Sub_4", 126, arrPrioridades[2][0],arrPrioridades[2][1])],
            
              [
              new Subproceso("Sub_1", 714,arrPrioridades[4][0] ,arrPrioridades[4][1]),
              new Subproceso("Sub_2", 373, arrPrioridades[4][0],arrPrioridades[4][1]),
              new Subproceso("Sub_3", 469, arrPrioridades[4][0],arrPrioridades[4][1]),
              new Subproceso("Sub_4", 359, arrPrioridades[4][0],arrPrioridades[4][1])],
                [
              new Subproceso("Sub_1", 122, arrPrioridades[3][0],arrPrioridades[3][1]),
              new Subproceso("Sub_2", 322, arrPrioridades[1][0],arrPrioridades[1][1]),
              new Subproceso("Sub_3", 411,arrPrioridades[1][0] ,arrPrioridades[1][1]),
              new Subproceso("Sub_4", 568, arrPrioridades[3][0],arrPrioridades[3][1])],
  
              [
              new Subproceso("Sub_1", 679, arrPrioridades[0][0],arrPrioridades[0][1]),
              new Subproceso("Sub_2", 448, arrPrioridades[1][0],arrPrioridades[1][1]),
              new Subproceso("Sub_3", 326, arrPrioridades[2][0],arrPrioridades[2][1]),
              new Subproceso("Sub_4", 112, arrPrioridades[3][0],arrPrioridades[3][1])]
            ]
  
  
  let proceso_1=new Proceso("Proceso 1", 0,0, array[0])
  let proceso_2=new Proceso("Proceso 2", 0,0, array[1])
  let proceso_3=new Proceso("Proceso 3", 0,0, array[2])
  let proceso_4=new Proceso("Proceso 4", 0,0, array[3])
  const array_procesos=[proceso_1, proceso_2, proceso_3,proceso_4]

  function ordenaPrioridad(array_procesos){
    const copiaIndices=[...array_procesos]
    const indicesOrdenados=[]
    for(let i=0;i<copiaIndices.length;i++){
      for(let j=0;j<copiaIndices[i].length;j++){

        indicesOrdenados[i]
      }
    }
  }

  const arrRecursos=[
    {RAM:4,CPU:0,SSD:100,VRAM:0},
    {RAM:8,CPU:0,SSD:100,VRAM:0},
    {RAM:16,CPU:0,SSD:100,VRAM:1},
    {RAM:32,CPU:0,SSD:50,VRAM:1}
  ]

  let sumaTamaño=0;
  let sumaTiempo=0;
  for(let i=0;i<array.length;i++){

    for(let j=0;j<array[i].length;j++){
        sumaTamaño=sumaTamaño+array[i][j].tamaño;
        sumaTiempo=sumaTiempo+array[i][j].tiempo;
    }
    //console.log(`La suma del tamaño del elemento ${i} es: ${sumaTamaño}<br> La suma del tiempo del elemento ${i} es: ${sumaTiempo}`)
    array_procesos[i].tiempo=sumaTiempo;
    array_procesos[i].tamaño=sumaTamaño;
    sumaTamaño=0;
    sumaTiempo=0;
  }
console.log(array_procesos)
console.log(proceso_1);
console.log("---------------------");
console.log(proceso_2);
console.log("---------------------");
console.log(proceso_3);
console.log("---------------------");
console.log(proceso_4);
console.log("---------------------");



let proceso=0;
let pausado;
const boton = document.getElementById('boton_pausa');
const barrasFCFS = [
  document.querySelector(".line-fcfs .line1"),
  document.querySelector(".line-fcfs .line2"),
  document.querySelector(".line-fcfs .line3"),
  document.querySelector(".line-fcfs .line4")];
const barrasPrioridades = [
    document.querySelector(".line-prioridades .line5"),
    document.querySelector(".line-prioridades .line6"),
    document.querySelector(".line-prioridades .line7"),
    document.querySelector(".line-prioridades .line8")];

const barrasColas = [
  document.querySelector(".line-colas .line9"),
  document.querySelector(".line-colas .line10"),
  document.querySelector(".line-colas .line11"),
  document.querySelector(".line-colas .line12")];

const lucesRR = [
  document.querySelector(".semaforo .luces_1"),
  document.querySelector(".semaforo .luces_2"),
  document.querySelector(".semaforo .luces_3"),
  document.querySelector(".semaforo .luces_4")];

const cuadrosProdcutor = [
  document.querySelector(".cuadro_bar_1"),
  document.querySelector(".cuadro_bar_2"),
  document.querySelector(".cuadro_bar_3"),
  document.querySelector(".cuadro_bar_4")];

const cuadrosConsumidor = [
  document.querySelector(".cuadro_bar_5"),
  document.querySelector(".cuadro_bar_6"),
  document.querySelector(".cuadro_bar_7"),
  document.querySelector(".cuadro_bar_8")];

const cuadrosEscritor = [
  document.querySelector(".cuadro_bar_9"),
  document.querySelector(".cuadro_bar_10"),
  document.querySelector(".cuadro_bar_11"),
  document.querySelector(".cuadro_bar_12")];

const cuadrosLector = [
  document.querySelector(".line-lectores .line13"),
  document.querySelector(".line-lectores .line14"),
  document.querySelector(".line-lectores .line15"),
  document.querySelector(".line-lectores .line16")];

const porcentajesRecursos =[
  document.querySelector(".caja_recurso .linea_recurso"),
  document.querySelector(".caja_recurso .linea_recurso2"),
  document.querySelector(".caja_recurso .linea_recurso3"),
  document.querySelector(".caja_recurso .linea_recurso4")];
  
let porcentajeRam=0;
let porcentajeRam2=0;
let porcentajeCpu=0;

function keyframes(numero,porcentaje){
  const nuevaAnimacionCSS = `
@keyframes loadingArriba${numero} {
    0% {
        height: 0%;
    }
    100% {
        height: ${porcentaje}%;
    }
}
`;
return nuevaAnimacionCSS;
}

function keyframes2(numero,porcentajeI,porcentajeF){
  const nuevaAnimacionCSS = `
@keyframes loadingArriba2${numero} {
    0% {
        height: ${porcentajeI}%;
    }
    100% {
        height: ${porcentajeF}%;
    }
}
`;
return nuevaAnimacionCSS;
}

document.addEventListener("DOMContentLoaded", function() {
 
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

//---------------------------  CREA EL PROCESO  --------------------------- 
async function faseCreacion(objProceso) {
  document.getElementById('output').innerHTML += `Fase de Creación: Inicializando el proceso <br>`;
  await sleep((objProceso.tiempo/2)*1000);
}

//---------------------------  ESTADO DE PENDIENTE  DEL PROCESO  --------------------------- 
async function faseListo() {
  document.getElementById('output').innerHTML += "<span style='color: #2859fa;'>Fase Listo: El proceso está listo para ejecutarse<br>";
  await sleep(2000);
}

//---------------------------  EJECUTA EL PROCESO  --------------------------- 
async function faseEjecucion(objProceso) {
  
  let pausado = false; // Variable de control para pausar el proceso
  let timer; // Temporizador para seguir el tiempo cuando se pausa

  // Función para pausar el proceso
  async function fasePausa() {
    while (pausado) {
      // Esperar hasta que se reanude el proceso
      await sleep(100); 
  }}

  console.log(`#######  Tiempo del proceso:   ${objProceso.tiempo}`)
  document.getElementById('output').innerHTML += "Fase de Ejecución: El proceso se está ejecutando<br>";
  boton.addEventListener('click', function() {
    pausado = !pausado; // Alternar entre pausado y no pausado

    if (pausado) {
      boton.textContent = 'Reanudar';
      document.getElementById('output').innerHTML += "<span style='color: gray;'> Proceso Pausado<br>";
      // Detener el temporizador cuando se pausa
      clearTimeout(timer);
      pausado=true;
    } else {
      boton.textContent = 'Pausar';
      document.getElementById('output').innerHTML += "<span style='color: darkgray;'> Proceso Reanudado<br>";
      
      // Iniciar el temporizador para seguir el tiempo
      const inicioTiempo = Date.now(); // Registrar el tiempo en que se reanuda
      timer = setTimeout(async () => {
        // Calcular el tiempo transcurrido desde que se pausó
        const tiempoTranscurrido = Date.now() - inicioTiempo;
        
        // Mostrar el mensaje de ejecución y ajustar el tiempo en consecuencia
        document.getElementById('output').innerHTML += "Fase de Ejecución: El proceso se está ejecutando<br>";
        await sleep(objProceso.tiempo - tiempoTranscurrido);
      }, 100); // Comprobar el estado cada 100 ms
    }
  });

  await sleep(objProceso.tiempo*1000-1000);
  await fasePausa(); // Esperar hasta que se reanude el proceso
  }


//---------------------------  Bloquea EL PROCESO  --------------------------- 
async function faseBloqueado(objProceso) {
  document.getElementById('output').innerHTML += "Fase Bloqueado: El proceso está bloqueado (E/S)<br>";
  await sleep(0);
  // Mostrar el alert
  const continuar = confirm("Presiona OK para continuar con la siguiente fase.");
  async function faseCancelada() {
    document.getElementById('output').innerHTML += "Fase de Terminación: El proceso ha sido Cancelado<br>";
    document.getElementById('output').innerHTML += " <span style='color: red;'>Proceso Incompleto<br>";
  }
  async function faseTerminacion() {
    document.getElementById('output').innerHTML += "Fase de Terminación: El proceso ha finalizado<br>";
    document.getElementById('output').innerHTML += "<span style='color: greenyellow;'>Proceso completado<br>";
  }
  if (!continuar) {
    faseCancelada();
    // Si el usuario presiona Cancelar, puedes hacer algo aquí si lo deseas.
    // Por ejemplo, detener el proceso o realizar alguna otra acción.
  }else{

    await faseTerminacion();
  }
}

//---------------------------  IMPRIME LOS ESTADOS DEL PROCESO  --------------------------- 
async function ejecutarProceso(objProceso) {
  await faseEjecucion(objProceso);
  await faseBloqueado(objProceso);
  
}

async function cargarProceso(objProceso) {
  await faseCreacion(objProceso);
  await faseListo();
  
}

//---------------------------  CARGAR EL PROCESO  --------------------------- 
async function fasePendiente() {
  document.getElementById('output').innerHTML += `Fase de Creación: Proceso ${array_procesos[proceso].nombre} Pendiente<br>`;
}


document.getElementById('boton_cargar').addEventListener('click', function() {
  const selectElement = document.getElementById('select_proceso');
  const selectElement2 = document.getElementById('select_recursos');
  // Obtener el valor seleccionado del proceso y recursos
  const selectedValue = selectElement.value;
  const selectedValue2 = selectElement2.value;
  // Utilizar el valor seleccionado
  let barA = document.querySelector(".line-box .line");

  //Reinicia en 0 todas las animaciones de las barras
  barA.style.animation = "";
  barrasFCFS[0].style.animation = "";
  barrasFCFS[1].style.animation = "";
  barrasFCFS[2].style.animation = "";
  barrasFCFS[3].style.animation = "";

  barrasPrioridades[0].style.animation = "";
  barrasPrioridades[1].style.animation = "";
  barrasPrioridades[2].style.animation = "";
  barrasPrioridades[3].style.animation = "";

  barrasColas[0].style.animation = "";
  barrasColas[1].style.animation = "";
  barrasColas[2].style.animation = "";
  barrasColas[3].style.animation = "";

  cuadrosEscritor[0].style.backgroundColor = "#e4e4e4";
  cuadrosEscritor[1].style.backgroundColor = "#e4e4e4";
  cuadrosEscritor[2].style.backgroundColor = "#e4e4e4";
  cuadrosEscritor[3].style.backgroundColor = "#e4e4e4";


  proceso=selectedValue;
  recurso=selectedValue2;


  const segFCFS=[
    array_procesos[proceso].array_subprocesos[0].tiempo,
    array_procesos[proceso].array_subprocesos[1].tiempo,
    array_procesos[proceso].array_subprocesos[2].tiempo,
    array_procesos[proceso].array_subprocesos[3].tiempo];


  //Carga la animacion de llenado del escritor 
  async function animacionEscritor(segFCFS){
    const copiaSegFCFS=[...segFCFS]
    let segundos=0;
    console.log(copiaSegFCFS)
    for(let i=0;i<copiaSegFCFS.length;i++){
      cuadrosEscritor[i].style.backgroundColor="rgb(10, 221, 116)";
      console.log("Animacino realizada: ----- "+ (copiaSegFCFS[i]/2))
      await sleep((copiaSegFCFS[i]/2)*1000)
    }  
  }

  animacionEscritor(segFCFS)
  fasePendiente();
  cargarProceso(array_procesos[proceso]);

//Animacion de las barras de recursos
let totalTamaño=(array_procesos[proceso].tamaño)/1000;  
let porcentajeRAM=(totalTamaño.toFixed(2))*100/arrRecursos[recurso].RAM;

console.log("#_#_#_#_#  "+totalTamaño+"  #_#_#_#  "+porcentajeRAM)
porcentajeRam=porcentajeRAM;
porcentajeRam2=porcentajeRAM;
const porcentajeCPU = segFCFS[0]/segFCFS[1]/segFCFS[2]/segFCFS[3]*100;
porcentajeCpu=porcentajeCPU;
const styleSheet = document.styleSheets[0];
const arrayh2=['h2_ram','h2_cpu','h2_ssd','h2_vram']
const arrayPorcentajes=[porcentajeRAM, porcentajeCPU, 0,0]
//Verifica si el recurso seleccionado tiene VRAM, de ser verdadero ejecuta el if
if(arrRecursos[recurso].VRAM===1){
  console.log("Si es VRAM")
  arrRecursos[recurso.VRAM]=10;
  arrayPorcentajes[2]=((totalTamaño/2)*100)/(arrRecursos[recurso].SSD-10)
  arrayPorcentajes[3]=((totalTamaño/2)*100)/(arrRecursos[recurso].VRAM)
}


document.getElementById(arrayh2[0]).innerHTML = '';
document.getElementById(arrayh2[1]).innerHTML = '';
document.getElementById(arrayh2[2]).innerHTML = '';
document.getElementById(arrayh2[3]).innerHTML = '';
//Ciclo for que modifica cada una de las barras de recursos en base a su indice
for(let i=0; i<porcentajesRecursos.length;i++){
document.getElementById(arrayh2[i]).innerHTML += `${arrayPorcentajes[i].toFixed(1)}%`;
porcentajesRecursos[i].style.animation = `loadingArriba${i} 1s cubic-bezier(0, 0, 0, 0) forwards, loadingArribaCustom 2s cubic-bezier(0, 0, 0, 0) forwards`;
styleSheet.insertRule(keyframes(i, arrayPorcentajes[i]), styleSheet.cssRules.length);

}
  
  //---------------------------  INICIA LA EJECUCION  DEL PROCESO  --------------------------- 
document.getElementById('boton_pausar').addEventListener('click', function() {
  ejecutarProceso(array_procesos[proceso]);
});
});



});

//---------------------------  CARGAR LA ANIMACION DE LA BARRA DEL PROCESO  --------------------------- 
document.addEventListener("DOMContentLoaded", function() {
  let startButton = document.getElementById("boton_pausar");
  let barA = document.querySelector(".line-box .line");
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }


  //---------------------------  Funcion de subcompletado --------------------------- 
  //Se encarga de llenar la tabla que vizualiza los procesos y su estado de completado
  async function subCompletado(segundos,indice,num,bandera) {
    await sleep(segundos*1000);
    document.getElementById('nombre_subprocesos_'+num).innerHTML += `${ array_procesos[proceso].array_subprocesos[indice].nombre}   ✔️<br>`;
    document.getElementById('nombre_subprocesos_'+num).innerHTML += `(
    Tiempo: ${ array_procesos[proceso].array_subprocesos[indice].tiempo}s,
    Tamaño: ${ array_procesos[proceso].array_subprocesos[indice].tamaño} MB,
    Prioridad: ${ array_procesos[proceso].array_subprocesos[indice].prioridad})<br>`;
    await sleep(array_procesos[proceso].array_subprocesos[indice].timepo*1000);
    if(bandera===1){
    document.getElementById('nombre_subprocesos_'+num).innerHTML += "<span style='color: rgb(25, 67, 252); margin-left: 20%'>Subprocesos completados<br>";
    }
  }

  //Funcion que se encarga de la animacion del semaforo de round robin
  async function semaforoColor(arraySegs){
    const copiaSegFCFS=[...arraySegs]
    const enEspera=[]//Arreglo que guarda el tiempo que falta del proceso que no termina en 3 segundos

    for(let i=0; i<copiaSegFCFS.length;i++){
      if(copiaSegFCFS[i]<=3){
        lucesRR[i].style.backgroundColor="#ff1547";
        await sleep(copiaSegFCFS[i]*1000);
        lucesRR[i].style.backgroundColor="#67d295";
        subCompletado(0,i,4,0)
      }else{
        lucesRR[i].style.backgroundColor="#ff1547";
        await sleep(3000);
        lucesRR[i].style.backgroundColor="rgb(41, 41, 41)";
        enEspera.push([i,(copiaSegFCFS[i]-3)])
      }
      }

      if(enEspera.length!=0){
        for(let i=0; i<enEspera.length;i++){
            lucesRR[enEspera[i][0]].style.backgroundColor="#ff1547";
            await sleep(enEspera[i][1]*1000);
            lucesRR[enEspera[i][0]].style.backgroundColor="#67d295";
            subCompletado(0,enEspera[i][0],4,0)
          
      }
    }

}


//Funcion de animacion para las barras de los lectores siendo ejecutados
function animacionLectores(segFCFS){
  const copiaSegFCFS=[...segFCFS]
    console.log("Normal: ->"+ segFCFS)
    //########### ANIMACION DE FCFS
    cuadrosLector[0].style.animation = `loading ${copiaSegFCFS[0]/2}s cubic-bezier(0, 0, 0, 0) forwards`;
    cuadrosLector[1].style.animation = `loading ${segFCFS[1]/2}s cubic-bezier(0, 0, 0, 0) forwards`;
    cuadrosLector[2].style.animation = `loading ${segFCFS[2]/2}s cubic-bezier(0, 0, 0, 0) forwards`;
    cuadrosLector[3].style.animation = `loading ${segFCFS[3]/2}s cubic-bezier(0, 0, 0, 0) forwards`;
}


//---------------------------  Animacion barras de algoritmos de planificacion  --------------------------- 
  function animacionBarras(segFCFS){
    const copiaSegFCFS=[...segFCFS]
    console.log("Normal: ->"+ segFCFS)


    //###########______ANIMACION DE FCFS
    barrasFCFS[0].style.animation = `loading ${segFCFS[0]}s cubic-bezier(0, 0, 0, 0) forwards`;
    subCompletado(segFCFS[0],0,1,0)
    semaforoColor(copiaSegFCFS)
    barrasFCFS[1].style.animation = `loading ${segFCFS[1]}s cubic-bezier(0, 0, 0, 0) forwards ${segFCFS[0]}s`;
    subCompletado((segFCFS[1]+segFCFS[0]),1,1,0)
    barrasFCFS[2].style.animation = `loading ${segFCFS[2]}s cubic-bezier(0, 0, 0, 0) forwards ${segFCFS[1]+segFCFS[0]}s`;
    subCompletado((segFCFS[1]+segFCFS[0]+segFCFS[2]),2,1,0)
    barrasFCFS[3].style.animation = `loading ${segFCFS[3]}s cubic-bezier(0, 0, 0, 0) forwards ${segFCFS[1]+segFCFS[0]+segFCFS[2]}s`;
    subCompletado((segFCFS[1]+segFCFS[0]+segFCFS[2]+segFCFS[3]),3,1,1)


    //###########______ANIMACION DE PRIORIDADES
    const segPrioridades=(segFCFS.sort()).reverse();
    console.log("Prioridades: ->" + segPrioridades)
    barrasPrioridades[0].style.animation = `loading ${segPrioridades[0]}s cubic-bezier(0, 0, 0, 0) forwards`;
    subCompletado(segPrioridades[0],copiaSegFCFS.indexOf(segPrioridades[0]),2,0)
    copiaSegFCFS[copiaSegFCFS.indexOf(segPrioridades[0])]=null;

    barrasPrioridades[1].style.animation = `loading ${segPrioridades[1]}s cubic-bezier(0, 0, 0, 0) forwards ${segPrioridades[0]}s`;
    subCompletado((segPrioridades[1]+segPrioridades[0]),copiaSegFCFS.indexOf(segPrioridades[1]),2,0)
    copiaSegFCFS[copiaSegFCFS.indexOf(segPrioridades[1])]=null;

    barrasPrioridades[2].style.animation = `loading ${segPrioridades[2]}s cubic-bezier(0, 0, 0, 0) forwards ${segPrioridades[1]+segPrioridades[0]}s`;
    subCompletado((segPrioridades[1]+segPrioridades[0]+segPrioridades[2]),copiaSegFCFS.indexOf(segPrioridades[2]),2,0)
    copiaSegFCFS[copiaSegFCFS.indexOf(segPrioridades[2])]=null;

    barrasPrioridades[3].style.animation = `loading ${segPrioridades[3]}s cubic-bezier(0, 0, 0, 0) forwards ${segPrioridades[1]+segPrioridades[0]+segPrioridades[2]}s`;
    subCompletado((segPrioridades[1]+segPrioridades[0]+segPrioridades[2]+segPrioridades[3]),copiaSegFCFS.indexOf(segPrioridades[3]),2,1)
    copiaSegFCFS[copiaSegFCFS.indexOf(segPrioridades[3])]=null;


    //###########______ANIMACION DE COLAS MULTIPLES 
    const segColas=[...segFCFS];
    barrasColas[0].style.animation = `loading ${segPrioridades[0]}s cubic-bezier(0, 0, 0, 0) forwards`;
    subCompletado(segPrioridades[0],segColas.indexOf(segPrioridades[0]),3,0)
    segColas[segColas.indexOf(segPrioridades[0])]=null;

    barrasColas[1].style.animation = `loading ${segPrioridades[3]}s cubic-bezier(0, 0, 0, 0) forwards`;
    subCompletado((segPrioridades[3]),segColas.indexOf(segPrioridades[3]),3,0)
    segColas[segColas.indexOf(segPrioridades[3])]=null;

    barrasColas[2].style.animation = `loading ${segPrioridades[1]}s cubic-bezier(0, 0, 0, 0) forwards ${segPrioridades[3]}s`;
    subCompletado((segPrioridades[0]+segPrioridades[1]),segColas.indexOf(segPrioridades[1]),3,1)
    segColas[segColas.indexOf(segPrioridades[1])]=null;

    barrasColas[3].style.animation = `loading ${segPrioridades[2]}s cubic-bezier(0, 0, 0, 0) forwards ${segPrioridades[0]}s`;
    subCompletado((segPrioridades[0]+segPrioridades[2]),segColas.indexOf(segPrioridades[2]),3,0)
    segColas[segColas.indexOf(segPrioridades[2])]=null;


  }

  //Funcion que se encarga de la animacion del productor consumidor 
  async function animacionPC(segFCFS){
    const copiaSegFCFS=[...segFCFS]
    let segundos=0;
    for(let i=0;i<copiaSegFCFS.length;i++){
      segundos=copiaSegFCFS[i]
      //For para la animacion del productor
      for(let j=0;j<cuadrosProdcutor.length;j++){
        cuadrosProdcutor[j].style.backgroundColor="rgb(10, 221, 116)";
        await sleep((segundos/8)*1000)
        cuadrosProdcutor[j].style.backgroundColor="rgb(224, 224, 224)";
      }
      //For para la animacion del consumidor
      for(let j=0;j<cuadrosConsumidor.length;j++){
        cuadrosConsumidor[j].style.backgroundColor="rgb(247, 148, 20)";
        await sleep((segundos/8)*1000)
        cuadrosConsumidor[j].style.backgroundColor="rgb(224, 224, 224)";
      }
    }

  }

  //---------------------------  Animacion de Manejadores de  dispositivos--------------------------- 
  document.getElementById("uno_des").addEventListener("click", function() {
    var input = document.getElementById("miInput");
    var valorActual = input.value;
    const styleSheet = document.styleSheets[0];
    // Verificar si el valor actual es un número binario válido
    if (/^[01]+$/.test(valorActual)) {
      // Convertir el valor actual a decimal, incrementarlo y luego volver a binario
      var valorDecimal = parseInt(valorActual, 2);
      valorDecimal += 1;
      var nuevoValorBinario = valorDecimal.toString(2);
      
      document.getElementById('h2_ram').innerHTML = ``;
      document.getElementById('h2_ram').innerHTML += `${porcentajeRam.toFixed(1)}%`;
      porcentajesRecursos[0].style.animation = `loadingArriba${0} 1s cubic-bezier(0, 0, 0, 0) forwards, loadingArribaCustom 2s cubic-bezier(0, 0, 0, 0) forwards`;
 
      styleSheet.insertRule(keyframes(0,porcentajeRam=porcentajeRam+1), styleSheet.cssRules.length);
      document.getElementById("cargar_instruccion1").addEventListener("click", async function() {
        document.getElementById('h2_cpu').innerHTML = ``;
        document.getElementById('h2_cpu').innerHTML += `${porcentajeRam.toFixed(1)}%`;
        porcentajesRecursos[1].style.animation = `loadingArriba${1} 1s cubic-bezier(0, 0, 0, 0) forwards, loadingArribaCustom 2s cubic-bezier(0, 0, 0, 0) forwards`;
        styleSheet.insertRule(keyframes(1,porcentajeRam=porcentajeRam+0.5), styleSheet.cssRules.length);
        porcentajesRecursos[1].style.animation = `loadingArriba2${1} 6s cubic-bezier(0, 0, 0, 0) forwards, loadingArribaCustom 2s cubic-bezier(0, 0, 0, 0) forwards`;
        styleSheet.insertRule(keyframes2(1,porcentajeRam=porcentajeRam+0.5,porcentajeCpu+3), styleSheet.cssRules.length);
        input.value='';
        await sleep(5000)
        document.getElementById('h2_cpu').innerHTML = ``;
        document.getElementById('h2_cpu').innerHTML += `${porcentajeCpu.toFixed(1)}%`;
        });

      // Actualizar el input con el nuevo valor en binario
      input.value = nuevoValorBinario;
    } else {
      alert("Ingresa un número binario válido.");
    }


  });

  //---------------------------  Animacion de controladores de almacenamiento interno--------------------------- 
  const boton1 = document.getElementById("uno_opt");
  const boton0 = document.getElementById("cero_opt");
  const input = document.getElementById("miInput2");
  
  // Agrega eventos de clic a los botones
  boton1.addEventListener("click", function() {
    const styleSheet = document.styleSheets[0];
    input.value += "1";
    document.getElementById('h2_ram').innerHTML = ``;
    document.getElementById('h2_ram').innerHTML += `${porcentajeRam.toFixed(1)}%`;
    porcentajesRecursos[0].style.animation = `loadingArriba${0} 1s cubic-bezier(0, 0, 0, 0) forwards, loadingArribaCustom 2s cubic-bezier(0, 0, 0, 0) forwards`;
 
      styleSheet.insertRule(keyframes(0,porcentajeRam=porcentajeRam+0.5), styleSheet.cssRules.length);
      document.getElementById("cargar_instruccion").addEventListener("click", async function() {
        document.getElementById('h2_cpu').innerHTML = ``;
        document.getElementById('h2_cpu').innerHTML += `${porcentajeRam.toFixed(1)}%`;
        porcentajesRecursos[1].style.animation = `loadingArriba${1} 1s cubic-bezier(0, 0, 0, 0) forwards, loadingArribaCustom 2s cubic-bezier(0, 0, 0, 0) forwards`;
        styleSheet.insertRule(keyframes(1,porcentajeRam=porcentajeRam+0.5), styleSheet.cssRules.length);
        porcentajesRecursos[1].style.animation = `loadingArriba2${1} 6s cubic-bezier(0, 0, 0, 0) forwards, loadingArribaCustom 2s cubic-bezier(0, 0, 0, 0) forwards`;
        styleSheet.insertRule(keyframes2(1,porcentajeRam=porcentajeRam+0.5,porcentajeCpu+3), styleSheet.cssRules.length);
        input.value='';
        await sleep(5000)
        document.getElementById('h2_cpu').innerHTML = ``;
        document.getElementById('h2_cpu').innerHTML += `${porcentajeCpu.toFixed(1)}%`;
        });
      
  });

  boton0.addEventListener("click", function() {
    const styleSheet = document.styleSheets[0];
    input.value += "0";
    document.getElementById('h2_ram').innerHTML = ``;
    document.getElementById('h2_ram').innerHTML += `${porcentajeRam.toFixed(1)}%`;
    porcentajesRecursos[0].style.animation = `loadingArriba${0} 1s cubic-bezier(0, 0, 0, 0) forwards, loadingArribaCustom 2s cubic-bezier(0, 0, 0, 0) forwards`;
 
      styleSheet.insertRule(keyframes(0,porcentajeRam=porcentajeRam+0.5), styleSheet.cssRules.length);

      document.getElementById("cargar_instruccion").addEventListener("click", async function() {
      document.getElementById('h2_cpu').innerHTML = ``;
      document.getElementById('h2_cpu').innerHTML += `${porcentajeRam.toFixed(1)}%`;
      porcentajesRecursos[1].style.animation = `loadingArriba${1} 1s cubic-bezier(0, 0, 0, 0) forwards, loadingArribaCustom 2s cubic-bezier(0, 0, 0, 0) forwards`;
      styleSheet.insertRule(keyframes(1,porcentajeRam=porcentajeRam+0.5), styleSheet.cssRules.length);
      porcentajesRecursos[1].style.animation = `loadingArriba2${1} 6s cubic-bezier(0, 0, 0, 0) forwards, loadingArribaCustom 2s cubic-bezier(0, 0, 0, 0) forwards`;
      styleSheet.insertRule(keyframes2(1,porcentajeRam=porcentajeRam+0.5,porcentajeCpu+3), styleSheet.cssRules.length);
      input.value='';
      await sleep(5000)
      document.getElementById('h2_cpu').innerHTML = ``;
      document.getElementById('h2_cpu').innerHTML += `${porcentajeCpu.toFixed(1)}%`;
      });
      
  });

  //Funcion que ejecuta las otras funciones al dar click en el boton Iniciar Proceso
    startButton.addEventListener("click", function() {
        // Iniciar animación de la barra A
        const segundos=array_procesos[proceso].tiempo;
        console.log(`****** ${segundos}`)
        barA.style.animation = `loading ${segundos}s cubic-bezier(0, 0, 0, 0) forwards`;
              const segFCFS=[
                array_procesos[proceso].array_subprocesos[0].tiempo,
                array_procesos[proceso].array_subprocesos[1].tiempo,
                array_procesos[proceso].array_subprocesos[2].tiempo,
                array_procesos[proceso].array_subprocesos[3].tiempo]

                //########### ANIMACION DE FCFS
                animacionLectores(segFCFS)
                animacionPC(segFCFS)
                animacionBarras(segFCFS)
    
  });


  //---------------------------  CARGAR LA ANIMACION DE LA BARRAS FCFS DEL PROCESO  --------------------------- 
document.addEventListener("DOMContentLoaded", function() {
    let startButton = document.getElementById("boton_pausar");
    
      });
    });


