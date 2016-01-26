<!DOCTYPE html>
<html lang="en" ng-app="panel">
<head>
	<meta charset="UTF-8">
	<title>Control Panel</title>
	<meta name="viewport" content="width=device-width, initial-scale=1">	
	<script src="../../bower_components/angular/angular.min.js"></script>
	<link rel="stylesheet" href="../../bower_components/bootstrap/dist/css/bootstrap.css">	
	<script src="../../bower_components/angular-resource/angular-resource.min.js"></script>

	<script src="../js/controller_panel.js"></script>
	<script src="../js/services.js"></script>
</head>
<body ng-controller="panelCtrl">
	<h1>hola</h1>
	<h2 ng-show="show" ng-bind="pruebas"></h2>
	
</body>
</html>