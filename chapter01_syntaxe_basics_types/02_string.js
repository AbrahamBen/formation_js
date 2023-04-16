const my_name = "Ben";
const firsName  = "Abraham";


let fullName = firsName + ' '+ my_name;


//Obteneir une lettre à partir d'une position

console.log(fullName[0]);

//Obtenir le nombre de caractères dans une chaine
console.log(fullName.length);


//Méthodes liées au string 

//1.Sans paramètres
console.log(fullName.toLocaleLowerCase());
console.log(fullName.toUpperCase());

///Avec parametres
let newIndexOf = fullName.indexOf('B');
console.log(newIndexOf);

//Silice
let sliceString = fullName.slice(0,4);

console.log(sliceString);


//Replace

let replaceString =fullName.replace('Abraham', 'Jefferson');

console.log(replaceString);