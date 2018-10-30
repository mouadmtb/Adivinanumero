//Ponemos una variable con el calculo del numero aleatorio
var aleatorio = Math.floor((Math.random() * 100) + 1);
var contador = 0;

var intentos = 0;
//Para obtener el numero aleatorio de la lista desplegable
function jugar() {
        // índice que se ha seleccionado
        var x = document.getElementById("intentos").selectedIndex;

        // array con las opciones del select
        var y = document.getElementById("intentos").options;
    
        intentos = y[x].value;
    
      }


function comprobar() {
//ahora comprobamos que el numero de intentos esta habilitado
    
if (document.getElementById("intentos").disabled === false) {
    if (isNumber(intentos) && intentos > 0) {
       document.getElementById("introduce").innerHTML += "<br>Indica un numero entre 1 y 100: <input type='text' name='numero' id='adivina' disabled >";
        document.getElementById("intentos").disabled = true;
        document.getElementById("adivina").disabled = false;
         document.getElementById("adivina").focus();
    }
}
else {
    //cogemos el div que contendra las respuestas
    var respuesta = document.getElementById("respanteriores").innerHTML;
    
    if (contador < intentos) {
        //obtenemos el numero que ha introducido el usuario
        var adivinado = document.getElementById("adivina").value;
        
        if (isNumber(adivinado) && adivinado > 0 && adivinado <= 100) {
            contador += 1;
            if (adivinado > numale) {
                //si el numero dado es mayor al numero aleatorio
                respuesta += "<br> El numero aleatorio es menor, baja mas"
                document.getElementById("adivina").focus();
            }
             else if (adivinado < aleatorio) {
                //si es menor al aleatorio...
                respuesta += "<br> El numero es mas grande, te quedaste corto!"
                document.getElementById("adivina").focus();
            }
            else {
                //si acierta..
                respuesta += "<br> HAS ACERTADO!! : " + adivinado;
                respuesta.backgroundColor='orange';
                gameover();
            }
            //se vacia el numero
            document.getElementById("adivina").value="";
        }
        else {
            respuesta += "<br>" + adivinado + "ERROR! Tiene que sder un numero entre 1 y 100"
        }
    }
    else{ adivinado += "<br> NO LO HAS CONSEGUIDO! El numero era: " + aleatorio 
         respuesta.backgroundColor= 'red'
         gameover()
        }
    //ponemos las respuestas
     document.getElementById("respanteriores").innerHTML= respuesta;
}
    // se devuelve false para que no se envien mas cosas
    return false;
}


//Esta funcion es para recargar la pagina

function recargar()
	{
		location.reload(true);
	}
//Esta funcion se encargara de finalizar el juego despues de que se cumplan las condiciones anteriores

function gameover() {
    document.getElementById("adivina").disabled=true;
    document.getElementById("btnenvio").disabled=true;
    document.getElementById("reiniciar").innerHTML="<button onclick='recargar()'>Recargar</button>";
}