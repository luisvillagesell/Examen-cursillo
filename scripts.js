// function tipoFigura(lados) {
//     if(lados < 0) {
//         return "Error" + "El numero de lados no es correcto";
//     }  else if (lados == 0) {
//         return "círculo";
//     }   else if(lados == 3) {
//         return "triángulo";
//     }   else if (lados == 4) {
//         return "cuadrado";
//         }   else if (lados == 5) {
//             return "pentagono";
//     }   else if(lados == 6) {
//         return "exágono"
//     }   else {
//         return "polígono con "+ lados + " lados";
//     }
// }

// let lados = tipoFigura(4);
// console.log(lados);

//esta es la tercera parte de la evalución.
function perimetroFigura(lados, longitud) {
    if(lados < 0) {
        return "Error" + "El numero de lados no es correcto";
    }

    let figura;
    let perimetro;

    switch(lados) {
        case 0:
            figura = 'círculo';
            perimetro = 2 * Math.PI * longitud;
            break;
        case 3:
                figura = 'triángulo';
                perimetro = longitud * 3;
                break;
        case 4:
            figura = 'cuadrado';
            perimetro = longitud * 4;
            break;
        case 5:
            figura = 'pentagono';
            perimetro = longitud * 5;
            break;
        case 6:
            figura = 'exágono';
            perimetro = longitud * 6;
            break;
        default:
            figura = 'polígono con '+ lados + ' lados';
            perimetro = longitud * lados;
    }
    console.log("Es un", figura, "y su perímetro es", perimetro);
    //console.log("Perímetro:", perimetro);
}

perimetroFigura(4, 5);