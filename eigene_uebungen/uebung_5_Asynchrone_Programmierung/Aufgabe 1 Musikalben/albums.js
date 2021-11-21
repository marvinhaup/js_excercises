function loadFileAndInsert() {
    fetch("albums.json")
        .catch("Die datei konnte nicht gefunden werden")
        .then(response => response.json())
        .catch( () => alert("Die datei liegt nicht im json-Format vor.") )
        .then(values => {
            let container = document.getElementById("tableContainer");
            container.appendChild(document.createElement("table"));
            container.children[0].appendChild(document.createElement("thead"));
            container.children[0].appendChild(document.createElement("tbody"));
            let tableHead = document.querySelector("thead");
            let tableBody = document.querySelector("tbody");
            tableHead.appendChild(document.createElement("tr"));
            for (let prop in values[0]) {
                let elem = document.createElement("th");
                elem.innerText = prop;
                tableHead.children[0].appendChild(elem);
            }
            let tbrowCount = 0;
            for (let obj of values) {
                tableBody.appendChild(document.createElement("tr"));
                for (let prop in obj) {
                    let elem = document.createElement("td");
                    elem.innerText = obj[prop];
                    tableBody.children[tbrowCount].appendChild(elem);
                }
                tbrowCount++;
            }
        });
}

let loadBtn = document.getElementById("btn");
loadBtn.addEventListener("click", loadFileAndInsert);