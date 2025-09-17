const usuarios = [ 
    {
        nome: 'Carlos Henrique',
        email: 'carloshenrique@gmail.com'
    },
    {
        nome: 'Jorge Fernandez',
        email: 'jorge_fernandez@gmail.com'
    },
    {
        nome: 'Igor Batista',
        email: 'igor.batista@gmail.com'
    },
    {
        nome: 'William ',
        email: 'williamg@gail.com'
    },
    {
        nome: 'Vanessa Freitas',
        email: 'vanessafreitas@gmail.com'
    }
];

function retornarUsuarios() {
    return usuarios;
}

function adicionarNovoUsuario(novoUsuario) {
    usuarios.push(novoUsuario);
}

module.exports = {
    retornarUsuarios,
    adicionarNovoUsuario
}