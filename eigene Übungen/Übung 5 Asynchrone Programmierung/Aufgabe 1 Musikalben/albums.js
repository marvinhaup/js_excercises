var loadButton = document.getElementById("btn");

loadButton.addEventListener("onclick", function() {
    fetch('albums.json')
    .then(response => response.json())
    .then(data => console.log(data));
})

/*
function loadAlbums() {
    let fname = "Albums.json";
    try {
        let res = await fetch(fname);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}

loadButton.addEventListener("onclick", );
*/