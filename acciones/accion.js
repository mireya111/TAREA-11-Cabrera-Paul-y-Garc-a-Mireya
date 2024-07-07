
document.addEventListener('DOMContentLoaded', (event)=>{
    const enviar = document.querySelector("#contenidoForm");
    enviar.addEventListener('submit', (event)=>{
        event.preventDefault(); 
        let nombre = document.getElementById("nombre").value;
        let apellido = document.getElementById("apellido").value;
        let edad = document.getElementById("edad").value;
        let correo = document.getElementById("correo").value;

        let arreglo = [];
        
        /*Vaciar errores*/
        document.getElementById("error1").textContent = "";
        document.getElementById("error2").textContent = "";
        document.getElementById("error3").textContent = "";
        document.getElementById("error4").textContent = "";

        let erroresTengo = false; 

        if(nombre==""){
            document.getElementById("nombre").style.border = "4px solid red";
            document.getElementById("error1").style.color="red";
            document.getElementById("error1").textContent="Alerta : Campo vacío";
            erroresTengo = true; 
        } else{
            document.getElementById("nombre").style.border = "";
            arreglo.push(nombre);
        }
        if(apellido==""){
            document.getElementById("apellido").style.border= "4px solid red"; 
            document.getElementById("error2").style.color="red";
            document.getElementById("error2").textContent="Alerta : Campo vacío";
            erroresTengo = true;
        }else{
            document.getElementById("apellido").style.border= ""; 
            arreglo.push(apellido); 
        }
        
        if(edad==""){
            document.getElementById("edad").style.border="4px solid red"; 
            document.getElementById("error3").style.color="red";
            document.getElementById("error3").textContent="Alerta : Campo vacío";
            erroresTengo = true; 
        }else{
            document.getElementById("edad").style.border=""; 
            arreglo.push(edad); 
        }

        if(edad<18){
            let mayorMenor = "No es mayor de edad";
            arreglo.push(mayorMenor);
        }else if(edad>=18){
            let noMayorMenor = "Mayor de edad";
            arreglo.push(noMayorMenor);
        }

        if(correo=="" || !validarEmail(correo)){
            document.getElementById("correo").style.border="4px solid red"; 
            document.getElementById("error4").style.color="red";
            document.getElementById("error4").textContent="Alerta : Campo vacío o correo incorrecto";
            erroresTengo=true; 
        }else{
            document.getElementById("correo").style.border=""; 
            arreglo.push(correo); 
        }

        if (erroresTengo!=true) {
            /*Se trabajo con un arreglo, el cual almacena lo colocado por el usuario cuando lo realice adecuadamente, se lo 
            transcribe en el espacio propuesto accediendo a los indices del arreglo antes mencionado.*/ 
            document.getElementById("resultados").style.display='block'
            document.getElementById("resultados").innerHTML = `
                <b>Datos registrados</b>
                <b>Nombre: </b> ${arreglo[0]}<br>
                <b>Apellido: </b>${arreglo[1]}<br>
                <b>Edad: </b>${arreglo[2]}<br>
                <b>¿Es o no es mayor de edad?: </b>${arreglo[3]}<br>
                <b>Correo: </b>${arreglo[4]}
            `;
            /*Se le da un tiempo para que se presente los resultados del registro, se lo hace no visible y se envia los datos colocados*/
            setTimeout(() => {
                document.getElementById("resultados").style.display='none'
                enviar.submit();
                alert("Se han enviado sus datos"); 
            }, 5000);
        } 
   })
});
function validarEmail(email) {
    const correoValido = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return correoValido.test(email);
}
function mostrarImagen(){
    document.querySelector(".imagenes").style.display='block';
    document.querySelector(".formulario").style.backgroundColor='rgb(221, 221, 255)';
    document.querySelector("body").style.backgroundColor='rgb(53, 53, 255)';
}
function ocultarImagen(){
    document.querySelector(".imagenes").style.display='none'; 
    document.querySelector(".formulario").style.backgroundColor='rgb(226, 221, 221)';
    document.querySelector("body").style.backgroundColor='gray';
}

function solo_pares(){
    var p = document.getElementsByTagName('p');

    for (let i=0; i<=4; i++){
        for(let i=0; i<5; i++){
            modulo=i%2
            if(modulo!=0){
                p[i].style.color="orange"
                p[i].style.fontFamily="Cursive"
                p[i].style.background="black"
            }
        }
    }
}

function pintar_titulos(){
    var h3 = document.getElementsByTagName('h3');
    var h1 = document.getElementsByTagName('h1');

    for (let i=0; i<=4; i++){
        h3[i].style.color="purple";
        h1[i].style.color="Blue";
    }
}

function solo_impares(){
    var p = document.getElementsByTagName('p');

    for (let i=0; i<=4; i++){
        for(let i=0; i<5; i++){
            modulo=i%2
            if(modulo==0){
                p[i].style.color="skyblue"
                p[i].style.fontFamily='Trebuchet MS';
                p[i].style.background="blue"
            }
        }
    }
}

function deshacer(){
    var p = document.getElementsByTagName('p');
    var h3 = document.getElementsByTagName('h3');
    var h1 = document.getElementsByTagName('h1');
    for (let i=0; i<=4; i++){
        p[i].style.fontFamily='initial';
        h3[i].style.color='initial';
        h1[i].style.color='initial';
        p[i].style.color='initial';
        p[i].style.backgroundColor='initial';
    }
}




