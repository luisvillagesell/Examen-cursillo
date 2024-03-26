    let nota1 = 0;
    let nota2 = 0;
    let nota3 = 0;
    
    function calcularMedia(n1, n2, n3) {
        nota1 = Number(n1);
        nota2 = Number(n2);
        nota3 = Number(n3);
        
        media = (nota1 + nota2 + nota3)/3;
        return media.toFixed(2);
    }

    let nota = calcularMedia(5,1,1);
    console.log("La nota promedio es : " + nota);
    
    if(nota < 4) {
        console.log("Libre")
    }  else if (nota >= 4 && nota <7){
        console.log("Regular")
    } else if (nota >=7 &&  nota <=10) {
        console.log("Promocionado")
    }else{
        console.log("Error");
}

