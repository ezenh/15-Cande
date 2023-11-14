let vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty('--vh', `${vh}px`);

var fechaEvento = "12/15/23"; // Por ejemplo, 31 de octubre de 2023
const userPosition = document.getElementById('userPosition');

// const audioPlay = document.getElementById("audio_icon")
// audioPlay.addEventListener("click", play_mute)

// console.log(audioPlay.src)

// function play_mute() {
//   if (audioPlay.src == './assets/icons/soundON.png') {
//     audioPlay.src = './assets/icons/soundOFF.png'
//   }
// }


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
            userPosition.href = "https://www.google.es/maps/dir/" + latitud + "," + longitud + "/Alto+Belgrano+Eventos,+Av.+Manuel+Belgrano+4300,+T4000+San+Miguel+de+Tucum%C3%A1n,+Tucum%C3%A1n/@-26.8190235,-65.2344965,14z/data=!3m1!4b1!4m10!4m9!1m1!4e1!1m5!1m1!1s0x94225d1df8d861a9:0x9f0255baa90620bd!2m2!1d-65.2555968!2d-26.8088452!3e0?entry=ttu"
            console.log(userPosition.href)
          })
          }
    )}}
initMap()

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
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