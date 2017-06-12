/*
 =====================================================
 MATH: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Math
 =====================================================

 Wykonaj poniższe zadania z uzyciem metod oraz wynik każdego zadania wyświetl w konsoli:
 - Math.random() - zwraca losową wartość w zakresie od 0 do 1
 - Math.round(a) - zaokrągła wartość w górę lub w dół
 - Math.max(a, b, c...) - zwraca największą wartość spośród przekazanych wartosci
 - Math.pow(a, b) - podnosi wartość a do potegi b

1. Napisz funkcję, która przyjmuje dwa parametry. Pierwszy parametr to wartość, a drugi to potęga,
   do której wartość zostanie podniesiona. Wynik wyświetl w konsoli:
   - input: 2,3
   - output: "2 do potegi 3 to: 8"
 -----------------------------------------------------
 CODE GOES BELOW */
function getPow(a, b) {
    return Math.pow(a, b);
}

getPow(2, 11);

console.log('Ex.1', getPow(2, 11));
/*
 -----------------------------------------------------
2. Napisz funkcję, która zwraca losową liczbę w zakresie od 0 do 1.
   - output: np. 0.32124
 -----------------------------------------------------
 CODE GOES BELOW */
function getRandomValue() {
    return Math.random();
}

getRandomValue();

console.log('Ex.2', getRandomValue());
/*
 -----------------------------------------------------

3. Napisz funkcję, która zwraca losową liczbę w zakresie od 1 do 10;
   - output: np. 3.32124
 -----------------------------------------------------
 CODE GOES BELOW */
function getRandomValueToTen() {
    return Math.random() * 10;
}

getRandomValueToTen();

console.log('Ex.3', getRandomValueToTen());
/*
 -----------------------------------------------------

4. Napisz funkcję, która przyjmuje 3 parametry (liczby) i zwraca parametr z największą wartością
   - input: 4, 10, 3
   - output: 10
 -----------------------------------------------------
 CODE GOES BELOW */
function getMaxValue(a, b, c) {
    return Math.max(a, b, c);
}

getMaxValue(30, 50, 10);

console.log('Ex.4', getMaxValue(30, 50, 10));
/*
 -----------------------------------------------------

5. Napisz metodę, która przyjmuje 1 parametr (liczbę) i zaokrągla tą liczbę do całosci.
   - input: 4.33
   - output: 4

   - input: 5.76
   - output: 6

 -----------------------------------------------------
 CODE GOES BELOW */
function roundValue(number) {
    return Math.round(number);
}

roundValue(10.333);

console.log('Ex.5', roundValue(10.333));
/*
 -----------------------------------------------------

6. Napisz funkcję, która przyjmuje dwie liczby i zwraca resztę z dzielenia tych liczb.
 -----------------------------------------------------
 CODE GOES BELOW */
function getRemainder(a, b) {
    return a % b;
}

getRemainder(7, 2);

console.log('Ex.6', getRemainder(7, 2));
/*
 -----------------------------------------------------

7. Napisz funkcję, która przyjmuje dwie liczby i zwraca iloczyn tych liczb
 -----------------------------------------------------
 CODE GOES BELOW */
function multiply(a, b) {
    return a * b;
}

multiply(7, 2);

console.log('Ex.7', multiply(7, 2));
/*
 -----------------------------------------------------

8. Napisz funkcję, która przyjmuje dwie liczby i zwraca różnicę tych liczb
 -----------------------------------------------------
 CODE GOES BELOW */
function diff(a, b) {
    return a - b;
}

diff(7, 2);

console.log('Ex.8', diff(7, 2));
/*
 -----------------------------------------------------

9. Napisz funkcję, która przyjmuje dwie liczby i zwraca iloraz tych liczb.
 -----------------------------------------------------
 CODE GOES BELOW */
function divide(a, b) {
    return a / b;
}


divide(7, 2);

console.log('Ex.9', divide(7, 2));
/*
 -----------------------------------------------------

10. Napisz funkcję, która liczy pole koła (pi r^2). Wynik ma być podany z dokładnością
    do 2 cyfr po przecinku
 -----------------------------------------------------
 CODE GOES BELOW */
function getCircleArea(r) {
    var area = Math.PI * Math.pow(r, 2);
    return area.toFixed(2);
}

getCircleArea(40);

console.log('Ex.10', getCircleArea(40));
/*
 -----------------------------------------------------

11. Napisz funkcję, która liczy deltę ( b^2 - 4ac). Wynik ma być zaokrąglony do całości.
 -----------------------------------------------------
 CODE GOES BELOW */
function countDelta(a, b, c) {
    return b * b - 4 * a * c
}

countDelta(3, 4, 5);

console.log('Ex.11', countDelta(3, 4, 5));
/*
 -----------------------------------------------------

12. Stwórz funkcję, która podbija wartość globalnej zmiennej o nazwie counter = 0, o jeden przy
    każdym wywołaniu. Następnie wywołaj tą funkcję 3 razy i wyświetl wartość zmiennej counter
    w console.logu

 -----------------------------------------------------
 CODE GOES BELOW */
var counter = 0;

function counterUp() {
    counter++;
}

counterUp();
counterUp();
counterUp();

console.log('Ex.12 - counter', counter);
/*
 -----------------------------------------------------

 =====================================================
 TIPS:
 - pamiętaj o wywołaniu funkcji
 - nazewnictwo funkcji
 * camelCase
 * nazwa ma wskazywać co funkcja wykonuje
 - odpowiednie formatowanie
 - Math. zawsze wielką literą!

 =====================================================
*/

