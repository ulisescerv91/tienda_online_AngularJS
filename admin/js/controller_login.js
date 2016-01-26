//App NAME
var appAdmin=angular.module('store',[]);

//controller Login Admin
appAdmin.controller('loginCtrl', ['$scope','$http', function($scope,$http){	
		//Init variable MESSAGE to user
		$scope.showError=false;
	$scope.submit=function(){
		//here must be  a loader
		$scope.dataError=false;
		console.log("SUBMIT");		
		//validate expression
		if($scope.txtName && $scope.txtPass){
	        $http.post('private/login.php', { 
	        	x: $scope.txtName,
	        	y: $scope.txtPass 
	        	//
	        }).success(function(data) {                        
	        		console.log(data);
	        		if(!data.success){	        			
	        			$scope.showError=true;
	        			if(data.errors.user_status) 				
            			$scope.dataError=data.errors.user_status;
	        		}else{
                     	//window.location.href = 'panel/';
                     	// Stores
						localStorage.setItem("id_user", data.user_id);						
						localStorage.setItem("name_user", data.user_name);
						localStorage.setItem("type_user", data.user_type);							        			
	        		}                                      
                })
            .error(function(data) {
                  console.log("ERROR: "+data)
            });            			
		}			
	}	
}]);