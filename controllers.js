var appControllers = angular.module('controllers',[]);

	
// appControllers.controller('ListaCtrl',['$scope',function($scope){
// 	$scope.nome = "JOANINHA QUEBRA BARRACOOO!";
// }]);
appControllers.controller('HomeCtrl',['$scope','$location',function($location){

		$location.path('/');
}]);



appControllers.controller('ClienteCtrl',['$scope','$location',function($scope,$location){
	$scope.enviar=function(){

		$location.path('/addcliente/'+$scope.nomeCliente+'/'+$scope.emailCliente+'/'
		+$scope.telefoneCliente+'/'+$scope.cpfCliente+'/'+$scope.dataNascimentoCliente+'/'
		+$scope.enderecoCliente+'/'+$scope.cepCliente+'/'
		+$scope.ufCliente);
	};
}]);

appControllers.controller('AddClienteCtrl',['$scope','$routeParams',function($scope,$routeParams){


	$scope.xnomeCliente = $routeParams.nomeCliente;
	$scope.xemailCliente = $routeParams.emailCliente;
	$scope.xtelefoneCliente = $routeParams.telefoneCliente;
	$scope.xcpfCliente = $routeParams.cpfCliente;
	$scope.xdataNascimentoCliente = $routeParams.dataNascimentoCliente;
	$scope.xenderecoCliente = $routeParams.enderecoCliente;
	$scope.xcepCliente = $routeParams.cepCliente;
	$scope.xufCliente = $routeParams.ufCliente;
	
	console.log('Cheguei até aqui!');
	
}]);