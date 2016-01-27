 var myServices = angular.module('myServices', []);

//Factory
myServices.factory("mensajes", function(){
	//create object
    var objeto={};    
    //properties

    objeto.id_user= localStorage.id_user;
    objeto.nombre= localStorage.name_user;
    objeto.tipo= localStorage.type_user;
    //methods
	objeto.getName= function(){
            return "hola";
        }
    return objeto;
});

//Service HACER LOGIN de ADMIN
/*
    $q -> nos ayuda  a enviar informacion al controlador(conocida como 'promise')
*/
myServices.service("admin", ['$http','$q' ,function($http,$q){
    //declaramos  la PROMISe
    var defer = $q.defer()   
   //properties
    //this.nombre="hola";
    //methods del Serivicio
    this.login=function(user,pass){
        $http.post('private/login.php', { 
                x: user,
                y: pass                 
            }).success(function(data) {                                                                                
                    if(!data.success){                                          
                        if(data.errors.user_status)                                             
                            //Con esto enviamos informacion al controller
                            defer.resolve(data);
                    }else{
                        
                        localStorage.setItem("id_user", data.user_id);                      
                        localStorage.setItem("name_user", data.user_name);
                        localStorage.setItem("type_user", data.user_type);                                              
                        window.location.href = '#/panel/';                        
                    }                                      
                })
            .error(function(data) {
                //Con esto enviamos informacion al controller
                  defer.reject('Error to take Data');
            });             
            //retornamos promise para que el controlador puedo manipular la informacion       
        return defer.promise;
    }   
}]);