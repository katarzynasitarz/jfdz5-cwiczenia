/*
 =====================================================
 DATE: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Date
 =====================================================
 1. Napisz funkcję, która obliczy ile mineło godzin pomiędzy dwoma datami.
    przykład: getHours("1995,12,01", "2000,03,04") - 37320H
    Do wyniku dodaj odpowiednią jednostkę.

 -----------------------------------------------------
 CODE GOES BELOW */
function getDiffTimeInHours(startDate, endDate) {
    var HOUR_IN_MILLISECONDS = 3600 * 1000;

    return (new Date(endDate) - new Date(startDate)) / HOUR_IN_MILLISECONDS;
}

getDiffTimeInHours("1995,12,01", "2000,03,04");

console.log('Ex.1', getDiffTimeInHours("1995,12,01", "2000,03,04"));
/*
 -----------------------------------------------------

 2. Napisz funkcję, której podasz datę swoich urodzin, a ona zwróci Twój wiek z dokładnością
    do dwóch liczb po przecinku

 -----------------------------------------------------
 CODE GOES BELOW */
function getAge(birthDay) {
    var now = new Date();
    var birthDay = new Date(birthDay);
    var YEAR_IN_MILLISECONDS = 1000 * 60 * 60 * 24 * 365;

    return ((now.getTime() - birthDay.getTime()) / YEAR_IN_MILLISECONDS).toFixed(2);
}

getAge("1988,12,01");

console.log('Ex.2', getAge("1988,12,01"));


/*
 -----------------------------------------------------
*/
