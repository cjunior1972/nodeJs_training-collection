const usuarioIdade  = 19;
if(usuarioIdade >= 18) {
    console.log("Usuario maior que 18 anos");
}
else if(usuarioIdade == 17) {
    console.log("Usuário de 17 anos");
}
else{
    console.log("Usuário menor de idade");
}


const mes = 4;
switch(mes) {
    case 1:
        console.log("Janeiro");
        break;
    case 2:
        console.log("Fevereiro");
        break;
    case 3:
        console.log("Março");
        break;
    default:
        console.log("O mês é outro");
        break;
}