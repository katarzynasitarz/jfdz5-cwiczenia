
/*
=====================================================
Wszystkie poniższe przykłady, wyświetl w konsoli
=====================================================

0. Podepnij ten plik do pliku index.html
1. Zadeklaruj 3 zmienne typu string

 -----------------------------------------------------
 CODE GOES BELOW */
var name = 'Tomek',
    office = 'OBC',
    day = 'Saturday';

console.log('Ex.1', name, office, day);
 /*
 -----------------------------------------------------

2. Zadeklaruj 3 zmienne typu number

  -----------------------------------------------------
  CODE GOES BELOW */
var age = 28;
var buildingHeight = 300;
var feetSize = 14;

console.log('Ex.2', age, buildingHeight, feetSize);
/*
 -----------------------------------------------------

3. Zadeklaruj 3 zmienne typu boolean

 -----------------------------------------------------
 CODE GOES BELOW */
var isParent = false;
var isMonday = true;
var arePeopleTired = false;

console.log('Ex.3', isParent, isMonday, arePeopleTired);
/*
 -----------------------------------------------------

4. Zadeklaruj zmienną typu undefined

 -----------------------------------------------------
 CODE GOES BELOW */
var name;
var name = undefined;

console.log('Ex.4', name);
/*
 -----------------------------------------------------

5. Zadeklaruj zmienną typu null

 -----------------------------------------------------
 CODE GOES BELOW */
var salary = null;

console.log('Ex.5', salary);
/*
 -----------------------------------------------------

6. Zadeklaruj 3 tablice o dowolnej długości
   - składającą się wyłacznie z wartości typu string
   - składającą się wyłacznie z z wartości typu number
   - mieszaną (różne typy)

 -----------------------------------------------------
 CODE GOES BELOW */
var names = ["Tomek", "Brajan"];
var numbers = [1, 2, 3];
var mixins = [3, "Brajan", false];

console.log('Ex.6', names, numbers, mixins);
/*
 -----------------------------------------------------

 7. Zadeklaruj obiekt person, posiadający następujace pola:
   - firstName
   - lastName
   - age
   - country


   * Do propercji obiektu person przypisz wybrane przez siebie wartości

 -----------------------------------------------------
 CODE GOES BELOW */
    var person = {
        firstName: 'Tome',
        lastName: 'Nastaly',
        age: 67,
        country: 'Poland'
    };

console.log('Ex.7', person);
/*
 -----------------------------------------------------


8. Sprawdź typ co najmniej jednej zmiennej z poprzednich zadań i wyświetl jej
   w konsoli wraz z nazwą zmiennej, którą sprawdzasz

 -----------------------------------------------------
 CODE GOES BELOW */
console.log('Ex.8, typeof person is: ', typeof(person));
/*
 -----------------------------------------------------

9. Zadeklaruj dowolną zmienną za pomocą słówka VAR i wyświetl jej wartość w konsoli.
   Następnie nadpisz jej wartość i ponownie użyj console.log do wyświetlenia wartości.

 -----------------------------------------------------
 CODE GOES BELOW */
var office = 'Obc';
console.log('Ex.9, office is: ', office);
office = 'Alchemia';
console.log('Ex.9, office is: ', office);
/*
 -----------------------------------------------------

10.Zadeklaruj dowolną zmienną za pomocą słówka CONST i wyświetl jej wartość w konsoli.
   Następnie nadpisz jej wartość i ponownie użyj console.log do wyświetlenia wartości.

 -----------------------------------------------------
 TUTAJ KOD
 -----------------------------------------------------

 =====================================================
DOBRE PRAKTYKI:
Przy wykonywaniu zadań zwróć uwagę na:

- nazewnictwo:
  * camelCase
  * po angielsku
  * odpowiednio dobrana nazwa do typu zmiennej i jej przeznaczenia:
    - np. var isDisabled = true, zamiast var disabled = true;
    - np. var names = ['Monika'], zamiast var items = ['Monika'] lub var arr = ['Monika'])

- zachowanie odpowiedniego formatowania:
  * ŹLE: var name='Tomek';
  * DOBRZE: var name = 'Tomek';
  * średnik na końcu deklaracji zmiennej

 =====================================================
 */


