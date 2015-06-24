/**
 * Created by judetan on 24/6/15.
 */

angular.module('socially', ['angular-meteor', 'ui.router']);


function onReady() {
    angular.bootstrap(document, ['socially']);
}

if (Meteor.isCordova)
    angular.element(document).on("deviceready", onReady);
else
    angular.element(document).ready(onReady);
