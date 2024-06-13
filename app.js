let numeroSecreto = 0;
let intentos =0;
let listaNumerosSorteados= [];
let numeroMaximo =10;

function asignarTextoElemento(elemento, texto){ // encapsulamiento
    let elementoHTML = document.querySelector(elemento); // selectores
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    console.log(intentos);
    // console.log(numeroSecreto); sirve para ver el numero creado
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos===1)?'vez':'veces'} `); // operador ternario con un strin template
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{
        // el usuario no acerto.
        if (numeroDeUsuario>numeroSecreto){
            asignarTextoElemento('p','El numero secreto es menor');

        }else{
            asignarTextoElemento('p','El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}
function limpiarCaja(){
    document.querySelector('#valorUsuario').value='';// con el gato me refiero que lo estoy pidiendo por id
}

function generarNumeroSecreto() {
    let numeroGenerado= Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    // si ya sorteamos todos numero
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'ya se sortearon todos los numeros posibles');

    }else{
          //si el numero generado estas incluida en la lista   
    if(listaNumerosSorteados.includes(numeroGenerado)){
        // si en listaNumerosSorteados.recorre toda la lista y devuelve 
        // un valor si es que lo hay en la lista de numeroGenerado.
                return generarNumeroSecreto();
            }else{
                //
                listaNumerosSorteados.push(numeroGenerado);
                return numeroGenerado;
                
            }
    }
  
}
function condicionesIniciales(){
    asignarTextoElemento('h1','juego del numero secreto'); // se localiza en el index y luego va el texto
    asignarTextoElemento('p',`Indica un numero del 1 ${numeroMaximo}`); 
    numeroSecreto = generarNumeroSecreto();
    intentos=1;
}
function reiniciarJuego(){
    //limpiar la caja
    limpiarCaja();
    // indicar mensaje de intervalos de numeros
    //generar el numero aleatorio
    //inicializar el numero de intentos
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}
// esto se puede hacer en eventos 
// fuera de unbloque 
// hoisting
condicionesIniciales();
