async function buscarGato() {
  const img = document.getElementById("imagemGato");
  const erro = document.getElementById("erro");

  erro.textContent = ""; // limpa mensagem

  try {
    const resposta = await fetch("https://api.thecatapi.com/v1/images/search");

    if (!resposta.ok) {
      throw new Error("Erro na requisição");
    }

    const dados = await resposta.json();

    if (!dados[0] || !dados[0].url) {
      throw new Error("Sem imagem");
    }

    img.src = dados[0].url;

  } catch (err) {
    erro.textContent = " Erro ao carregar o gatinho. Tente novamente!";
    img.src = "";
  }
}

buscarGato();