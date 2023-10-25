var userInput = prompt('Введіть фразу:');

function printText(text) {
    const outputText = document.getElementById('text');
    let index = 0;

    const intervalId = setInterval(() => {
        if (index < text.length) {
            outputText.textContent += text[index];
            index += 1;
        } else {
            clearInterval(intervalId);
        }
    }, 200);
}

printText(userInput);
