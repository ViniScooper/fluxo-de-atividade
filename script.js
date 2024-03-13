function registrar(tipo) {
  const dataHoraAtual = new Date();
  const hora = dataHoraAtual.getHours();
  const minutos = dataHoraAtual.getMinutes();
  const dia = dataHoraAtual.getDate();
  const mes = dataHoraAtual.getMonth() + 1;
  const ano = dataHoraAtual.getFullYear();

  const horaFormatada = `${hora}:${minutos < 10 ? '0' + minutos : minutos}`;
  const dataFormatada = `${dia}/${mes < 10 ? '0' + mes : mes}/${ano}`;

  // Retrieve the description from the textarea
  const descricaoAtividade = prompt('Descreva a atividade:');

  const novoRegistro = {
    tipo: tipo === 'chegada' ? 'Início' : 'Término',
    hora: horaFormatada,
    data: dataFormatada,
    descricao: descricaoAtividade
  };

  let registros = JSON.parse(localStorage.getItem('registros')) || [];
  registros.push(novoRegistro);

  localStorage.setItem('registros', JSON.stringify(registros));

  atualizarListaRegistros();
}

function exportarParaTXT() {
  const registros = JSON.parse(localStorage.getItem('registros')) || [];

  let texto = '';

  registros.forEach(registro => {
    texto += `${registro.tipo} registrado às ${registro.hora} em ${registro.data}`;
    
    // Check if there is a description and append it to the text
    if (registro.descricao) {
      texto += ` - ${registro.descricao}`;
    }

    texto += '\n';
  });

  const blob = new Blob([texto], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.href = url;
  link.download = 'registros.txt';
  link.click();

  URL.revokeObjectURL(url);
}



function resetarDados() {
  if (confirm('Tem certeza que deseja resetar todos os dados?')) {
    localStorage.removeItem('registros');
    atualizarListaRegistros();
  }
}



function atualizarListaRegistros() {
  const listaRegistros = document.getElementById('listaRegistros');
  listaRegistros.innerHTML = '';

  const registros = JSON.parse(localStorage.getItem('registros')) || [];

  registros.forEach(registro => {
    const novoItemLista = document.createElement('li');
    novoItemLista.textContent = `${registro.tipo} registrado às ${registro.hora} em ${registro.data}`;

    // Check if there is a description and append it to the list item
    if (registro.descricao) {
      novoItemLista.textContent += ` - ${registro.descricao}`;
    }

    listaRegistros.appendChild(novoItemLista);
  });
}

// Chama a função inicial para exibir registros armazenados
atualizarListaRegistros();
