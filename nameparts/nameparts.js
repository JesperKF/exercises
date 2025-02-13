// const fuldeNavn = "Peter Heronimous Lind";

// const navn = fuldeNavn.split(" ");

// const firstName = navn[0];
// const middleName = navn[1];
// const lastName = navn[2];

// console.log(navn);

const fullName = "Peter";

const nameFixed = 
  fullName.substring(0, 2).toLowerCase() +  
  fullName.charAt(2).toUpperCase() +       
  fullName.substring(3).toLowerCase();   

console.log(nameFixed);
