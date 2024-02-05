function suma() {

    // Explicación ALGORITMO
    alert("Algoritmo que realice una suma entre dos valores ingresados por el usuario")

    // DECLARAIÓN DE VARIABLES NECESARIOS
    let A=0;
    let B=0;
    let S=0;

    // CAPTURAMOS LOS DATOS
    A = parseInt (prompt("Ingrese el primer valor"));
    B = parseInt (prompt("Ingrese el segundo valor"));

    // REALIZAMOS LA OPERACIÓN
    S = A + B;

    // DAMOS EL RESULTADO O RESPUESTA
    alert("El resultado de la suma es: " + S);
    
}

function opbasicas() {
    // EXPLICACIÓN ALGORITMO
    alert("Algoritmo que realice una resta entre dos valores ingresados por el usuario");

    // DECLARAIÓN DE VARIABLES NECESARIOS
    let A=0;
    let B=0;
    let R=0;
    let S=0;
    let M=0;
    let D=0;

    // CAPTURAMOS LOS DATOS
    A = parseInt (prompt("Ingrese el primer valor"));
    B = parseInt (prompt("Ingrese el segundo valor"));

    // REALIZAMOS LA OPERACIÓN
    S = A + B;
    R = A - B;
    M = A * B;
    D = A / B;

    // DAMOS EL RESULTADO O RESPUESTA
    alert("El resultado de la suma es: " + S);
    alert("El resultado de la resta es: " + R);
    alert("El resultado de la multiplicción es: " + M);
    alert("El resultado de la division es: " + D);
}

function nCuadrado() {
    // EXPLICACIÓN ALGORITMO
    alert("Algoritmo que calcula el cuadrado de un numero ingresado");

    // DECLARAIÓN DE VARIABLES NECESARIOS
    let N,C =0;

    // CAPTURAMOS LOS DATOS
    N = parseInt (prompt("Ingrese el primer valor"));
    C = parseInt (prompt("Ingrese el segundo valor"));

    // REALIZAMOS LA OPERACIÓN
    C = N * N;

    // DAMOS EL RESULTADO O RESPUESTA
    alert("El resultado del cuadrado es: " + C)
}

function aTriangulo() {
    // EXPLICACIÓN ALGORITMO
    alert("Algoritmo que calcula la zona de un triangulo de un numero ingresado");

    // DECLARAIÓN DE VARIABLES NECESARIOS
    let B,A,X =0;

    // CAPTURAMOS LOS DATOS
    B = parseInt (prompt("Ingrese la base"));
    A = parseInt (prompt("Ingrese la altura"));

    // REALIZAMOS LA OPERACIÓN
    X = B * A;

    // DAMOS EL RESULTADO O RESPUESTA
    alert("El resultado del cuadrado es: " + X)
}

function cMedidas() {
    // EXPLICACIÓN ALGORITMO
    alert("Algoritmo que convierte medidas de un numero ingresado");

    // DECLARAIÓN DE VARIABLES NECESARIOS
    let C,X,M =0;

    // CAPTURAMOS LOS DATOS
    C = parseInt (prompt("Ingrese el valor"));
    M = parseInt (prompt("Ingrese el valor"));

    // REALIZAMOS LA OPERACIÓN
    X = C*C;
    M = C/C;

    // DAMOS EL RESULTADO O RESPUESTA
    alert("El resultado de la conversión es: " + X)
    alert("El resultado de la conversión es: " + M)
}

function nmMayor() {
    // EXPLICACIÓN ALGORITMO
    alert("Algoritmo que determina el mayor de dos numeros ingresado");

    // DECLARAIÓN DE VARIABLES NECESARIOS
    let N1, N2 =0;

    // CAPTURAMOS LOS DATOS
    N1 = parseInt (prompt("Ingrese el valor"));
    N2 = parseInt (prompt("Ingrese el valor"));

    // REALIZAMOS LA OPERACIÓN
    if (N1==N2) {
        alert("Los valores ingresados son iguales, no sea pendejo");
    }else if(N1>N2){
        alert(N1 + " Es mayor que " + N2);
    }else{
        alert(N2 + " Es mayor que " + N1);
    }
}

