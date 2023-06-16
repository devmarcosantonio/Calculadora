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

function qt_parenteses_nao_fechados (pilha) {
    if (pilhaEstaBalanceada(pilha) == false) {
        let parentesesA = 0
        let parentesesB = 0
        pilha.forEach((parenteses) => {
            if (parenteses == '(') {parentesesA++}
            else {parentesesB++}
        })
        let parenteses_nao_fechados = parentesesA - parentesesB
        return (parenteses_nao_fechados)
    } 
    return 0
}

function limpar_pilha(pilha) {
    let tam =  pilha.length
    for (let i = 0; i < tam; i++) {
        pilha.pop()
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
            limpar_pilha(pilha_parenteses)
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
            } else if (pilhaEstaBalanceada(pilha_parenteses) == false && pilha_parenteses.length != 0) {
                visor.innerText += ')'
                pilha_parenteses.push(')')
            }
            break;
        
        case ',':
            if(ultimo_caractere_visor == ',') {
                alert('formato inválido')
            } else {
                visor.innerText += btn.innerText
            }
            break;
        
        case '=':
            if (visor.innerText == '') {
                alert('formato inválido')

            } else if(ultimo_caractere_visor == '(') {
                alert('formato inválido')
            } else {
                parenteses_necessarios = qt_parenteses_nao_fechados(pilha_parenteses)
                for (let i = 0; i < parenteses_necessarios; i++) {
                    visor.innerText += ')' 
                    pilha_parenteses.push(')')
                }
                try {
                    resultado = eval(visor.innerText.replace(/,/g,'.').replace(/x/g,'*'))
                    visor.innerText = String(resultado).replace('.',',')
                    limpar_pilha(pilha_parenteses)
                } catch (error) {
                    alert('formato inválido') 
                } 

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