// Fa�a seu exerc�cio neste arquivo


// Alguns elementos importantes na p�gina (index.html):
// #rolar: Bot�o rolar
//	 - voc� deve atribuir um _handler_ de evento a ele para fazer o c�lculo da rolagem dos dados
// #resultado: Elemento cujo conte�do deve ser uma string com os resultados
//	 - voc� deve definir seu conte�do (.innerHTML) com a string de resultados
// #recipienteResultados: "Container" do elemento dos resultados: 
//	 - voc� deve torn�-lo vis�vel removendo a classe "oculto" dele
// .quantidade: todos os input[type=number] com a quantidade de dados a serem rolados
// #quantidadeD{4,6,8,10,12,20}: um ID para cada input[type=number] com a quantidade

var rolar = document.getElementById('rolar');
rolar.addEventListener('click', function(e) {
    var resultado = document.getElementById('resultado');
    var recipienteResultado = document.getElementById('recipienteResultados');
    var finalResult = 0;
    
    var quant_d4 = document.getElementById('quantidadeD4').value;
    var quant_d6 = document.getElementById('quantidadeD6').value;
    var quant_d8 = document.getElementById('quantidadeD8').value;
    var quant_d10 = document.getElementById('quantidadeD10').value;
    var quant_d12 = document.getElementById('quantidadeD12').value;
    var quant_d20 = document.getElementById('quantidadeD20').value;
    
    for(i = 0; i < quant_d4; i++) {
        finalResult += Math.ceil(Math.random() * 4);
    }
    
    for(i = 0; i < quant_d6; i++) {
        finalResult += Math.ceil(Math.random() * 6);
    }
    
    for(i = 0; i < quant_d8; i++) {
        finalResult += Math.ceil(Math.random() * 8);
    }
    
    for(i = 0; i < quant_d10; i++) {
        finalResult += Math.ceil(Math.random() * 10);
    }
    
    for(i = 0; i < quant_d12; i++) {
        finalResult += Math.ceil(Math.random() * 12);
    }
    
    for(i = 0; i < quant_d20; i++) {
        finalResult += Math.ceil(Math.random() * 20);
    }
    
    resultado.innerHTML = finalResult;
    recipienteResultado.className = "";
    
}, false);
