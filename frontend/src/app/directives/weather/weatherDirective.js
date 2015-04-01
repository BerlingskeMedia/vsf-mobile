'use strict';

app.directive('stiftenWeather', function() {
    return {
        restrict: 'AEC',
        templateUrl: 'app/directives/weather/weatherTemplate.html',
        scope: false,
        controller: function($scope, $attrs, Weather, config, Cities, $filter, localStorageService) {
          var weather_icons = config.weatherIcons;
          $scope.cities = []
          $scope.cityAutocomplete = localStorageService.get('weather-city');
          if ($scope.cityAutocomplete == null) {
            $scope.cityAutocomplete = 'Aarhus';
            $scope.city = 'Aarhus';
          }
          var cities;
          $scope.updateDataList = function() {
            $scope.cities = [];
            if ($scope.cityAutocomplete.length > 1) {
              var lookup = false;
              if (cities === undefined) {
                lookup = true;  
              } else {
                if (!('$resolved' in cities)) {
                  lookup = true;
                } else {
                  if (cities.$resolved === true) {
                    lookup = true;
                  }
                }
              }
              if (lookup) {
                cities =  Cities.get({city: $scope.cityAutocomplete});

                cities.$promise.then(function(){
                  if (cities.cod == 200) {
                  
                    if (cities.list.length > 0) {
                      $scope.city = cities.list[0].name;
                      $scope.updateChart();
                    }
                    angular.forEach(cities.list, function(value, key) {
                      $scope.cities.push({id: value.id, name: value.name});
                    });
                  }
                });
              }
            }
          }
    

          $scope.updateChart = function() {
            localStorageService.set('weather-city', $scope.city);
            var weather =  Weather.get({city: $scope.city});
            weather.$promise.then(function(){
              if (weather.cod == 200) {
                //$scope.current = weather.list[0];
                console.log(weather);
                $scope.display = weather.city; 
                $scope.list = [];
                angular.forEach(weather.list.slice(0, 4), function(value, key) {

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

                  $scope.list.push(value);
                });

              }
            });
            
          }
          $scope.updateChart();
        }
    };
});