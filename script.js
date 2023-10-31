
function scrollOff(){
    let bodyStyle = document.body.style
    bodyStyle.height = "100%"
    bodyStyle.overflow = "hidden"
}

function scrollOn(){
    let bodyStyle = document.body.style
    bodyStyle.height = "90%"
    bodyStyle.overflow = "visible"
}


const audio = new Audio("https://ia800501.us.archive.org/33/items/nyannyannyan/NyanCatoriginal.mp3");
let play = false;

function playNyancat(){
    document.getElementById("hide-nyancat").style.display = "inline";
    document.getElementById("display-nyancat").style.visibility = "visible";
    if (play === false){
        audio.play();
        play = true;
    }else{
        audio.pause();
        audio.currentTime = 0;
        audio.play();
    }
}

function hideNyancat(){
    play = false;
    audio.pause();
    audio.currentTime = 0;
    document.getElementById("hide-nyancat").style.display = "none";
    document.getElementById("display-nyancat").style.visibility = "hidden";
}

function fetch(url="https://eldoov.github.io/BU-MET-CS601/CS601-fetch/info.json") {
    let xmlhttp = new XMLHttpRequest();
    if (!xmlhttp) {
        alert("Cannot create an XMLHTTP instance");
        return false;
    }

    xmlhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            let dataObj = JSON.parse(this.responseText);
            let my_degrees = dataObj.my_degree_data;
            appendData(my_degrees);
        }
    };
    xmlhttp.open("GET", url, true);
    xmlhttp.send();
}

function appendData(data) {

    const degrees = data;
    const keys = ["Year", "Type", "School", "Major"];

    let table = document.createElement('table');
    let tableHead = document.createElement('thead');
    let tableBody = document.createElement('tbody');

    let headerRow = document.createElement('tr');
    for (let i = 0; i < keys.length; i++) {
        let cell = document.createElement('th');
        cell.appendChild(document.createTextNode(keys[i]));
        headerRow.appendChild(cell);
    }
    tableHead.appendChild(headerRow);
    table.appendChild(tableHead);

    degrees.forEach(entry => {
        let row = document.createElement('tr');
        for (let i = 0; i < keys.length; i++) {
            let cell = document.createElement('td');
            cell.appendChild(document.createTextNode(entry.degree[keys[i]]));
            row.appendChild(cell);
        }
        tableBody.appendChild(row);
    });
    table.appendChild(tableBody);

    table.setAttribute("class", "my_degrees");
    document.getElementById("show_table").appendChild(table);

    // disable button
    document.getElementById("fetch_button").disabled = 'true';
}

function changebg() {
    document.body.style.backgroundImage = 'url(media/white.jpg)';
}




