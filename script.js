// Dados fictícios para cada plataforma
const data = {
    Instagram: {
      labels: ['Fotos', 'Vídeos', 'Stories', 'Mensagens'],
      values: [50, 80, 30, 40]
    },
    PlayStation: {
      labels: ['Jogos', 'Online', 'Apps', 'Streaming'],
      values: [90, 70, 30, 50]
    },
    WhatsApp: {
      labels: ['Mensagens', 'Chamadas', 'Status', 'Arquivos'],
      values: [100, 50, 40, 60]
    },
    Steam: {
      labels: ['Jogos', 'Amigos', 'Ofertas', 'Streaming'],
      values: [85, 65, 50, 30]
    }
  };
  
  // Inicializando o gráfico vazio
  let platformChart = null;
  
  // Função para exibir as informações da plataforma e atualizar o gráfico
  function showInfo(platform) {
    const infoBox = document.getElementById('infoBox');
    const infoBoxTitle = document.querySelector('.info-box h2');
    const infoBoxContent = document.querySelector('.info-box p');
  
    // Atualiza o título e conteúdo da caixa de informações
    switch(platform) {
      case 'Instagram':
        infoBoxTitle.innerHTML = 'Instagram';
        infoBoxContent.innerHTML = 'Plataforma de compartilhamento de fotos e vídeos.';
        break;
      case 'PlayStation':
        infoBoxTitle.innerHTML = 'PlayStation';
        infoBoxContent.innerHTML = 'Console de videogame desenvolvido pela Sony.';
        break;
      case 'WhatsApp':
        infoBoxTitle.innerHTML = 'WhatsApp';
        infoBoxContent.innerHTML = 'Aplicativo de mensagens e chamadas instantâneas.';
        break;
      case 'Steam':
        infoBoxTitle.innerHTML = 'Steam';
        infoBoxContent.innerHTML = 'Plataforma de distribuição de jogos para PC.';
        break;
      default:
        infoBoxTitle.innerHTML = '';
        infoBoxContent.innerHTML = '';
    }
  
    // Exibir a caixa de informações
    infoBox.style.display = 'block';
  
    // Obter os dados da plataforma selecionada
    const platformData = data[platform];
  
    // Atualiza o gráfico
    updateChart(platformData.labels, platformData.values);
  }
  
  // Função para atualizar o gráfico
  function updateChart(labels, values) {
    const ctx = document.getElementById('platformChart').getContext('2d');
  
    // Se o gráfico já foi inicializado, destrua o gráfico antigo antes de criar um novo
    if (platformChart) {
      platformChart.destroy();
    }
  
    // Criar ou atualizar o gráfico
    platformChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [{
          label: 'Uso (%)',
          data: values,
          backgroundColor: 'rgba(54, 162, 235, 0.6)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }
  