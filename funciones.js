function encriptar(){
    var texto_input = document.getElementById("input_texto1").value.toLowerCase();
    var texto_cifrado = texto_input.replace(/e/igm,"enter");
    var texto_cifrado = texto_cifrado.replace(/o/igm,"ober");
    var texto_cifrado = texto_cifrado.replace(/i/igm,"imes");
    var texto_cifrado = texto_cifrado.replace(/a/igm,"ai");
    var texto_cifrado = texto_cifrado.replace(/u/igm,"ufat");

    document.getElementById("img_muñeco").style.display = "none";
    document.getElementById("texto_encriptar").style.display = "none";
    document.getElementById("texto_encriptar_dos").innerHTML = texto_cifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}

function desencriptar(){
    var texto_input = document.getElementById("input_texto1").value.toLowerCase();
    var texto_cifrado = texto_input.replace(/enter/igm,"e");
    var texto_cifrado = texto_cifrado.replace(/ober/igm,"o");
    var texto_cifrado = texto_cifrado.replace(/imes/igm,"i");
    var texto_cifrado = texto_cifrado.replace(/ai/igm,"a");
    var texto_cifrado = texto_cifrado.replace(/ufat/igm,"u");

    document.getElementById("img_muñeco").style.display = "none";
    document.getElementById("texto_encriptar").style.display = "none";
    document.getElementById("texto_encriptar_dos").innerHTML = texto_cifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}

function copy(){
    var contenido = document.querySelector("#texto_encriptar_dos");
    contenido.select();
    document.execCommand("copy");
    alert("su texto ha sido copiado, por favor pegar para desencriptar");
}

