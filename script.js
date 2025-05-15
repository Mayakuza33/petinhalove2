function abrirCarta() {
  document.getElementById('cartaFechada').style.display = 'none'
  document.getElementById('botaoAbrir').style.display = 'none'

  document.getElementById('cartaAberta').style.display = 'block'
  document.getElementById('botaoProxima').style.display = 'block'
}

function proximaPagina() {
  document.getElementById('cartaAberta').style.display = 'none'
  document.getElementById('botaoProxima').style.display = 'none'

  document.getElementById('paginaFinal').style.display = 'block'
  document.getElementById('botaoVoltar').style.display = 'block'
}

function voltarInicio() {
  document.getElementById('paginaFinal').style.display = 'none'
  document.getElementById('botaoVoltar').style.display = 'none'

  document.getElementById('cartaFechada').style.display = 'block'
  document.getElementById('botaoAbrir').style.display = 'block'
}
