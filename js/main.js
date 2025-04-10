// Alternar modo escuro e salvar no localStorage
document.getElementById("toggle-dark-mode").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    const isDark = document.body.classList.contains("dark-mode");
    localStorage.setItem("modo-escuro", isDark);
  });
  
  // Carregar preferência ao abrir a página
  window.addEventListener("DOMContentLoaded", () => {
    const preferencia = localStorage.getItem("modo-escuro");
    if (preferencia === "true") {
      document.body.classList.add("dark-mode");
    }
  });
  