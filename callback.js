

function buscarUsuario(callback) {
    const usuario = {
        id: 1,
        nome: "Maria",
        idade: 18,
    }

    callback(usuario);

}


function calcularIdade(usuario) {
    if (usuario.idade >= 18) {
        console.log("Usuário maior de idade");
    } else {
        console.log("Usuáro menor de idade");
    }
    
}
buscarUsuario(calcularIdade);
