function calculadora(num1, num2, operacao) {
  let resultado = 0;

  switch (operacao) {
    case 1:
      resultado = num1 + num2;
      break;
    case 2:
      resultado = num1 - num2;
      break;
    case 3:
      resultado = num1 * num2;
      break;
    case 4:
      resultado = num1 / num2;
      break;
    default:
      console.log("Operação inválida. O resultado é 0.");
      break;
  }

  return resultado;
}

console.log(calculadora(2,2,3))