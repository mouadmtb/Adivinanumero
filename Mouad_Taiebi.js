  // buscamos un numero aleatorio entre 1 y 100
        var aleatorio=Math.floor((Math.random()*100)+1);
        var contador=0;
 
        function comprobar() {
            
            // numero de respuestas
            var intentos=document.getElementById("intentos").value;
 
            if(document.getElementById("intentos").disabled==false) {
                if(isNumber(intentos) && intentos>0) {
                    document.getElementById("introduce").innerHTML+="<br>Indica un numero entre 1 y 100: <input type='text' name='numero'' id='numero'' disabled >"
                    document.getElementById("intentos").disabled=true;
                    document.getElementById("numero").disabled=false;
                    document.getElementById("numero").focus();
                }
            }else{
                // obtenemos el contenido del div que contiene las respuestas
                var respanteriores=document.getElementById("respanteriores").innerHTML;
 
                if(contador<intentos)
                {
                    // obtenemos el numero introducido por el usuario
                    var numero=document.getElementById("numero").value;
 
                    if(isNumber(numero) && numero>0 && numero<100)
                    {
                        // aumentanos el numero de la respuesta dada
                        contador+=1;
 
                        if(numero>aleatorio){
                            //Si El numero propuesto es superior se incluye en el texo:
                            respanteriores+="<br>"+numero+" - El numero que buscas es inferior";
                            document.getElementById("numero").focus();
                        }
                        else if(numero<aleatorio){
                            //Si El numero propuesto es inferior se incluye en el texo:
                            respanteriores+="<br>"+numero+" - El numero que buscas es superior";
                            document.getElementById("numero").focus();
                        }else{
                            //Si aciertas el numero elegido, salta una felicitacion:
                            respanteriores+="<br>"+numero+" - HAS ACETADO!!<br>";
 
                            fin()
                        }
                        // vaciamos el valor del numero
                        document.getElementById("numero").value="";
                    }else{
                        respanteriores+="<br>"+numero+" - Tiene que ser un valor numerico comprendido entre 1 y 100</span>";
                    }
                }else{
                    respanteriores+="<br>NO HAS ACETADO!! El numero era el "+aleatorio+"<br>";
 
                    fin()
                }
 
                // ponemos nuevamente todas las respuestas
                document.getElementById("respanteriores").innerHTML=respanteriores;
            }
 
            // devolvemos false para que el formulario no envie los valores
            return false;
        }
 
         /* Funcion que se ejecuta al finalizar el juego ya sea por 
            haber descubierto el numero o por finalizar el numero de intentos */
        function fin(){
            document.getElementById("numero").disabled=true; // deshabilitamos el casilla de entrar el numero, y el boton enviar
            document.getElementById("btnEnviar").disabled=true;
            //añadimos un boton de recarga para volver a jugar
            document.getElementById("recarga").innerHTML="<button onclick='window.location.href=window.location.href'>Recargar</button>";
            document.getElementById("recarga").innerHTML+="<button onclick='href=index.html'>Volver al indice</button>";
        }
 
        //Funcion para comprobar que los caracteres añadidos son numeros
        function isNumber(n){
            return !isNaN(parseFloat(n)) && isFinite(n);
                            }
  

