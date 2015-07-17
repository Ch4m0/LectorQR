angular.module('lector.controllers', ['ionic','ngCordova'])
	.controller("lectorController",function($scope, $cordovaBarcodeScanner){
		$scope.leerCodigo = function(){
			$cordovaBarcodeScanner.scan().then(function(imagenScaneada) {
				alert(imagenScaneada.text);
			},
			function (error) {
				alert("ha ocurrido un error");
			});
		}
	});