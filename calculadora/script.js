const visor = document.querySelector('#visor')

function onClick(btn) {
    switch (btn.innerText) {
        case 'AC':
            visor.innerText = ''
            break;
        case 'Del':
            visor.innerText = visor.innerText.substr(0,visor.innerText.length-1)
            break;
        default:
            visor.innerText += btn.innerText
            break;
    }
}