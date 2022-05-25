//Spread operator - espalhar

const aluno = {
    nome: "Fernando",
    idade: 19,
    cursos: [ "Node", "SQL", "Docker"],
    email: "fernando@gmail.com",
    endereco: "Rua do Fernando 234",
    telefone: "1223-4567"
};
//console.log({aluno});

const alunoAtualizado = {
    ...aluno,
    idade: 20,   
    cursos: [...aluno.cursos,  "Java"],

};
console.log({alunoAtualizado});



// Rest ...
const { nome, idade , ...resto} = aluno;
console.log(nome);
console.log(resto);


 





