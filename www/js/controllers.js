angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
    $scope.settings = {
    enableFriends: true
  };
})

.controller('sincronizacion', function($ionicPlatform, $scope, $rootScope, $timeout, $cordovaNetwork, $ionicLoading, services, $log){
 /*   var mostrar;
        $ionicPlatform.ready(function(){
        $timeout(function(){
        $ionicLoading.show({template: '<p class="item-icon-left">Cargandoooo...<ion-spinner icon="ripple"/></p>'});
        });
          $ionicLoading.hide();
          $timeout(function(){
                var network = $cordovaNetwork.getNetwork();
                services.network = network;
                var offline = $cordovaNetwork.isOffline();
                services.offline = offline;                                                       
                online = $cordovaNetwork.isOnline();
                services.online = online;
                                                                                                                
                $rootScope.$on('$cordovaNetwork:offline', function( event, networkState){
                $log.log("Tenemos red");
                      $scope.mostrar=network;
                      mostrar = offline;
                      $scope.$apply();
                });
                $rootScope.$on('$cordovaNetwork:online', function(event, networkState) {
                     $log.log("No hay red");
                      $scope.mostrar=netwok;
                      mostrar=online;
                      $scope.$apply();
               });
           });
    });
    return mostrar;*/
});
