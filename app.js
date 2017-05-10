var app = angular.module("gitAPI", []);

app.controller("mainController", ["$http", function($http){
	this.getGitInfo = function(){
		this.foundData = false;
		var store = this;
		store.userdetails = [];
		store.repos = [];

		$http.get("https://api.github.com/users/" + this.username).then(onSuccess, onFailure);
		$http.get("https://api.github.com/users/" + this.username + "/repos").then(onRepoFound, onFailure);

		function onSuccess(response){
			store.foundData = true;
			store.userdetails = response.data;
		}

		function onRepoFound(response){
			store.repos = response.data;
		}

		function onFailure(){
			store.foundData = false;
		}
	};
}]);
app.directive("appHeading", function(){
	return{
		restrict: 'E',
		templateUrl: "app-heading.html"
	};
});

app.directive("data", function(){
	return{
		restrict: 'E',
		templateUrl: "user-selector.html"
	};
});
app.directive("displayTab", function(){
	return{
		restrict: 'E',
		templateUrl: "display-tab.html"
	};
});
app.directive("contacts", function(){
	return{
		restrict: 'E',
		templateUrl: "contacts.html"
	};
});
