var img = document.createElement("img");
img.src = "sdaah_image_rescaled.jpg";
var block = document.getElementById("x");
block.appendChild(img);


var tImages = [ 'scav_image_rescaled.png', 'canard.jpg', 'chaton.jpg', 'ecureuil.jpg', 'yellow', 'lapin.jpg', 'suricate.jpg', 'tarentule.jpg', 'tigre.jpg' ];


function demarage() {

    var monImage = document.createElement('img');

    monImage.src = tImages[1];

    var maDiv = document.getElementById("bleu");

    maDiv.innerHTML = '';

    maDiv.appendChild(monImage);

}


window.addEventListener("load",demarrage);