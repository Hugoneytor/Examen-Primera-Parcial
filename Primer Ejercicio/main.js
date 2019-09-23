var btnAmigos = document.querySelector("#btnAmigos");
btnAmigos.addEventListener("click", amigos);

var resultados = document.querySelector("#resultados");

function amigos(){
    var numero = Number(document.querySelector("#numero").value);

    resultados.textContent = numerosAmigos(numero);
}

    function numerosAmigos(numero,a,b){
        if(numeroUno(numero,a) == numeroDos(numero,b) ){
            console.log(numeroUno(numero,a)+ ',' + numeroDos(numero,b) )
        }else{
            console.log('No hay números amigos');
        }
    }

    function numeroUno(numero,a){
        suma = 0;
        for( a = 1; a < numero;a++){
            if(numero%a==0){
                suma += a;
            }
        }
        return suma
}

    function numeroDos(numero,b){
        suma = 0;
        for( b = 1; b < numero;b++){
            if(numero%b==0){
                suma += b;
            }
        }
        return suma
    }

/*220 y 284 */