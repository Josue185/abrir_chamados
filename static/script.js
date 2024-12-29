document.addEventListener("DOMContentLoaded", function () {
    // Captura os dados dinâmicos do HTML
    const notStartedCount = parseInt(document.getElementById("notStartedCount").textContent) || 0;
    const inProgressCount = parseInt(document.getElementById("inProgressCount").textContent) || 0;
    const completedCount = parseInt(document.getElementById("completedCount").textContent) || 0;

    // Configuração dos dados do gráfico
    const data = {
        labels: ["Não Iniciado", "Andamento", "Entregue"],
        datasets: [{
            label: "Status dos Pedidos",
            data: [notStartedCount, inProgressCount, completedCount], // Usa valores dinâmicos
            backgroundColor: ["#f39c12", "#3498db", "#2ecc71"],
            borderColor: ["#e67e22", "#2980b9", "#27ae60"],
            borderWidth: 1
        }]
    };

    // Renderizar o gráfico
    const ctx = document.getElementById("statusChart").getContext("2d");
    new Chart(ctx, {
        type: "bar",
        data: data,
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: true,
                    position: "top"
                }
            },
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});
