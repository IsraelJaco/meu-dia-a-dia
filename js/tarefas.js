// Carregar tarefas ao iniciar
window.addEventListener("DOMContentLoaded", carregarTarefas);

function adicionarTarefa() {
  const input = document.getElementById("nova-tarefa");
  const texto = input.value.trim();

  if (texto === "") return;

  const tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

  tarefas.push({ texto, concluida: false });
  localStorage.setItem("tarefas", JSON.stringify(tarefas));

  input.value = "";
  carregarTarefas();
}

function carregarTarefas() {
  const lista = document.getElementById("lista-tarefas");
  lista.innerHTML = "";

  const tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

  tarefas.forEach((tarefa, index) => {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = tarefa.texto;
    if (tarefa.concluida) {
      span.style.textDecoration = "line-through";
      span.style.opacity = "0.6";
    }
    span.style.cursor = "pointer";
    span.onclick = () => alternarConclusao(index);

    // Botão de remover com ícone e acessibilidade
    const btnRemover = document.createElement("button");
    btnRemover.innerHTML = "🗑️ <span class='sr-only'>Remover tarefa</span>";
    btnRemover.className = "btn-remover";
    btnRemover.onclick = (event) => {
      event.stopPropagation(); // Evita marcar como concluída
      removerTarefa(index);
    };

    li.appendChild(span);
    li.appendChild(btnRemover);
    lista.appendChild(li);
  });
}

function alternarConclusao(index) {
  const tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
  tarefas[index].concluida = !tarefas[index].concluida;
  localStorage.setItem("tarefas", JSON.stringify(tarefas));
  carregarTarefas();
}

function removerTarefa(index) {
  const tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
  tarefas.splice(index, 1);
  localStorage.setItem("tarefas", JSON.stringify(tarefas));
  carregarTarefas();
}
// Função para exportar o conteúdo do bloco de notas para PDF
function exportarNotasPDF() {
  const { jsPDF } = window.jspdf;  // Acessando a biblioteca jsPDF
  const doc = new jsPDF();  // Criando um novo documento PDF
  
  // Pegando o conteúdo do bloco de notas
  const notas = document.getElementById("notas").value;

  // Adicionando o conteúdo ao PDF
  doc.text("Notas:", 10, 10);  // Adicionando título
  doc.text(notas, 10, 20);  // Adicionando o conteúdo das notas

  // Gerar o PDF e baixar
  doc.save("notas.pdf");
}

