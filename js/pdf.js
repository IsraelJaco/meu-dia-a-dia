function exportarPDF() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
  
    let tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
    if (tarefas.length === 0) {
      alert('Nenhuma tarefa para exportar.');
      return;
    }
  
    doc.setFontSize(16);
    doc.text("Lista de Tarefas - Meu Dia a Dia", 10, 10);
  
    doc.setFontSize(12);
    tarefas.forEach((tarefa, index) => {
      doc.text(`${index + 1}. ${tarefa.texto} ${tarefa.concluida ? "(✔)" : ""}`, 10, 20 + index * 10);
    });
  
    doc.save("minhas-tarefas.pdf");
  }
  