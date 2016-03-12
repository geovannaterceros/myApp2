// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'ngCordova', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider, $ionicConfigProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
 $ionicConfigProvider.tabs.position('bottom'); 
    $stateProvider

  // setup an abstract state for the tabs directive
 /*   .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

});*/
.state('search', {
          url: '/search',
                 templateUrl: 'search.html'
 })
 .state('settings', {
          url: '/settings',
                    templateUrl: 'settings.html'
 })
 .state('tabs', {
          url: "/tab",
        abstract: true,
        templateUrl: "tabs.html"
 })
 .state('tabs.home', {
           url: "/home",
             views: {
                 'home-tab': {
                     templateUrl: "home.html",
                     controller: 'HomeTabCtrl'
                  }
               }
 })
.state('tabs.facts', {
           url: "/facts",
             views: {
                'home-tab': {
                       templateUrl: "facts.html"
                            }
                    }
 })
 .state('tabs.facts2', {
              url: "/facts2",
                    views: {
                         'home-tab': {
                          templateUrl: "facts2.html"
                              }
                            }
 })
 .state('tabs.about', {
             url: "/about",
             views: {
                 'about-tab': {
                         templateUrl: "about.html"
                         }
                     }
  })
  .state('tabs.navstack', {
              url: "/navstack",
                    views: {
                          'about-tab': {
                             templateUrl: "nav-stack.html"
                                       }
                            }
  })
  .state('tabs.contact', {
              url: "/contact",
                    views: {
                           'contact-tab': {
                             templateUrl: "contact.html"
                                          }
                                }
    });

   $urlRouterProvider.otherwise("/tab/home");

   })
.controller('NavCtrl', function($scope, $ionicSideMenuDelegate, $cordovaNetwork, $timeout, $ionicLoading, $ionicPlatform, $rootScope, $log) {
      $scope.showMenu = function () {
           $ionicSideMenuDelegate.toggleLeft();
       };
      $scope.showRightMenu = function () {
           $ionicSideMenuDelegate.toggleRight();
       };
     $timeout(function(){
      $ionicLoading.show({template: '<p class="item-icon-left">Cargandoooo...<ion-spinner icon="ripple"/></p>'});
      });
         $ionicPlatform.ready(function(){
           $timeout(function(){
                 var offline = $cordovaNetwork.isOffline();
                 var online = $cordovaNetwork.isOnline();
             $rootScope.$on('$cordovaNetwork:offline', function( event, networkState){;
                 $ionicLoading.hide();
                 $scope.estado='false';
                 $scope.$apply();
                 });
             $rootScope.$on('$cordovaNetwork:online', function(event, networkState){
                 $ionicLoading.hide();
                 $scope.estado='true';
                 $scope.$apply();
                });
     });
 })
})
 .controller('HomeTabCtrl', function($scope) {
});
