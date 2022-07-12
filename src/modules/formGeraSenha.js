import geraSenha from "./geradores";

const senhaGerada = document.querySelector('.senha-gerada')
const qtdCaractere = document.querySelector('.qtd-caracteres')
const chkMaiuscula = document.querySelector('.chk-maiusculas')
const chkMinuscula = document.querySelector('.chk-minusculas')
const chkSimbolos = document.querySelector('.chk-simbolos')
const chkNumeros = document.querySelector('.chk-numeros')
const gerarSenha = document.querySelector('.gerar-senha')

export default () =>{
    gerarSenha.addEventListener('click', () => {
        senhaGerada.innerHTML = gera()
    })
    
}

function gera(){
    const senha = geraSenha(
        qtdCaractere.value, 
        chkMaiuscula.checked, 
        chkMinuscula.checked, 
        chkNumeros.checked, 
        chkSimbolos.checked
    )
    return senha || 'Nada Selecionado...'
}