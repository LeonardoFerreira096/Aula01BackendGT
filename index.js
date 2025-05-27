const fs = require('fs');
const os = require('os');
const chalk = require('chalk');



console.log('Sistema Operacional:', os.platform());
console.log('Arquitetura:', os.arch());
console.log('Usuário:', os.userInfo());

console.log(chalk.blue('Texto dazul'));
console.log(chalk.green.bold('Texto verde em negrito'));
console.log(chalk.red.bold.bgWhite('Erro'));

fs.writeFileSync('mensagem.txt', 'Olá mundo!');

const conteudo = fs.readFileSync('mensagem.txt', 'utf-8');

console.log(chalk.magenta(conteudo));

// Q 1

fs.writeFileSync('BoasVindas.txt', 'Bem vindo ao Node.js!');
console.log('Arquivo Criado com sucesso');

//Q 2

const BoasVindas = fs.readFileSync('BoasVindas.txt');

console.log(chalk.blue.bold(BoasVindas));

//Q 3

function logMensagem(mensagem, tipo) {
    switch (tipo) {
        case 'info':
            console.log(chalk.blue('[info]'), mensagem)
            break
        case 'sucesso':
            console.log(chalk.green('[sucesso]'), mensagem)
            break
        case 'erro':
            console.log(chalk.red('[erro]'), mensagem)
            break
        case 'alerta':
            console.log(chalk.yellow('[alerta]'), mensagem)
            break

        default:
            console.log(mensagem);
    }
}

logMensagem('Conexao reetabelicida', 'info');
logMensagem('Arquivo criado com sucesso', 'sucesso');
logMensagem('Arquivo não encontroado','erro')
logMensagem('Atenção!','alerta')

//Q 4


if (fs.existsSync('boasVindas.txt')) {
    fs.unlinkSync('boasVindas.txt');
    console.log('Arquivo removido com sucesso');
} else {
    console.log('Arquivo não encontrado');
}






