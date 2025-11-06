const container = document.querySelector('.container');

const boxCount = 800;

for(let i = 0; i < boxCount; i++){
    const box = document.createElement('div');
    box.classList.add('square');

    box.addEventListener('mouseover', () => {
        box.style.background = getRandomColor();
        setTimeout(() => {
            box.style.background = "rgb(29, 29, 29)"; // return to default
        }, 1000);
    });

    container.appendChild(box);
}

function getRandomColor(){
    const colors = [
        '#e74c3c', '#8e44ad', '#3498db', '#e67e22',
        '#2ecc71', '#1abc9c', '#f1c40f', '#d35400'
    ];
    return colors[Math.floor(Math.random() * colors.length)];
}
