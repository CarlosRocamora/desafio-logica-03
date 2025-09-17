const { retornarUsuarios, adicionarNovoUsuario } = require('../src/gerenciarUsuarios');
const { expect } = require('chai');

describe('Testar as funções de Gestão de Usuários', function () {
    it('Validar que posso adicionar um novo nome de usuário na lista', function () {
        // 1. Adicionar um novo nome na lista de usuários
        adicionarNovoUsuario({
            nome: 'Carlos Henrique test',
            email: 'carlos.henrique.santos@gmail.com'
        });

        // 2. Retornar a lista de usuários na caixa lista de usuários
        const listaDeUsuarios = retornarUsuarios();

        // 3. Comparar se o novo nome está no fim da lista de usuários
        expect(listaDeUsuarios.at(-1)).to.eql({
            nome: 'Carlos Henrique ',
            email: 'carlos.henrique.santos@gmail.com'
        });
    });
});