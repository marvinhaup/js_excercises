// Programm zum Testen des Closure-Verhaltens in Javascript

// Erstellen einer MutterFunktion, deren Rückgabe eine Kindfunktion ist
function mutterfunktion() {
    let Kuchen = 'Apfelkuchen'; // ähnlich eines static-int in C
    let kind = function kindfunktion() {
        console.log("Ich esse gerne: " + Kuchen + "\n");
    }
}

mutterfunktion();