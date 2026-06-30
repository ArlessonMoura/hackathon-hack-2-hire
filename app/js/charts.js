// Charts Module using Chart.js
class Charts {
    constructor() {
        this.finopsChart = null;
        this.scalabilityChart = null;
        this.init();
    }
    
    init() {
        // Initialize charts when sections are visible
        this.initFinOpsChart();
        this.initScalabilityChart();
    }
    
    initFinOpsChart() {
        const ctx = document.getElementById('finopsChart');
        if (!ctx) return;
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !this.finopsChart) {
                    this.createFinOpsChart(ctx);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(ctx);
    }
    
    createFinOpsChart(ctx) {
        this.finopsChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: ['Processamento IA (Bedrock)', 'Infraestrutura AWS', 'Armazenamento S3', 'Outros'],
                datasets: [{
                    data: [85, 5, 7, 3],
                    backgroundColor: [
                        '#FF9900',
                        '#6D28D9',
                        '#22C55E',
                        '#94A3B8'
                    ],
                    borderColor: '#1F2937',
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            color: '#F8FAFC',
                            font: {
                                size: 12,
                                family: 'Inter'
                            },
                            padding: 20
                        }
                    },
                    tooltip: {
                        backgroundColor: '#1F2937',
                        titleColor: '#F8FAFC',
                        bodyColor: '#94A3B8',
                        borderColor: '#374151',
                        borderWidth: 1,
                        padding: 12
                    }
                },
                cutout: '60%'
            }
        });
    }
    
    initScalabilityChart() {
        const ctx = document.getElementById('scalabilityChart');
        if (!ctx) return;
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !this.scalabilityChart) {
                    this.createScalabilityChart(ctx);
                }
            });
        }, { threshold: 0.5 });
        
        observer.observe(ctx);
    }
    
    createScalabilityChart(ctx) {
        this.scalabilityChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['1', '10', '100', '1K', '10K', '100K', '1M'],
                datasets: [{
                    label: 'Documentos Processados',
                    data: [1, 10, 100, 1000, 10000, 100000, 1000000],
                    borderColor: '#FF9900',
                    backgroundColor: 'rgba(255, 153, 0, 0.1)',
                    borderWidth: 3,
                    fill: true,
                    tension: 0.4,
                    pointRadius: 4,
                    pointBackgroundColor: '#FF9900',
                    pointBorderColor: '#1F2937',
                    pointBorderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                        grid: {
                            color: '#374151',
                            drawBorder: false
                        },
                        ticks: {
                            color: '#94A3B8',
                            font: {
                                size: 11,
                                family: 'Inter'
                            }
                        }
                    },
                    y: {
                        type: 'logarithmic',
                        grid: {
                            color: '#374151',
                            drawBorder: false
                        },
                        ticks: {
                            color: '#94A3B8',
                            font: {
                                size: 11,
                                family: 'Inter'
                            },
                            callback: function(value) {
                                if (value >= 1000000) return (value / 1000000) + 'M';
                                if (value >= 1000) return (value / 1000) + 'K';
                                return value;
                            }
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        backgroundColor: '#1F2937',
                        titleColor: '#F8FAFC',
                        bodyColor: '#94A3B8',
                        borderColor: '#374151',
                        borderWidth: 1,
                        padding: 12,
                        callbacks: {
                            label: function(context) {
                                return 'Documentos: ' + context.parsed.y.toLocaleString();
                            }
                        }
                    }
                },
                interaction: {
                    intersect: false,
                    mode: 'index'
                }
            }
        });
    }
}

// Initialize charts
document.addEventListener('DOMContentLoaded', () => {
    new Charts();
});
