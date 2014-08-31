angular.module('starter.controllers', ['ui.map'])

.controller('DashCtrl', function($scope) {
        $scope.mapOptions = {
            center: new google.maps.LatLng(35.681382, 139.766084),
            zoom: 15,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
});
