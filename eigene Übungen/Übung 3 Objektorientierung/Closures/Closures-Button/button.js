// Closures
// globale Variablen und Funktionen
var g = "globale Variable";
fred(42); // Aufruf einer globalen Funktion

function fred(num) {
    var str = "Hallo";
    var irgendwas = function(){
        // num und str sind hier bekannt
        // je nach dem wann irgendwas aufgerufen wird, können deren Werte sich unterscheiden
        console.log("irgendwas: ", num);
        // Zugreifen auf num erstellt ein Closure
        // console.dir zur Ausgabe der Closure
        console.dir(irgendwas);
    }

    var btn1 = document.querySelector("button#btn1");
    btn1.addEventListener("click", function(){
        // num und str sind hier auch bekannt
        // unm wird den Wert 42 haben und str "tschau" wenn dieser Teil zum ersten mal läuft
        console.log("click", num);
    });

    irgendwas();
    num += 5;
    str = "tschau";
    irgendwas();
}