const charData = {
    labels: ['Python', 'Java', 'C#', 'JavaScript', 'Others'],
    data: [30, 17, 10, 7, 36], 
};

const myChart = document.querySelector('.my-chart');
const ul = document.querySelector(".progrmaming-stats .details ul");

new Chart(myChart, {
    type: 'doughnut',
    data: {
        labels: charData.labels,
        datasets: [{
            label: 'Language Popularity',
            data: charData.data,
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            
        }],
    },
    options: {
        borderWidth: 10,
        borderRadius: 2,
        hoverBorderWidth: 0,
        plugins:{
            legend:{
                display: false,
            },
        },
    },
});

const populateUl = () => {
    charData.labels.forEach((l,i) => {
        let li = document.createElement("li");
        li.innerHTML = `${l}: <span class = 'percentage'>${chartData.data[i]}%</span>`; 
        ul.appendChild(li);
    });
};

populateUl();