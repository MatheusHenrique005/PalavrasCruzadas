var palavras = ['cpu', 'ula', 'registradores', 'ram', 'rom', 'epron', 'flash', 'memoria de massa', 'dma', 'cs', 'address bus', 'data bus', 'i5', 'i7', 'dual core', 'quad core', 'threads', 'cache'];

function gerar_palavras_cruzadas(){
    for (var i = 1; i <= 20*20; i++){
        grade.innerHTML += `
        <div id="celula${i}" class="celula"></div>
        `;
    }

    



}



// // Palavras
// const palavras = ['casa', 'carro', 'gato', 'bicicleta', 'livro'];

// // Grade da palavra-cruzada
// const grade = [
//     ['c', 'a', 'r', 'r', 'o'],
//     ['a', 'c', 'a', 's', 'a'],
//     ['s', 'b', 'i', 'c', 'i'],
//     ['a', 'g', 'a', 't', 'o'],
//     ['r', 'r', 'l', 'v', 'k']
// ];

// function encontrarPalavra(palavra, grade) {
//     const tamanho = palavra.length;
//     const linhaMaxima = grade.length - tamanho;
//     const colunaMaxima = grade[0].length - tamanho;

//     // Verificar horizontalmente
//     for (let i = 0; i <= linhaMaxima; i++) {
//         for (let j = 0; j <= colunaMaxima; j++) {
//             let encontrada = true;
//             for (let k = 0; k < tamanho; k++) {
//                 if (grade[i][j + k] !== palavra[k]) {
//                     encontrada = false;
//                     break;
//                 }
//             }
//             if (encontrada) {
//                 return true;
//             }
//         }
//     }

//     // Verificar verticalmente
//     for (let i = 0; i <= linhaMaxima; i++) {
//         for (let j = 0; j <= colunaMaxima; j++) {
//             let encontrada = true;
//             for (let k = 0; k < tamanho; k++) {
//                 if (grade[i + k][j] !== palavra[k]) {
//                     encontrada = false;
//                     break;
//                 }
//             }
//             if (encontrada) {
//                 return true;
//             }
//         }
//     }

//     return false;
// }

// for (const palavra of palavras) {
//     if (encontrarPalavra(palavra, grade)) {
//         console.log(`A palavra "${palavra}" foi encontrada na grade.`);
//     } else {
//         console.log(`A palavra "${palavra}" não foi encontrada na grade.`);
//     }
// }
