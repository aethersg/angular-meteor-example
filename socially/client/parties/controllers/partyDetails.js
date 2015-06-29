/**
 * Created by judetan on 24/6/15.
 */

angular.module("socially").controller("PartyDetailsCtrl", ['$scope', '$stateParams', '$meteor',
    function ($scope, $stateParams, $meteor) {

        $scope.party = $meteor.object(Parties, $stateParams.partyId);

        var subscriptionHandle = null;
        $meteor.subscribe('parties').then(function (handle) {
            subscriptionHandle = handle;
        });

        $scope.users = $meteor.collection(Meteor.users, false).subscribe('users');

        $scope.$on('$destroy', function () {
            subscriptionHandle.stop();
        });

        $scope.invite = function (user) {
            $meteor.call('invite', $scope.party._id, user._id).then(
                function (data) {
                    console.log('Success inviting', data);
                },
                function (err) {
                    console.log('failed', err);
                }
            );
        };
    }]);