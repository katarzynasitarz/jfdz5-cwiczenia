(function() {
    var developer = "PawEŁ";
})();
/*
 =====================================================
 STRING: https://developer.mozilla.org /en-US/docs/Web/JavaScript/Reference/Global_Objects/String
 =====================================================

 Wykonaj poniższe zadania z uzyciem metod oraz wynik każdego zadania wyświetl w konsoli:
 - string.replace() - zmiana dowolnego znaku
 - string.split() - konwersja stringa do tablicy
 - string.trim() - usunięcie whitespaces
 - string.charAt() - odczytanie znaku na zadanym indeksie
 - string.substring() - ekstrakcja części znaków ze stringa
 - string.toLowerCase() - konwersja na wielkie litery
 - string.toUpperCase() - konwersja na małe litery
 - string.length - odczytanie długości

1. Zadeklaruj zmienną var name = "Rambo" i zamień literkę "m" na dowolny znak

 * pożądany wynik: "RaXbo"

 -----------------------------------------------------
 CODE GOES BELOW */
var hero = 'Rambo';
hero = hero.replace('R', 'X');

console.log('Ex.1', hero);
/*
 -----------------------------------------------------

2. Poniższe zmienne, rozbij na tablicę liter:
  - var nameOne = "Rambo";
  - var nameTwo = "R_a_m_b_o";
  - var nameThree = "ROXaOXmOXbOXo";

 * pożądany wynik w dla każdej zmiennej: ["R", "a", "m", "b", "o"]

 -----------------------------------------------------
 CODE GOES BELOW */
var nameOne = "Rambo";
var nameTwo = "R_a_m_b_o";
var nameThree = "ROXaOXmOXbOXo";
nameOne = nameOne.split('');
nameTwo = nameTwo.split('_');
nameThree = nameThree.split('OX');

console.log('Ex.2', hero);
/*
 -----------------------------------------------------

3. Oczyść stringa z zbędnych znaków:
 - var name = "   Rambo   ";

 * pożądany wynik: "Rambo"

 -----------------------------------------------------
 CODE GOES BELOW */
var name = "  Rambo   ";
name = name.trim();

console.log('Ex.3', name);
/*
 -----------------------------------------------------

4. Odczytaj znak na indeksie drugim i czwartym w zmiennej name:
 - var name = "Rambo";

 * pożądany wynik: "m" oraz "o"

 -----------------------------------------------------
 CODE GOES BELOW */
var name = "Rambo";
console.log('Ex.4', name.charAt(2), name.charAt(4));
/*
 -----------------------------------------------------

5. Odczytaj długość stringa name:
 - var name = "Rambo";

 * pożądany wynik: 5

 -----------------------------------------------------
 CODE GOES BELOW */
var name = "Rambo";
console.log('Ex.5', name.length);
/*
 -----------------------------------------------------

6. Stwórz nowe stringi na podstawie stringa name = "Rambo", które zawierają odpowiednio:
 - pierwsze 3 litery
 - ostatnie 3 litery

 * pożądany wynik: "ram" oraz "mbo"

 -----------------------------------------------------
 CODE GOES BELOW */
var name = "Rambo";

var firstThreeLetters = name.substring(0, 3);
var lastThreeLetters = name.substring(2, 5);

console.log('Ex.6', firstThreeLetters, lastThreeLetters);
/*
 -----------------------------------------------------

7. Stwórz nowego stringa na podstawie stringa name = "Rambo", i niech każdy znak bedzie upperCase

 * pożądany wynik: "rambo"

 -----------------------------------------------------
 CODE GOES BELOW */
var name = "Rambo";
var upperCasedName = name.toUpperCase();

console.log('Ex.7', upperCasedName);
/*
 -----------------------------------------------------

8. Stwórz nowego stringa na podstawie stringa name = "Rambo", i niech każdy znak bedzie lowerCase

 * pożądany wynik: "rambo"

 -----------------------------------------------------
 CODE GOES BELOW */
var name = "Rambo";
var lowerCasedName = name.toLowerCase();

console.log('Ex.8', lowerCasedName);
/*
 -----------------------------------------------------

 9. W zmiennej var name = "  Rambo  "
    - oczyść stringa z whitespaces
    - podmień text na wielkie litery
    - zostaw tylko dwie pierwsze litery

    * pożądany wynik: "RA"

 -----------------------------------------------------
 CODE GOES BELOW */
var name = "   Rambo   ";
name = name
    .trim()
    .toUpperCase()
    .substring(0, 2);

console.log('Ex.9', name);
/*
 -----------------------------------------------------

 =====================================================
 TIPS:
 * częsty bład:
   - var name = "Rambo";
     name.toUpperCase();
     console.log(name);
     OUTPUT: "Rambo" a nie "RAMBO"!

 * zwróć uwagę na formatowanie
 * przy wielu operacjach, to w pewnych przypadkach możesz je łańcuchować, np:
   - name.toUpperCase().trim().replace(...)

 =====================================================
*/

