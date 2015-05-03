'use strict';

app.directive('stiftenWeather', function() {
    return {
        restrict: 'AEC',
        templateUrl: 'app/directives/weather/weatherTemplate.html',
        scope: false,
        controller: function($scope, $attrs, Weather, config, $filter, localStorageService) {
          var weather_icons = config.weatherIcons;
          $scope.city = config.weatherCity;
          
          
          var getTimeOfDay = function() {
            var time = $filter('date')(new Date(), 'H');
            switch (true) {
              case (time < 5):
                return 'night';
              case (time < 10):
                return 'morning';
              case (time < 17):
                return 'day';
              case (time < 22):
                return 'evening';
              default:
                return 'night';
            }
          }
          $scope.timeOfDay = 'weather-' + getTimeOfDay();
          $scope.updateWeatherChart = function(city) {
            $scope.citiesVisible = false;
            $scope.city = city;
            localStorageService.set('weather-city', $scope.city);
            var weather =  Weather.get({city: $scope.city});
            var list = [];
            weather.$promise.then(function(){
              if (weather.cod == 200) {
                //$scope.current = weather.list[0];
                $scope.display = weather.city; 
                $scope.list = [];
                
                angular.forEach(weather.list.slice(0, 9), function(value, key) {

                  // Determine if it's day or night time
                  var daytime = 'day';
                  var dt = value.dt * 1000;
                
                  if ($filter('date')(dt, "H") > 19 || $filter('date')(dt, "H") < 7) {
                    var daytime = 'night';
                  }
         

                  // Try exact value
                  if (value.weather[0].id in weather_icons[daytime]) {
                    value.icon = weather_icons[daytime][value.weather[0].id];
                  } else {
                    // Round to lower tenth
                    var roundedId = Math.floor(value.weather[0].id/10)*10;
                    if (roundedId in weather_icons[daytime]) {
                      value.icon = weather_icons[daytime][roundedId];
                    } else {
                      // Round to lower hundred
                      var roundedId = Math.floor(value.weather[0].id/100)*100;
                      value.icon = weather_icons[daytime][roundedId];
                    }
                  }
                  if ('icon' in value) {
                    value.icon = 'wi-' + value.icon
                  }

                  list.push(value);
                });
                $scope.now = list[0];
                list.shift();
                $scope.list = list;

              }
            });
            
          }
          $scope.updateWeatherChart($scope.city);
        }
    };
});