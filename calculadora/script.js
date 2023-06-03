const visor = document.querySelector('#visor')

function onClick(btn) {
    console.log(btn)
    visor.innerText += btn.innerText
}