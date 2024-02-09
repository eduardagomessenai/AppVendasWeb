document.addEventListener("DOMContentLoaded", function () {
    var cpfInput = document.getElementById('CPF');
    var celInput = document.getElementById('Celular');
    cpfInput.addEventListener('input', function () {
        var cpf = cpfInput.value.replace(/\D/g, '');
        cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
        cpf = cpf.replace(/(\d{3})(\d)/, "$1.$2");
        cpf = cpf.replace(/(\d{3})(\d{2})$/, "$1-$2");
        cpfInput.value = cpf;
    });
    celInput.addEventListener('input', function () {
        var cel = celInput.value.replace(/\D/g, '');
        cel = cel.replace(/(\d{2})(\d)/, "($1) $2");
        cel = cel.replace(/(\d{5})(\d)/, "$1-$2");
        celInput.value = cel;
    });
});

/* globals Chart:false */

(() => {
    'use strict'

    // Graphs
    const ctx = document.getElementById('myChart')
    // eslint-disable-next-line no-unused-vars
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [
                'Sunday',
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday'
            ],
            datasets: [{
                data: [
                    15339,
                    21345,
                    18483,
                    24003,
                    23489,
                    24092,
                    12034
                ],
                lineTension: 0,
                backgroundColor: 'transparent',
                borderColor: '#007bff',
                borderWidth: 4,
                pointBackgroundColor: '#007bff'
            }]
        },
        options: {
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    boxPadding: 3
                }
            }
        }
    })
})()
