/**
 * Created by Jude Tan on 24/6/15.
 */

Meteor.publish('users', function () {
    return Meteor.users.find({}, {emails: 1, profile: 1});
});