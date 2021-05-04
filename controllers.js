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

appControllers.controller('ExercicioCtrl',['$scope','$location',function($scope,$location){
	$scope.enviar=function(){
		$location.path('/addexercicio/'+$scope.tipoExercicio+'/'+$scope.qntdPercorrida+'/'
		+$scope.tempoGasto+'/'+$scope.caloriasGastas);
	};
}]);

appControllers.controller('AddExercicioCtrl',['$scope','$routeParams',function($scope,$routeParams){
	$scope.xtipoExercicio = $routeParams.tipoExercicio;
	$scope.xqntdPercorrida = $routeParams.qntdPercorrida;
	$scope.xtempoGasto = $routeParams.tempoGasto;
	$scope.xcaloriasGastas = $routeParams.caloriasGastas;
	console.log('Cheguei até aqui!');
}]);

appControllers.controller('imcCtrl',['$scope','$location',function($scope,$location){
	$scope.enviar=function(){
		$location.path('/addimc/'+$scope.peso+'/'+$scope.altura+'/'+$scope.imc);
	};
}]);

appControllers.controller('AddImcCtrl',['$scope','$routeParams',function($scope,$routeParams){
	$scope.xpeso = $routeParams.peso;
	$scope.xaltura = $routeParams.altura;
	$scope.ximc = $routeParams.peso/($routeParams.altura*$routeParams.altura);
	console.log('Cheguei até aqui!');
}]); 

appControllers.controller('listarClientesCtrl',['$scope','$location',function($location){
	$location.path('/listarclientes');
}]);

appControllers.controller('listarexerciciosCtrl',['$scope','$location',function($location){
	$location.path('/listarexercicios');
}]);

appControllers.controller('listarimcCtrl',['$scope','$location',function($location){
	$location.path('/listarimc');
}]);

