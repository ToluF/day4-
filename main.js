const guessInput = document.getElementById('guess-input');
const buttonInput = document.getElementById('button');
const cardBody = document.getElementById('card-body');

buttonInput.addEventListener('click', (event) => {
    const guess = guessInput.value;


    let rand = Math.floor(Math.random() * 10) + 1;
    // console.log(total);

    const resultDiv = document.createElement('div');
    resultDiv.innerHTML = rand;

    resultDiv.classList.add('alert');
    resultDiv.classList.add('alert-primary');
    resultDiv.classList.add('mt-4');

    cardBody.append(resultDiv);
});