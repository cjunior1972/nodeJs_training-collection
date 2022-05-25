var caneta = new Object();
caneta.cor = "Azul";
caneta.marca = "Bic";
caneta.dimensao = "6cm";

var canetaPreta = new Object();
canetaPreta.cor = "Preta";
canetaPreta.marca = "Bic";
canetaPreta.dimensao = "8cm";

//console.log({caneta});
//console.log({canetaPreta});


function Caneta(cor, marca, dimensao) {
    this.cor = cor;
    this.marca = marca;
    this.dimensao = dimensao;
}

var novaCanetaPreta = new Caneta();
novaCanetaPreta.cor = "Preta";
novaCanetaPreta.dimensao = "5cm";
novaCanetaPreta.marca = "Bic";
console.log({novaCanetaPreta});


var novaCanetaAzul = new Caneta();
novaCanetaAzul.cor = "Azul";
novaCanetaAzul.dimensao = "5cm";
novaCanetaAzul.marca = "Bic";
console.log({novaCanetaAzul});


var novaCanetaRosa = {
    cor: "Rosa",
    marca: "Bic",
    dimensao: "10cm",
};
console.log(novaCanetaRosa);


