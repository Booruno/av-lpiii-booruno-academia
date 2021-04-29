var app = angular.module('App',['ngRoute','controllers']);

app.config(['$routeProvider','$locationProvider', function($routeProvider,$locationProvider){

	$routeProvider.when('/',{templateUrl:'partials/home.html',controller:'HomeCtrl'}).
	when('/novocliente',{templateUrl:'partials/novocliente.html',controller:'ClienteCtrl'}).
	when('/addcliente/:nomeCliente/:emailCliente/:telefoneCliente/:cpfCliente/:dataNascimentoCliente/:enderecoCliente/:cepCliente/:ufCliente',
	{templateUrl:'partials/addcliente.html',controller:'AddClienteCtrl'});
	
	
	$locationProvider.html5Mode(false).hashPrefix('!');

}]);

