function botaoTexto(){
    let para = document.createElement('p');
    para.textContent = 'Também conhecido como dívida técnica, o débito técnico é um conceito no desenvolvimento de software utilizado para representar o custo implícito de uma implementação ou solução pensada somente no agora, elaborada para suprir demandas atuais, em vez fazer uso de uma abordagem de melhor qualidade. O motivo por trás de tudo isso? Diminuir o tempo de lançamento de determinado produto de software';
    document.body.appendChild(para);
}
const botoes = document.querySelectorAll("button");
    for(var i = 0; i < botoes.length ; i++ ){
        botoes.addEventListener('click', botaoTexto);
}

function numeros(){
    soma = 0;
    soma = soma + 1;
    let n = document.createElement('p');
    n.textContent = soma;
    document.body.appendChild(n);
    
    
}
const botoes1 = document.querySelectorAll("button");
    for(let i = 0; i <= 10; i++ ){
           botoes1[i].addEventListener('click', numeros);
        }



function contador() {
    var list = []
    for (let i = 0; i <= 10; i++) {
        list.push(i)
    }

    for (var i = 0; i < list.length; i++) {
        document.getElementById("contador").innerHTML = list
        
    }

}