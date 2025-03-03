function menu() {
  let entrada = 0;

  while (entrada !== 5) {
    const entrada = parseFloat(
      prompt(
        "Digite a opcao deseja:\n" +
          "1- Cadastrar\n" +
          "2- Consultar\n" +
          "3- Sair"
      )
    );

    console.log(entrada);

    if (entrada === 1) {
      cadastrar();
    } else if (entrada === 2) {
      consultar();
    } else if (entrada === 3) {
      break;
    }
  }
}

const db = [];

function cadastrar() {
  const nome = prompt("Digite o nome:");
  const genero = prompt("Digite o genero:");
  const idade = prompt("Digite a idade:");

  console.log("Cadastro realizado com sucesso!");
  db.push([nome, genero, idade]);
  console.log(db);
}

function consultar() {
  db.forEach(function (nome) {
    console.log(nome);
  });
}

menu();
