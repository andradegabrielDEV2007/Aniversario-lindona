function abrirFoto(img){

let lightbox = document.getElementById("lightbox")
let imgGrande = document.getElementById("img-grande")

lightbox.style.display = "flex"

imgGrande.src = img.src

}

function fecharFoto(){

document.getElementById("lightbox").style.display = "none"

}