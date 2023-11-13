let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

// window.addEventListener('resize', () => {
//   // We execute the same script as before
//   let vh = window.innerHeight * 0.01;
//   document.documentElement.style.setProperty('--vh', `${vh}px`);
// });

//DETECCION DE POSICION DE SECTIONS PARA ANIMACIONES
const main = document.getElementById("rest")

const arrow = document.getElementById("arrow")
arrow.style.rotate = '180deg'
const phrase = document.getElementById("phrase")
const menu = document.getElementById("menu")

const countdownH2 = document.getElementById("countdownH2")
const eventH2 = document.getElementById("eventH2")
const giftH2 = document.getElementById("giftH2")
const dresscodeH2 = document.getElementById("dresscodeH2")
const menuH2 = document.getElementById("menuH2")

// const mileflotante = document.getElementById("mileflotante")
// mileflotante.style.opacity = "0"

// function ajustarAlturaDeElementos() {
//   var alturaDelViewport = window.innerHeight;
//   main.style.height = alturaDelViewport;
//   console.log(alturaDelViewport)

//   // Ajusta tus elementos con respecto a la altura del viewport aquí
// }
// window.addEventListener('load', ajustarAlturaDeElementos);
// window.addEventListener('resize', ajustarAlturaDeElementos);

var scrollItems = document.querySelectorAll('.section');

main.addEventListener('scroll', verificarElementosEnViewport);

function verificarElementosEnViewport() {
  var limiteSuperior = phrase.getBoundingClientRect().top;
  var limiteInferior = menu.getBoundingClientRect().bottom;

  if (limiteSuperior > 0) {
    // console.log(limiteSuperior)
    phrase.style.animationName = 'probando'
    phrase.style.animationDuration = '.6s'
    phrase.style.opacity = '1'
    // arrow.style.rotate = '180deg'
    // arrow.style.animationName = 'reverse-rotate'

    }
  if (limiteSuperior == 0) {
    // console.log(limiteSuperior)
    // console.log('llego al tope')
    // arrow.style.animationName = 'rotate'
    // arrow.style.rotate = '0deg'
    // arrow.style.animationDuration = '.5s'

   }

  
    scrollItems.forEach(function (item) {
      var rect = item.getBoundingClientRect();

      if (rect.top >= 0 && rect.bottom <= main.clientHeight) {
        // El elemento está dentro del viewport del contenedor
        // console.log('Elemento dentro del viewport:', item.id);
      }
    });
  }
// console.log(window.screen.height)

// //CAMBIO DE POSICION Y TAMAÑO DEL HEADER
// function verificarScroll() {
//   var limiteSuperior = main.getBoundingClientRect().top;
//   console.log(limiteSuperior);
//   if (limiteSuperior == 0) {

//     console.log('Llego al borde')
//     countdownH2.style.animationName = 'tracking-in-expand'
//     countdownH2.style.animationDuration = '1s'
//     countdownH2.style.animationDelay = '1s'


//   } else {

//     console.log('no esta todavia')
//   }
// }

// // Agrega un evento de desplazamiento para verificar continuamente
// window.addEventListener('scroll', verificarScroll);

// // Verifica el estado inicial
// verificarScroll();

//COUNTDOWN DEL EVENTO
// Fecha del evento en formato mm/dd/yy
var fechaEvento = "12/15/23"; // Por ejemplo, 31 de octubre de 2023

function mostrarDiferenciaTiempo() {
// Convierte la fecha del evento a un objeto de fecha en JavaScript
var partesFecha = fechaEvento.split("/");
var fechaEventoJs = new Date("20" + partesFecha[2], partesFecha[0] - 1, partesFecha[1]);

function actualizarTiempo() {
// Obtiene la fecha y hora actual
var fechaActual = new Date();

// Calcula la diferencia en milisegundos
var diferencia = fechaEventoJs - fechaActual;

// Convierte la diferencia a días, horas y minutos
var diasFaltantes = Math.floor(diferencia / (1000 * 60 * 60 * 24));
var horasFaltantes = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutosFaltantes = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
var segundosFaltantes = Math.floor((diferencia % (1000 * 60)) / 1000);

// Imprime el resultado solo cuando cambia el minuto
    // console.log("Días faltantes: " + diasFaltantes);
    document.getElementById("days").innerHTML = diasFaltantes

    // console.log("Horas faltantes: " + horasFaltantes);
    document.getElementById("hours").innerHTML = horasFaltantes

    // console.log("Minutos faltantes: " + minutosFaltantes);
    document.getElementById("minutes").innerHTML = minutosFaltantes

    // console.log("Segundos faltantes: " + segundosFaltantes);
    document.getElementById("seconds").innerHTML = segundosFaltantes

    // Actualiza el valor de los minutos
    mostrarDiferenciaTiempo.minutos = minutosFaltantes;
  }
 // Muestra el tiempo faltante inmediatamente
 actualizarTiempo();

 // Configura un temporizador para actualizar el tiempo cada minuto (60000 milisegundos)
setInterval(actualizarTiempo, 1000);
}

// Inicia la función para mostrar el tiempo faltante
mostrarDiferenciaTiempo();

