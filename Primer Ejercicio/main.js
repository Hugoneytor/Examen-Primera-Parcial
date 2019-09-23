var btnAmigos = document.querySelector("#btnAmigos");
btnAmigos.addEventListener("click", amigos);

var resultados = document.querySelector("#resultados");

function amigos(){
    var numero = Number(document.querySelector("#numero").value);

    resultados.textContent = numerosAmigos(numero);
}

    function numerosAmigos(numero,a,b){
        if(numeroUno(numero,a) == numeroDos(numero,b) && numeroDos(numero,b) == numeroUno(numero,a) ){
            return (numeroUno(numero,a)+ ', ' + numeroDos(numero,b) )
        }else{
            return 'No hay números amigos';
        }
    }

    function numeroUno(numero,a){
       let  suma = 0;
        for( i = 1; i < numero;i++){
            for(a = 1; a < i; a++){
                if(i%a==0){
                    suma += a;
                }
            }
        }
        return suma
}

    function numeroDos(numero,b){
        let suma = 0;
        for( i = 1; i < numero;i++){
            for(b = 1; b < i; b++){
                if(i%b==0){
                    suma += b;
                }
            }
        }
        return suma
    }

/*220 y 284 */