/*
 =====================================================
 CUSTOM FUNCTIONS
 =====================================================
 
1. Napisz funkcję, która wyświetla console.log z dowolnym tekstem

 -----------------------------------------------------
 CODE GOES BELOW */
    function showText(str) {
        console.log(str);
    }

   showText("Say hello");
   showText("Say hello TOmek");
   showText("Say hello Jadwiga");
/*
 -----------------------------------------------------

2. Napisz funkcję, która przyjmuje dwie liczby, oraz zwraca sumę tych liczb
    - input:  2, 3
    - output: 5

 -----------------------------------------------------
 CODE GOES BELOW */
function sum(a, b) {
    return a + b;
}
sum(2, 4);
var myNumber = sum(3,7);

console.log('Ex.2', myNumber);
/*
 -----------------------------------------------------

3. Napisz funkcję, która przyjmuje jeden parametr (string) i następnie ZWRACA wartość tego stringa jako upperCase i jednocześnie wycina whitespaces
    - input: "  rambo  "
    - output: "RAMBO"

 -----------------------------------------------------
 CODE GOES BELOW */
function getTrimedName(str) {
    return str.trim().toUpperCase();
}

var myName = "Tomek";
var trimmedName = getTrimedName(myName);

console.log('Ex.3', trimmedName);

/*
 -----------------------------------------------------

4. Napisz funkcję, która przyjmuje dwa parametry, pierwszy to liczba a drugi to jej dokładność w rozwinięciu dzisiętnym i ZWRACA odpowiednią wartość:
    - input:  11, 3
    - output: 11.000

 -----------------------------------------------------
 CODE GOES BELOW */
function getDecimalNumber(number, decimalPlaces) {
    return number.toFixed(decimalPlaces);
}

getDecimalNumber(13, 4);

console.log('Ex.4', getDecimalNumber(13, 4));
/*
 -----------------------------------------------------

5. Napisz funkcję, która przyjmuje imię i ZWRACA nowego stringa o postaci: "Hello, my name is TUTAJ_IMIE". Następnie wywołanie funkcji
    przypisz do zmiennej o nazwie "greeting".
    - input:  "Tomek"
    - output: "Hello my name is Tomek"

 -----------------------------------------------------
 CODE GOES BELOW */
function greeting(name) {
    return 'Hello, my name is ' + name;
}

var hello = greeting("Tomek");
console.log('Ex.5', hello);
/*
 -----------------------------------------------------

6. Stwórz IIFE i wywołaj w niej dowolnego console.log
 -----------------------------------------------------
 CODE GOES BELOW */
(function() {
    var num = 3;
    console.log(num);
})();
/*
 -----------------------------------------------------

 =====================================================
TIPS:
- pamiętaj o wywołaniu funkcji
- nazewnictwo funkcji
  * camelCase
  * nazwa ma wskazywać co funkcja wykonuje
- odpowiednie formatowanie

ŹLE:
function uppercaseitem(item){
  return item.toUpperCase();
}

DOBRZE:
function getUpperCasedName(name) {
  return name.toUpperCase();
}

 =====================================================
 */