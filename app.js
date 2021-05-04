var app = angular.module('App',['ngRoute','controllers']);

app.config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider){

	$routeProvider.when('/',{templateUrl:'partials/home.html',controller:'HomeCtrl'}).
	when('/novocliente',{templateUrl:'partials/novocliente.html',controller:'ClienteCtrl'}).
	when('/addcliente/:nomeCliente/:emailCliente/:telefoneCliente/:cpfCliente/:dataNascimentoCliente/:enderecoCliente/:cepCliente/:ufCliente',
	{templateUrl:'partials/addcliente.html',controller:'AddClienteCtrl'});
	
	$routeProvider.when('/novoexercicio',{templateUrl:'partials/novoexercicio.html',controller:'ExercicioCtrl'}).
	when('/addexercicio/:tipoExercicio/:qntdPercorrida/:tempoGasto/:caloriasGastas',
	{templateUrl:'partials/addexercicio.html',controller:'AddExercicioCtrl'});

	$routeProvider.when('/calculoimc',{templateUrl:'partials/calculoimc.html',controller:'imcCtrl'}).
	when('/addimc/:peso/:altura/:imc',{templateUrl:'partials/addimc.html',controller:'AddImcCtrl'});
	
	$routeProvider.when('/listarclientes',{templateUrl:'partials/addcliente.html',controller:'listarClientesCtrl'});
	
	$routeProvider.when('/listarexercicios',{templateUrl:'partials/addexercicio.html',controller:'listarexerciciosCtrl'});
	
	$routeProvider.when('/listarimc',{templateUrl:'partials/addimc.html',controller:'listarimcCtrl'});

	$locationProvider.html5Mode(false).hashPrefix('!');

}]);

