const fs = require('fs'); 
const os = require('os');
const chalk = require('chalk');

console.log('Sistema Operacional:', os.platform());
console.log('Arquitetura:', os.arch());
console.log('Usuário:', os.userInfo());

console.log(chalk.blue('Texto azul'));
