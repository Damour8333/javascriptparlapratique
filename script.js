console.log('connecté');
/*
==========================================================================
       E       X        E        R       C     I        C     E    1
========================================================================
*/ 
//write a javascript program to check two numbers and return true if one of the number is 100 or if the sum of the two numbers is 100
////écrire un programme javascript pour vérifier deux nombres et renvoyer vrai si l'un des nombres est 100 ou si la somme des deux nombres est 100

const isEqualTo100 =(a,b) => a===100 || b === 100 || (a+b) ===100;

console.log(isEqualTo100(100,0));
console.log(isEqualTo100(0,100));

console.log(isEqualTo100(10,0));
console.log(isEqualTo100(0,10));

console.log(isEqualTo100(20,80));
console.log(isEqualTo100(50,50));



/*
==========================================================================
       E       X        E        R       C     I        C     E    2
========================================================================
*/ 

//Write  ajavascript program to get the  extension of  a file name

////Écrire un programme javascript pour obtenir l'extension d'un nom de fichier

const getFileExtension =  (str) => str.slice(str.lastIndexOf('.'));
console.log(getFileExtension('index.html'));
console.log(getFileExtension('webpack.config.js'));


/*
==========================================================================
       E       X        E        R       C     I        C     E    3
========================================================================
*/ 

//Write  a Javascript program  to replace every character in a given  string with the character following it in the alphabet

////Écrire un programme Javascript pour remplacer chaque caractère d'une chaîne donnée par le caractère qui le suit dans l'alphabet


//String.fromCharCode
// charCodeAt

const moveCharsForward  = (str) => str
                            .split('')
                            .map(char => String.fromCharCode(char.charCodeAt (0)+ 1)).join('');


console.log(moveCharsForward('z'));


/*
==========================================================================
       E       X        E        R       C     I        C     E    4
========================================================================
*/ 

//Write  a Javascript program to get the current date.
//Expected  Output :
//mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

//Ecrire un programme Javascript pour obtenir la date actuelle.
//Production attendue :
//mm-jj-aaaa, mm/jj/aaaa ou jj-mm-aaaa, jj/mm/aaaa


const formatDate = (date = new Date())  =>{
    const days = date.getDate() ;
    const months = date.getMonth() +1;
    const years = date.getFullYear();
    return `${days}/${months}/${years}`;
}
console.log(formatDate());



/*
==========================================================================
       E       X        E        R       C     I        C     E    4
========================================================================
*/ 

//Write  aJavascript program to create  a new String adding 'New!' already
//then return the original string

//// Écrivez un programme Javascript pour créer une nouvelle chaîne en ajoutant 'Nouveau !' déjà
// puis renvoie la chaîne d'origine

const addNew = (str) =>
        str.indexOf('New !') === 0 ? str : `New ! ${str}`;

console.log(addNew('New! Offers'));