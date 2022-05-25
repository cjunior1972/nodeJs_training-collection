let nome = "Maria"; //let é um tipo de variável apenas no bloco que ele faz parte

const pessoa = {
    nome: "Carol",
    idade: 19,
    documento: "98765552562",
    instagram: "carol",
};

const {nome: nomeDaPessoa} = pessoa;
console.log(nome);
console.log(nomeDaPessoa);
console.log({pessoa});