function nmMenor() {
    // EXPLICACIÓN ALGORITMO
    alert("Algoritmo que determina el menor de tres numeros ingresado");

    // DECLARAIÓN DE VARIABLES NECESARIOS
    let N1, N2, N3 =0;

    // CAPTURAMOS LOS DATOS
    N1 = parseInt (prompt("Ingrese el valor"));
    N2 = parseInt (prompt("Ingrese el valor"));
    N3 = parseInt (prompt ("Ingrese el valor"));

    // REALIZAMOS LA OPERACIÓN
    if ((N1==N2) && (N1==N3)) {
        alert("Los valores ingresados son iguales, no sea pendejo");
    }else if((N1<N2) && (N1<N3)){
        alert(N1 + " Es menor que " + N2 + " Y " + N3);
    }else if((N2<N1) && (N2<N3)){
        alert(N2 + " Es menor que " + N1 + " Y " + N3);
    }else{
        alert(N3 + " Es menor que " + N2 + " Y " + N1);
    }
}

function pmNotas() {
    // EXPLICACIÓN ALGORITMO
    alert("Algoritmo que determina si un estudiante aprobo o reprobo");

    // DECLARAIÓN DE VARIABLES NECESARIOS
    let NOTAS =0;

    // CAPTURAMOS LOS DATOS
    NOTAS = parseInt (prompt("Ingrese la calificación"));

    // REALIZAMOS LA OPERACIÓN
    if (NOTAS>6.1) {
        alert("El estudiante aprobo la materia :D");
    }else if (NOTAS<6) {
        alert("El estudiante a reprobado la materia >:c SAQUELO DEL COLEGIO");
    }
}

function dcCompras() {
    // EXPLICACIÓN ALGORITMO
    alert("Algoritmo que le permita saber al vendedor cuanto debe pagar a un cliente");

    // DECLARAIÓN DE VARIABLES NECESARIOS
    let precioPorKilo = 15000;

    // CAPTURAMOS LOS DATOS
    let cantidadKilos = parseInt(prompt("Ingrese el peso de su compra en kilos:"));

    // REALIZAMOS LA OPERACIÓN
    let porcentajeDescuento;

    if (cantidadKilos >= 0 && cantidadKilos <= 2) {
        porcentajeDescuento = 0;
    } else if (cantidadKilos >= 3 && cantidadKilos <= 5) {
        porcentajeDescuento = 10;
    } else if (cantidadKilos >= 6 && cantidadKilos <= 10) {
        porcentajeDescuento = 15;
    } else {
        porcentajeDescuento = 20;
    }

    // CALCULAMOS EL COSTO TOTAL SIN DESCUENTO
    let costoSinDescuento = cantidadKilos * precioPorKilo;

    // CALCULAMOS EL DESCUENTO
    let descuento = costoSinDescuento * porcentajeDescuento;

    // CALCULAMOS EL MONTO A PAGAR
    let montoPagar = costoSinDescuento - descuento;

    // MOSTRAMOS EL RESULTADO
    alert(`El monto a pagar es: $${montoPagar.toFixed(2)}`);

}


function slSemanal() {

    // EXPLICACIÓN DEL ALGORITMO
    alert("Algoritmo que le permita saber el salario semanal ");

    // DECLARACION DE VARIABLES NECESARIAS
    let salarioHoraNormal = 12500;
    let salarioHoraExtra = 18000;
    let horasNormales = 40;

    let salarioTotal = 0;

    // CAPTURAMOS LOS DATOS
    let horasTrabajadas = parseFloat(prompt("Ingrese las horas trabajadas en la semana:"));

    // REALIZAMOS LA OPERACIÓN
    if (horasTrabajadas <= horasNormales) {
        salarioTotal = horasTrabajadas * salarioHoraNormal;
    } else {
        // Calcular el salario por las primeras 40 horas
        salarioTotal = horasNormales * salarioHoraNormal;

        // Calcular el salario por las horas extra
        let horasExtra = horasTrabajadas - horasNormales;
        salarioTotal += horasExtra * salarioHoraExtra;
    }

    // MOSTRAMOS EL RESULTADO
    alert(`El salario semanal del obrero es: ${salarioTotal.toFixed(2)}`);

}


