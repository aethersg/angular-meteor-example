/**
 * Created by judetan on 24/6/15.
 */
Meteor.publish("parties", function () {
    return Parties.find({
        $or: [
            {
                $and: [
                    {"public": true},
                    {"public": {$exists: true}}
                ]
            },
            {
                $and: [
                    {owner: this.userId},
                    {owner: {$exists: true}}
                ]
            }
        ]
    });
});