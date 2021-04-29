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


function salvarIMC(){
    var peso  = document.getElementById('peso').value
    var altura  = document.getElementById('altura').value
    var imc  = peso/(altura**2)

    localStorage.setItem('Peso', peso);
    localStorage.setItem('Altura', altura);
    localStorage.setItem('IMC', imc);
}
