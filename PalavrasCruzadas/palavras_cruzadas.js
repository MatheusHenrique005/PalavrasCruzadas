var palavras = ['cpu', 'ula', 'registradores', 'ram', 'rom', 'eprom', 'flash', 'memoria de massa', 'dma', 'cs', 'address bus', 'data bus', 'i5', 'i7', 'dual core', 'quad core', 'threads', 'cache'];

function verificar_palavra(){
    var palavra_digitada = input_palavra.value;
    palavra_digitada = palavra_digitada.toLowerCase();
    var palavra_digitada_existe = false;

    for (var i = 0; i < palavras.length; i++) {
        if(palavra_digitada == palavras[i]){
            palavra_digitada_existe = true
        }
    }

    if (palavra_digitada_existe){
        
        if(palavra_digitada == "cpu"){
            letra4.style.color = "black";
            letra5.style.color = "black";
            letra6.style.color = "black";
        } else

        if(palavra_digitada == "ula"){
            letra6.style.color = "black";
            letra12.style.color = "black";
            letra17.style.color = "black";
        } else

        if(palavra_digitada == "registradores"){
            letra0.style.color = "black";
            letra1.style.color = "black";
            letra3.style.color = "black";
            letra9.style.color = "black";
            letra16.style.color = "black";
            letra27.style.color = "black";
            letra32.style.color = "black";
            letra36.style.color = "black";
            letra41.style.color = "black";
            letra49.style.color = "black";
            letra53.style.color = "black";
            letra57.style.color = "black";
            letra71.style.color = "black";
        } else

        if (palavra_digitada == "ram") {
            letra56.style.color = "black";
            letra69.style.color = "black";
            letra75.style.color = "black";
        } else

        if (palavra_digitada == "rom") {
            letra48.style.color = "black";
            letra49.style.color = "black";
            letra50.style.color = "black";
        } else

        if (palavra_digitada == "eprom") {
            letra80.style.color = "black";
            letra81.style.color = "black";
            letra82.style.color = "black";
            letra83.style.color = "black";
            letra84.style.color = "black";
        } else 

        if (palavra_digitada == "flash") {
            letra2.style.color = "black";
            letra8.style.color = "black";
            letra14.style.color = "black";
            letra22.style.color = "black";
            letra30.style.color = "black";
        } else

        if (palavra_digitada == "memoria de massa") {
            letra59.style.color = "black";
            letra60.style.color = "black";
            letra61.style.color = "black";
            letra62.style.color = "black";
            letra63.style.color = "black";
            letra64.style.color = "black";
            letra65.style.color = "black";
            letra66.style.color = "black";
            letra67.style.color = "black";
            letra68.style.color = "black";
            letra69.style.color = "black";
            letra70.style.color = "black";
            letra71.style.color = "black";
            letra72.style.color = "black";
        } else

        if (palavra_digitada == "dma") {
            letra38.style.color = "black";
            letra39.style.color = "black";
            letra40.style.color = "black";
        } else

        if (palavra_digitada == "cs") {
            letra4.style.color = "black";
            letra11.style.color = "black";
        } else

        if (palavra_digitada == "address bus") {
            letra17.style.color = "black";
            letra18.style.color = "black";
            letra19.style.color = "black";
            letra20.style.color = "black";
            letra21.style.color = "black";
            letra22.style.color = "black";
            letra23.style.color = "black";
            letra24.style.color = "black";
            letra25.style.color = "black";
            letra26.style.color = "black";
        } else

        if (palavra_digitada == "data bus") {
            letra18.style.color = "black";
            letra28.style.color = "black";
            letra33.style.color = "black";
            letra37.style.color = "black";
            letra51.style.color = "black";
            letra54.style.color = "black";
            letra58.style.color = "black";
        } else

        if (palavra_digitada == "i5") {
            letra9.style.color = "black";
            letra10.style.color = "black";
        } else

        if (palavra_digitada == "i7") {
            letra64.style.color = "black";
            letra73.style.color = "black";
        } else

        if (palavra_digitada == "dual core") {
            letra66.style.color = "black";
            letra74.style.color = "black";
            letra76.style.color = "black";
            letra77.style.color = "black";
            letra78.style.color = "black";
            letra79.style.color = "black";
            letra82.style.color = "black";
            letra85.style.color = "black";
        } else

        if (palavra_digitada == "quad core") {
            letra15.style.color = "black";
            letra25.style.color = "black";
            letra31.style.color = "black";
            letra35.style.color = "black";
            letra43.style.color = "black";
            letra52.style.color = "black";
            letra55.style.color = "black";
            letra60.style.color = "black";
        } else

        if (palavra_digitada == "threads") {
            letra7.style.color = "black";
            letra13.style.color = "black";
            letra20.style.color = "black";
            letra29.style.color = "black";
            letra34.style.color = "black";
            letra38.style.color = "black";
            letra42.style.color = "black";
        } else

        if (palavra_digitada == "cache") {
            letra43.style.color = "black";
            letra44.style.color = "black";
            letra45.style.color = "black";
            letra46.style.color = "black";
            letra47.style.color = "black";
        } else {
            alert("Ouve algum erro inexplicável")
        }

    } else {
        alert("Não... Não tem essa palavra na Palavra Cruzada, tente novamente");
    }
}