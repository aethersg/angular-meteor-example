/**
 * Created by Jude Tan on 29/6/15.
 */
angular.module('socially').filter('uninvited', function () {
    return function (users, party) {
        if (!party)
            return false;

        return _.filter(users, function (user) {
            return !(user.id == party.owner || _.contains(party.invited, user._id));
        });
    }
});