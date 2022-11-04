function escrevaMeuNome(nome) {
	return 'Meu nome é  ' + nome;
}

function verificarIdade(idade) {
	if (idade >= 18) {
		console.log(escrevaMeuNome('Lucineia') + ' e sou maior de idade');
	} else {
		console.log('Menor de idade');
	}
}
verificarIdade(34);