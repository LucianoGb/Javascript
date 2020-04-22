var paciente = document.querySelectorAll('.paciente');
console.log(paciente);

for (i = 0 ; i < paciente.length; i++){
    console.log(paciente[i]);

    var tdPeso = paciente[i].querySelector('.info-peso');
    var peso = tdPeso.textContent;
    
    var tdAltura = paciente[i].querySelector('.info-altura');
    var altura = tdAltura.textContent;

    var tdImc = paciente[i].querySelector(".info-imc");

    var pesoValido = true;
    var alturaValida = true;

    if( peso <= 0 || peso >= 1000){
        console.log('Peso ínvalido');
        pesoValido = false;
        tdImc.textContent = "Peso Inválido";

    }

    if( altura <= 0 || altura >= 3.00){
        console.log('Altura ínvalido');
        alturaValida = false;
        tdImc.textContent = "Altura Inválida";

    }
    if (alturaValida && pesoValido) {
        var imc = peso / (altura * altura);
        tdImc.textContent = imc.toFixed(2);
    }

    

}