//IDENTIFICAR POSICION DEL USUARIO
const userPosition = document.getElementById('userPosition');

async function initMap() {
// --> Verifica si la ubicacion esta habilitada en el dispositivo y, si no lo esta, devuelve error
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function (position) {
// --> Obtener las coordenadas de la ubicación actual

          userPosition.addEventListener('click', function(event) {
            latitud = position.coords.latitude;
            longitud = position.coords.longitude;
            
            console.log(longitud)
            console.log(latitud)
            userPosition.href = "https://www.google.es/maps/dir/" + latitud + "," + longitud + "/Terrazas+de+San+Jos%C3%A9+Sal%C3%B3n+Bailable,+Presidente+2400,+Av.+Juan+Domingo+Per%C3%B3n,+Yerba+Buena,+Tucum%C3%A1n/@-26.8120634,-65.295557,13z/data=!3m1!4b1!4m18!1m7!3m6!1s0x942242c13b357d5f:0xfb7fce5f1be7ff6c!2sTerrazas+de+San+Jos%C3%A9+Sal%C3%B3n+Bailable!8m2!3d-26.7994286!4d-65.3043288!16s%2Fg%2F11c6_l78wy!4m9!1m1!4e1!1m5!1m1!1s0x942242c13b357d5f:0xfb7fce5f1be7ff6c!2m2!1d-65.3042962!2d-26.7994676!3e0?entry=ttu"
            console.log(userPosition.href)
          })
          }
    )}}
initMap()


//DETECCION DE BROWSER
var nVer = navigator.appVersion;
var nAgt = navigator.userAgent;
var browserName  = navigator.appName;
var fullVersion  = ''+parseFloat(navigator.appVersion); 
var majorVersion = parseInt(navigator.appVersion,10);
var nameOffset,verOffset,ix;

// In Opera, the true version is after "OPR" or after "Version"
if ((verOffset=nAgt.indexOf("OPR"))!=-1) {
 browserName = "Opera";
 fullVersion = nAgt.substring(verOffset+4);
 if ((verOffset=nAgt.indexOf("Version"))!=-1) 
   fullVersion = nAgt.substring(verOffset+8);
}
// In MS Edge, the true version is after "Edg" in userAgent
else if ((verOffset=nAgt.indexOf("Edg"))!=-1) {
 browserName = "Microsoft Edge";
 fullVersion = nAgt.substring(verOffset+4);
}
// In MSIE, the true version is after "MSIE" in userAgent
else if ((verOffset=nAgt.indexOf("MSIE"))!=-1) {
 browserName = "Microsoft Internet Explorer";
 fullVersion = nAgt.substring(verOffset+5);
}
// In Chrome, the true version is after "Chrome" 
else if ((verOffset=nAgt.indexOf("Chrome"))!=-1) {
 browserName = "Chrome";
 fullVersion = nAgt.substring(verOffset+7);
}
// In Safari, the true version is after "Safari" or after "Version" 
else if ((verOffset=nAgt.indexOf("Safari"))!=-1) {
 browserName = "Safari";
 fullVersion = nAgt.substring(verOffset+7);
 if ((verOffset=nAgt.indexOf("Version"))!=-1) 
   fullVersion = nAgt.substring(verOffset+8);
}
// In Firefox, the true version is after "Firefox" 
else if ((verOffset=nAgt.indexOf("Firefox"))!=-1) {
 browserName = "Firefox";
 fullVersion = nAgt.substring(verOffset+8);
}
// In most other browsers, "name/version" is at the end of userAgent 
else if ( (nameOffset=nAgt.lastIndexOf(' ')+1) < 
          (verOffset=nAgt.lastIndexOf('/')) ) 
{
 browserName = nAgt.substring(nameOffset,verOffset);
 fullVersion = nAgt.substring(verOffset+1);
 if (browserName.toLowerCase()==browserName.toUpperCase()) {
  browserName = navigator.appName;
 }
}
// trim the fullVersion string at semicolon/space if present
if ((ix=fullVersion.indexOf(";"))!=-1)
   fullVersion=fullVersion.substring(0,ix);
if ((ix=fullVersion.indexOf(" "))!=-1)
   fullVersion=fullVersion.substring(0,ix);

majorVersion = parseInt(''+fullVersion,10);
if (isNaN(majorVersion)) {
 fullVersion  = ''+parseFloat(navigator.appVersion); 
 majorVersion = parseInt(navigator.appVersion,10);
}

// document.write(''
//  +'Browser name  = '+browserName+'<br>'
//  +'Full version  = '+fullVersion+'<br>'
//  +'Major version = '+majorVersion+'<br>'
//  +'navigator.appName = '+navigator.appName+'<br>'
//  +'navigator.userAgent = '+navigator.userAgent+'<br>'
//)


//DETECCION DE OS
var OSName="Unknown OS";
if (navigator.appVersion.indexOf("Win")!=-1) OSName="Windows";
if (navigator.appVersion.indexOf("Mac")!=-1) OSName="MacOS";
if (navigator.appVersion.indexOf("X11")!=-1) OSName="UNIX";
if (navigator.appVersion.indexOf("Linux")!=-1) OSName="Linux";

// document.write('Your OS: '+OSName);