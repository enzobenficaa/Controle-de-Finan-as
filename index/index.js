// Criamos aqui uma variavel saldo, onde o usuario colocará o valor do seu saldo
let saldo = parseFloat(prompt("Informe a quantidade de dinheiro inicial"));
// Criamos uma variavel opção para o usuario iterar sobre as nossas funcionalidades
let op = "";
// Criamos um do-while para criarmos nosso menu e o nosso projeto
do {
  // Aqui o usuario informa o seu saldo e é apresentado ao menu do projeto
  op = prompt(
    "Saldo disponivel: R$ " +
      saldo +
      "\n1. Depósito" +
      "\n2. Saque" +
      "\n3. Sair"
  );
  // Aqui criamos as funcionalidades das opções disponiveis
  switch (op) {
    // No caso do deposito, o usuario digita quanto quer depositar
    case "1":
      // Aqui salvamos o valor que o usuario digitaria
      // Já convertendo em numeral com o parseFloat
      const deposito = parseFloat(prompt("Quanto voce deseja depositar?"));
      // Aqui criamos uma variavel confirmacao, que vai ser importante para uma tomada de decisao
      const confirmacao = confirm(
        "Voce confirma que vai depositar " + deposito + " reais?"
      );
      // Aqui temos uma condição, se o usuario confirmar o deposito, o saldo será incrementado
      // Se ele cancelar, a aplicação volta para o menu
      if (confirmacao) {
        saldo += deposito;
        alert("O saldo atual é de " + saldo);
      } else {
        alert("Voltando ao menu...");
      }
      break;
    case "2":
      // Na parte do saque, primeiro colocamos uma variavel onde o usuario digita o valor do saque
      const saque = prompt("Quanto você deseja sacar?");
      // Mais uma tela de confirmação para o usuario rever os valores de saque
      const confirmation = confirm(
        "Voce deseja sacar esse valor de " + saque + " reais?"
      );
      // Aqui caso o usuario desejar sacar o valor
      if (confirmation) {
        // Teremos uma condição que se o usuario nao possui o valor que quer sacar
        // Ele recebera um alerta na tela
        if (saque > saldo) {
          alert("Voce nao possui esse valor para sacar");
        }
        // Caso ele tenha esse valor, ocorrerá um decremento do saldo
        else {
          saldo -= saque;
        }
      }
      break;
    // Um caso que possui apenas uma mensagem dizendo que está saindo do programa
    case "3":
      alert("Saindo do programa...");
      break;
    // Uma opção padrão para cuidar de algum valor que for diferente dos pre-definidos
    default:
      alert("Opção invalida");
  }
} while (op !== "3");
