document.addEventListener('DOMContentLoaded', function () {
    // Sample data for bar chart and pie chart (replace with your data)
    const barChartData = {
        labels: ['Category A', 'Category B', 'Category C', 'Category D'],
        datasets: [{
            label: 'Data Set 1',
            data: [30, 40, 25, 45],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1
        }]
    };

    const pieChartData = {
        labels: ['Label A', 'Label B', 'Label C'],
        datasets: [{
            data: [30, 40, 30],
            backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(75, 192, 192, 0.2)', 'rgba(255, 206, 86, 0.2)'],
            borderColor: ['rgba(255, 99, 132, 1)', 'rgba(75, 192, 192, 1)', 'rgba(255, 206, 86, 1)'],
            borderWidth: 1
        }]
    };

    // Create and render bar chart
    const barChartCanvas = document.getElementById('bar-chart');
    const barChart = new Chart(barChartCanvas, {
        type: 'bar',
        data: barChartData,
    });

    // Create and render pie chart
    const pieChartCanvas = document.getElementById('pie-chart');
    const pieChart = new Chart(pieChartCanvas, {
        type: 'pie',
        data: pieChartData,
    });
});