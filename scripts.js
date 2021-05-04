function salvarCliente(){
    var nomeCliente  = document.getElementById('nomeCliente').value
    var emailCliente  = document.getElementById('emailCliente').value
    var telefoneCliente  = document.getElementById('telefoneCliente').value
    var cpfCliente  = document.getElementById('cpfCliente').value
    var dataNascimentoCliente  = document.getElementById('dataNascimentoCliente').value
    var enderecoCliente  = document.getElementById('enderecoCliente').value
    var cepCliente  = document.getElementById('cepCliente').value
    var ufCliente  = document.getElementById('ufCliente').value

    localStorage.setItem('Nome', nomeCliente);
    localStorage.setItem('Email', emailCliente);
    localStorage.setItem('Telefone', telefoneCliente);
    localStorage.setItem('CPF', cpfCliente);
    localStorage.setItem('Data nascimento', dataNascimentoCliente);
    localStorage.setItem('Endereco', enderecoCliente);
    localStorage.setItem('CEP', cepCliente);
    localStorage.setItem('UF', ufCliente);
    
}

function carregarClientes(){
    document.getElementById('mostrar').innerHTML= ` <th scope="row">1</th>
    <td>${localStorage.getItem('Nome')}</td>
    <td>${localStorage.getItem('Email')}</td>
    <td>${localStorage.getItem('Telefone')}</td>
    <td>${localStorage.getItem('CPF')}</td>
    <td>${localStorage.getItem('Data nascimento')}</td>
    <td>${localStorage.getItem('Endereco')}</td>
    <td>${localStorage.getItem('CEP')}</td>
    <td>${localStorage.getItem('UF')}</td>`
}

function excluirClientes(){
    var remover = document.getElementById('mostrar')
    localStorage.removeItem('Nome')
    localStorage.removeItem('Email')
    localStorage.removeItem('Telefone')
    localStorage.removeItem('CPF')
    localStorage.removeItem('Data nascimento')
    localStorage.removeItem('Endereco')
    localStorage.removeItem('CEP')
    localStorage.removeItem('UF')
    remover.remove()
}



function salvarExercicio(){
    var tipoExercicio  = document.getElementById('tipoExercicio').value
    var qntdPercorrida  = document.getElementById('qntdPercorrida').value
    var tempoGasto  = document.getElementById('tempoGasto').value
    var caloriasGastas  = document.getElementById('caloriasGastas').value
    

    localStorage.setItem('Exercicio', tipoExercicio);
    localStorage.setItem('Qntd. percorrida', qntdPercorrida);
    localStorage.setItem('Tempo gasto', tempoGasto);
    localStorage.setItem('Calorias gastas', caloriasGastas);
  

}

function carregarExercicio(){
    document.getElementById('mostrar').innerHTML= ` <th scope="row">1</th>
    <td>${localStorage.getItem('Exercicio')}</td>
    <td>${localStorage.getItem('Qntd. percorrida')}</td>
    <td>${localStorage.getItem('Tempo gasto')}</td>
    <td>${localStorage.getItem('Calorias gastas')}</td>`
}

function excluirExercicio(){
    var remover = document.getElementById('mostrar')
    localStorage.removeItem('Exercicio')
    localStorage.removeItem('Qntd. percorrida')
    localStorage.removeItem('Tempo gasto')
    localStorage.removeItem('Calorias gastas')
    remover.remove()
}



function salvarIMC(){
    var peso  = document.getElementById('peso').value
    var altura  = document.getElementById('altura').value
    var imc  = peso/(altura**2)

    localStorage.setItem('Peso', peso);
    localStorage.setItem('Altura', altura);
    localStorage.setItem('IMC', imc);
}

function carregarIMC(){
    document.getElementById('mostrar').innerHTML= 
    `
    <th scope="row">1</th>
    <td>${localStorage.getItem('Peso')}</td>
    <td>${localStorage.getItem('Altura')}</td>
    <td>${localStorage.getItem('IMC')}</td>
    `
}

function excluirIMC(){
    var remover = document.getElementById('mostrar')
    localStorage.removeItem('Peso')
    localStorage.removeItem('Altura')
    localStorage.removeItem('IMC')
    remover.remove()
}
