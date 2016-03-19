

/*****************************************************************************/
/* Home: Event Handlers */
/*****************************************************************************/
Template.Home.events({
});

Template.hello.events({
    'click button': function () {
        // increment the counter when button is clicked
        Session.set('counter', Session.get('counter') + 1);
    }
});

/*****************************************************************************/
/* Home: Helpers */
/*****************************************************************************/
Template.Home.helpers({

});


Template.hello.helpers({
    counter: function () {
        return Session.get('counter');
    }
});

/*****************************************************************************/
/* Home: Lifecycle Hooks */
/*****************************************************************************/
Template.Home.onCreated(function () {
});

Template.hello.onCreated(function () {
    Session.set('counter', 0);
});

Template.Home.onRendered(function () {
});

Template.Home.onDestroyed(function () {
});
