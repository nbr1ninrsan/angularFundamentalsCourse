'use strict';

eventsApp.filter('durations', function () {
    return function(duration){
        switch (duration){
            case 1:
                return "Half-Hour";
            case 2:
                return "Full-Hour";
            case 3:
                return "Half-Day";
            case 4:
                return "Full-Day";
        }
    }
});

eventsApp.filter('iconLevels', function () {
   return function (level) {
       switch(level){
           case 'beginner':
               return "/img/glyphicons-halflings-white.png";
           case 'intermediate':
               return "/img/glyphicons-halflings.png";
           case 'advanced':
               return "/img/profile.jpg";
       }
   }
});

