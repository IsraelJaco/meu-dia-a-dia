async function carregarTempo() {
    try {
      const cidade = "Lubango"; 
      const apiKey = "a5862d3026aebf8a1d12544eb8143c56"; 
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${apiKey}&units=metric&lang=pt`;
  
      const resposta = await fetch(url);
      const dados = await resposta.json();
  
      console.log(dados);  // Verifique a resposta aqui
  
      document.getElementById("local").textContent = `Local: ${dados.name}`;
      document.getElementById("temperatura").textContent = `Temperatura: ${dados.main.temp}°C`;
      document.getElementById("descricao-clima").textContent = `Clima: ${dados.weather[0].description}`;
    } catch (erro) {
      console.error(erro);  // Verifique os erros no console
      document.getElementById("tempo").innerHTML += "<p>Não foi possível carregar o clima.</p>";
    }
  }
  
  window.addEventListener("DOMContentLoaded", carregarTempo);
  