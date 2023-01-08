function inscreverSe() {
  let nomeDoParente = document.getElementById("parente").value;
  let nomeDoFilho = document.getElementById("filho").value;
  let numero = 244948959820;

  let mensagem = `Olá! sou o ${nomeDoParente} e pretendo inscrever meu filho ${nomeDoFilho} na vossa creche. aguardo a vossa resposta.\n\nAtenciosamente, ${nomeDoParente}`;

  window.open(
    `http://api.whatsapp.com/send?phone=${numero}&text=${mensagem}`,
    "_blank"
  );
}
