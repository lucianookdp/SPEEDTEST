const IPINFO_TOKEN = 'SEU TOKEN DA API AQUI!';

// Obtém dados do provedor e localização
fetch(`https://ipinfo.io/json?token=${IPINFO_TOKEN}`)
    .then(response => response.json())
    .then(data => {
        document.getElementById('isp').innerText = data.org;
        document.getElementById('ip').innerText = `IP: ${data.ip}`;
        document.getElementById('location').innerText = `${data.city}, ${data.region}, ${data.country}`;
    })
    .catch(error => console.error('Erro ao obter dados do provedor:', error));

const circle = document.getElementById('circle');
const innerCircle = document.getElementById('innerCircle');
const percentText = document.getElementById('percent');

circle.addEventListener('click', startTest);

function startTest() {
    resetResults();
    setTimestamp();
    innerCircle.style.display = 'block';  // Exibe a barra de carregamento
    innerCircle.style.animationPlayState = 'running';
    percentText.innerText = 'Carregando...';
    percentText.classList.add('loading');

    setTimeout(() => {
        displayResults();
        percentText.innerText = 'Tentar Novamente';
        percentText.classList.remove('loading');
        innerCircle.style.display = 'none';  // Esconde a barra após o carregamento
    }, 4000);
}

function setTimestamp() {
    const now = new Date();
    document.getElementById('timestamp').innerText = now.toLocaleString();
}

function displayResults() {
    const download = (Math.random() * 500).toFixed(2);
    const upload = (Math.random() * 300).toFixed(2);
    const ping = (Math.random() * 100).toFixed(0);

    document.getElementById('download').innerText = download;
    document.getElementById('upload').innerText = upload;
    document.getElementById('ping').innerText = ping;

    document.getElementById('results').style.display = 'block';
}

function resetResults() {
    document.getElementById('results').style.display = 'none';
    innerCircle.style.animationPlayState = 'paused';
}
