var tImages = [ 'agneau.jpg', 'canard.jpg', 'chaton.jpg', 'ecureuil.jpg', 'yellow', 'lapin.jpg', 'suricate.jpg', 'tarentule.jpg', 'tigre.jpg' ];


function demarage() {

    var monImage = document.createElement('img');

    monImage.src = tImages[1];

    var maDiv = document.getElementById("bleu");

    maDiv.innerHTML = '';

    maDiv.appendChild(monImage);

}


window.addEventListener("load",demarrage);