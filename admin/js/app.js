/* App Module */

//modulo principal de la aplicacion En este caso la del Admin del sistema
var myStoreCtrl = angular.module('myStoreCtrl', [
  //Angular Services
            // 'ngRoute',
            //ESTO COMENTADO ES PARA LAS RUTAS DEL LOGIN
  //myController
  'storeCtrl',
  //myServices
  'myServices',
  
]);
//rutas de las vistas 
/*
  los controladores que se mandan llamar en esta seccion son  ejecutados desde
  desde el archivo controllers.js y son  inyectados en el modelo como 'storeCtrl'
*/
// myStoreCtrl.config(['$routeProvider',
//   function($routeProvider) {
//     $routeProvider.
//       when('/', {
//         //seccion de codigo que mandara ejecutar
//         templateUrl: 'partial/user_login.html',
//         //controlador que se ejecutara en el codigo que se manda llamar
//         controller: 'loginCtrl'
//       }).   
//       when('/panel', {
//         templateUrl: 'partial/menu1.html',
//         controller: 'panelCtrl'
//       }).   
//       otherwise({
//         redirectTo: '/'
//       });
//   }]);
