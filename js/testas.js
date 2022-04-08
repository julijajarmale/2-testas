//1. Palyginti du skaičius a ir b. Išvesti į konsolę, kuris didesnis arba jie lygūs. (4 taškai)

function palyginimas(a, b) {
    if (a > b) {
    return `Skaicius ${a} yra didesnis`;
}
    if (a < b) {
    return `Skaicius ${b} yra didesnis`;
}   
    if (a === b) {
    return `Skaiciai ${a} ir ${b} yra lygūs`;
    }
    
}
 console.log(palyginimas(3, 3));
 console.log(palyginimas(2, 3));
 console.log(palyginimas(3, 4));

//2. Naudojant for ciklą, išvesti į konsolę skaičius nuo 1 iki 10. (5 taškai)
console.log(`--------------`)

for(let i= 1; i <= 10; i++){
    console.log(i);
    }

//3. Naudojant for ciklą, išvesti į konsolę skaičius nuo 0, 2, 4, 6, 8, 10. (5 taškai)
console.log(`--------------`)

for(let i= 0; i <= 10; i++){
        if(i % 2 === 0) {
        console.log(i);
        }
    }

//4. Naudojant for ciklą, sugeneruoti penkis atsitiktinius skaičius nuo 1 iki 10. Išvesti juos konsolėje. (5 taškai)
console.log(`--------------`)

function random(min, max) {
  return Math.floor(Math.random()*(max-min+1)+min);
}
for (let i = 0; i < 5; i++) {
    console.log(random(1,10));
}

//5. Naudojant while ciklą, spausdinti atsitiktinius skaičius nuo 1 iki 10. Paskutinis atspausdintas skaičius turi būti 5. (7 taškai)
console.log(`--------------`)

function rand(min, max) {   
    return Math.floor(Math.random()*(max-min+1)+min);
  }
  let number = 0;
  while (number != 5) {
      number = rand(1, 10);
      console.log(number);
 }

//10. Parašyti funkciją telefonoNumeris. Funkcija turi priimti vieną kintamąjį - masyvą. Masyvo elementai - skaičiai,
// ilgis - 10. Funkcija turi grąžinti telefono numerį tokiu formatu - "(XXX) XXX-XXXX". (10 taškų) */
console.log(`--------------`)

function telefonoNumeris(number) {
    if (typeof number !== 'object') {
        return 'ERROR: neteisingas numerio formatas'
    }
    if (number.length !== 10) {
        return 'ERROR: Netinkamas skaitmenų kiekis'
    }
        for (let i = 0; i <= number.length; i++) {
        const skaiciai = number[i]
        if (typeof skaiciai !== 'number') 
        return 'ERROR: Telefono numerį gali sudaryti tik skaičiai '
        
        return `(${number[0]} ${number[1]} ${number[2]}) ${number[3]} ${number[4]} ${number[5]} - ${number[6]} ${number[7]} ${number[8]} ${number[9]}`;
        }
}

console.log(telefonoNumeris([3, 7, 0, 6, 8, 6, 3, 9, 3, 2]));
console.log(telefonoNumeris([3, 7, 0, 6, 8, 6, 3, 9, 3]));
console.log(telefonoNumeris('labas'));
console.log(telefonoNumeris(['labas', 7, 0, 6, 8, 6, 3, 9, 3, 2]));

//6. Sukurti masyvą, kurio ilgis būtų nuo 20 iki 30, o reikšmės būtų skaičiai nuo 10 iki 30. Surasti didžiausią masyvo reikšmę,
// NENAUDOJANT sort() bei Math.max() funkcijų. (7 taškai)
console.log(`--------------`)

function maxNumber(list) {

    if (typeof list !== 'object') {
        return 'ERROR: netinkamas saraso tipas';
    }
    if (list.length === 0) {
        return 'ERROR: sarasas negali buti tuscias';
    }
    if ((list.length < 20) || (list.length > 30)) {
        return 'ERROR: neteisingas saraso ilgis';
    }
    

    let biggestNumber = 0;

    for (let i = 0; i < list.length; i++) {
        const number = list[i];
        
        if (typeof number !== 'number'|| !isFinite(number)) {
            return 'ERROR: sąrašą gali sudaryti tik skaičiai'
        }
        
        if (number < 10 || number > 30) {
            return 'ERROR: sąraše yra  netinkamas skaicius';
        }
      
    }

    
    return biggestNumber
}

    console.log(maxNumber([10, 11, 12, 15, 18, 20, 25, 10, 11, 12, 15, 18, 20, 25, 10, 11, 12, 15, 18, 20, 25]), '-->', 25);
    console.log(maxNumber(['labas', 11, 12, 15, 18, 20, 25, 10, 11, 12, 15, 18, 20, 25, 10, 11, 12, 15, 18, 20, 25]), '-->', 25);
    console.log(maxNumber([10, 11, 12, 15, 18, ]));
    console.log(maxNumber([10, 11, 12, 15, 18, 20, 25, 10, 11, 12, 15, 18, 20, 25, 10, 11, 12, 15, 18, 20, 25, 35 ]));
    console.log(maxNumber([10, 11, 12, 15, 18, 20, 25, 10, 11, 12, 15, 18, 20, 25, 10, 11, 12, 15, 18, 20, 25, 9 ]));

//7. Sugeneruokite masyvą, kurio reikšmės atsitiktinės raidės A, B, C ir D, o ilgis 100. Suskaičiuokite kiek yra kiekvienos raidės. (7 taškai)

//8. Parašyti funkciją - lygineSuma. Funkcijos parametrai - du kintamieji. Testų reikalavimai - abu kitamieji turi būti 
//arba skaičiai arba masyvai(negali būti vienas skaičius, kitas masyvas).
//Jei kintamieji skaičiai, grąžinti skaičių sumą, jei kintamieji masyvai - grąžinti masyvų ilgių sumą. 
//Jei abu kintamieji skaičiai arba masyvai, bet suma nelyginė - grąžinti tekstą, kad suma nelyginė. (10 taškų)

//9. Parašyti funkciją pirminisSkaicius. Funkcija turi vieną kintamąjį. Turi būti patikrinimas, kad kintamasis yra skaičius.
// Funkcija turi grąžinti ar pateiktas skaičius yra pirminis( pirminis skaičius yra tas, kuris dalinasi tik iš savęs 
//ir tik iš vieneto be liekanos.) (10 taškų)*
console.log(`--------------`)

function pirminisSkaicus(skaicius1) {
    if (typeof skaicius1 !== 'number'){
        return 'ERROR: kintamasis nėra skaičius';
    }
    if (!isFinite(skaicius1)) {
        return 'ERROR: kintamasis turi būti tikras skaicius';
    }
    
    for (let i=2; i<skaicius1; i++){
        if ((skaicius1 % i ===0) && (i !== 1)) 
        {
        if ((skaicius1 % skaicius1 === 0) && (skaicius1 % 1 === 0)) 
            return `Skaičius ${skaicius1} yra pirminis`;
        }
    }
    