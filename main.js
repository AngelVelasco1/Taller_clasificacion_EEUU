//! Crea un array de objetos
    const notes = [
    {tradicional: "90-100", range: "12-14", letter: "A", rating: "4", message: "Exelent"},
    {tradicional: "80-89", range: "9-11", letter: "B", rating: "3", message: "Demostrate"},
    {tradicional: "70-79", range: "6-8", letter: "C", rating: "2", message: "Aprochaes"},
    {tradicional: "60-69", range: "3-5", letter: "D", rating: "1", message: "Fails"},
    {tradicional: ">60", range: "1-2", letter: "E", rating: "0", message: "lucks all"},
    {tradicional: "0", range: "0", letter: "F", rating: "0", message: "no attemp"},

]
// Imprime el array notes como una tabla en consola
console.table(notes);
// Le preguntamos al usuario el tipo de nota que escribira y lo almacenamos en la var tipoNota
tipoNota = prompt("Elija su formato de nota: tradicional - range - sbg");
//
if (tipoNota === "tradicional" ){
    nota_user = prompt("Elija su nota en formato tradicional: ");
    tradicional();
}
else if (tipoNota === "range"  ){
    nota_user = prompt("Elija su nota en formato range; ");
    range();
}
else if (tipoNota === "sbg"  ){
    nota_user = prompt("Elija su nota en formato sbg: ");
    sbg();
}

function tradicional (){
    if (nota_user >= 90 && nota_user <= 100){
    alert("Tu calificación es: " `${notes[0].letter}`);
    }
    else if (nota_user >= 80 && nota_user < 90){
    alert("Tu calificación es: " `${notes[1].letter}`);
    }
    else if (nota_user >= 70 && nota_user < 80){
    alert("Tu calificación es: "`${notes[2].letter}`);
    }
    else if (nota_user >= 60 && nota_user < 70){
    alert("Tu calificación es: "`${notes[3].letter}`);
    }
    else if (nota_user < 60  && nota_user != 0){
    alert("Tu calificación es: "`${notes[4].letter}`);
    }
    else if (nota_user == 0){
    alert("Tu calificación es: "`${notes[5].letter}`);
    }   
    else { 
            alert("Intente de nuevo con ENTER, usa un numero de 0 a 100");
      }

}

function range(){
    if (nota_user >= 12 && nota_user <= 14){
    alert(`Tu calificación es: ${notes[0].letter}`);
    }
    else if (nota_user >= 9 && nota_user < 12){
    alert(`Tu calificación es: ${notes[1].letter}`);
    }
    else if (nota_user >= 6 && nota_user < 9){
    alert(`Tu calificación es: ${notes[2].letter}`);
    }
    else if (nota_user >= 3 && nota_user < 6){
    alert(`Tu calificación es: ${notes[3].letter}`);
    }
    else if (nota_user <= 1 && nota_user < 3){
    alert(`Tu calificación es: ${notes[4].letter}`);
    }
    else if (nota_user == 0){
    alert(`Tu calificación es: ${notes[5].letter}`);
    }
      else { 
            alert("Intente de nuevo con ENTER, usa un numero entre 0 y 14");
      }

  
}

function sbg (){
    if (nota_user === "4"){
    alert(`Tu calificación es: ${notes[0].letter}`);
    }
    else if (nota_user === "3"){
    alert(`Tu calificación es: ${notes[1].letter}`);
    }
    else if (nota_user === "2"){
    alert(`Tu calificación es: ${notes[2].letter}`);
    }
    else if (nota_user === "1"){
    alert(`Tu calificación es: ${notes[3].letter}`);
    }
    else if (nota_user === "0"){
    alert(`Tu calificación es: ${notes[4].letter}`);
    }
    else {
    alert("Intente de nuevo con ENTER, usa un numero de 0 a 4");
    }
}
