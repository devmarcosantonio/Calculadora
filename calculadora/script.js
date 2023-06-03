const visor = document.querySelector('#visor')

const pilha_parenteses = []

function pilhaEstaBalanceada (pilha) {
    let parentesesA = 0
    let parentesesB = 0
    pilha.forEach((parenteses) => {
        if (parenteses == '(') {parentesesA++}
        else {parentesesB++}
    })

    if (parentesesA == parentesesB) {
        return true
    } else {
        return false
    }
}

function onClick(btn) {

    if(visor.innerText == '|') {
        visor.innerText = ''
    }
    ultimo_caractere_visor = visor.innerText[visor.innerText.length-1]

    switch (btn.innerText) {
        case 'AC':
            visor.innerText = ''
            pilha_parenteses.forEach(()=>{
                pilha_parenteses.pop()
            })
            break;

        case 'Del':
            if (ultimo_caractere_visor == '(' || ultimo_caractere_visor == ')') {
                pilha_parenteses.pop()
            }
            visor.innerText = visor.innerText.substr(0,visor.innerText.length-1)
            break;

        case '()':
            if (['(', '+', '-', 'x', '/'].indexOf(ultimo_caractere_visor) != -1 || visor.innerText == '') {
                visor.innerText += '('
                pilha_parenteses.push('(')
            } else if ((!isNaN(ultimo_caractere_visor) || ultimo_caractere_visor == ')') &&
            pilhaEstaBalanceada(pilha_parenteses) == true) {
                visor.innerText += 'x('
                pilha_parenteses.push('(')
            } else if (pilhaEstaBalanceada(pilha_parenteses) == false) {
                visor.innerText += ')'
                pilha_parenteses.push(')')
            }
            break;
        
        default:
            if (['+', '-', 'x', '/'].indexOf(btn.innerText) != -1) {
                if (['+', '-', 'x', '/'].indexOf(ultimo_caractere_visor) != -1) {
                    alert('erro de sintex')
                    break;
                }
                else if (visor.innerText == '') {
                    visor.innerText += '0'+btn.innerText
                    break;
                }
            } 
            
            visor.innerText += btn.innerText  
            break;
    }
}