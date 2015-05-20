/**
 * Created by Julius Hernandez on 5/6/2015.
 */
eventsApp.factory('eventData', function ($resource) {

    var resource = $resource('/data/event/:id', {id:'@id'}, {"getAll": {method: 'GET', isArray: true, params: {something: "foo"} } } );

    return {
       getEvent: function (eventId) {//he did explain haphazardly '@id' but I didn't understand this or why
           return resource.get( {id:eventId} );//we pass in an to .get()
       },
       save: function (event) {
           event.id = 999; //re-implementing this was a suggested excercise
           return resource.save(event);
       },
       getAllEvents: function () {
           return resource.query();
       }
   }
});
