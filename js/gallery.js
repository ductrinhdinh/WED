/*Name this external file gallery.js*/

function upDate(previewPic) {
    console.log("Evento activado");
    console.log("Alt:", previewPic.alt);
    console.log("Fuente:", previewPic.src);

    const image = document.getElementById("image");
    image.textContent = previewPic.alt;
    image.style.backgroundImage = "url('" + previewPic.src + "')";
}

function unDo() {
    const image = document.getElementById("image");
    image.style.backgroundImage = "url('')";
    image.textContent = "Image below to display here.";
}