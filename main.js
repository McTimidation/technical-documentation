

let button = document.getElementById('dogBtn');

let dogPic = document.getElementById('dogImage');



function getDogs() {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then((response) => response.json())
        .then((data) => {
            console.log(data.message)
            dogPic.src = data.message;
        });
            
}

button.addEventListener('click', getDogs);
