'use strict';

// Bootstrap the App
var app = angular.module('app', [
  'chart.js'
]);

// By Day Graph Controller
app.controller('ByDayGraphCtrl', function ($scope, Data) {
  $scope.labels = [];
  $scope.data = [];
  Object.keys(Data.get()).forEach(function(key) {
    $scope.labels.push(key);
    $scope.data.push(Data.get()[key].byDay);
  });
});

// By Day Hour Controller
app.controller('ByHourGraphCtrl', function ($scope, Data) {
  $scope.labels = [];
  $scope.data = [];
  Object.keys(Data.get()[$scope.$parent.key].byHour).forEach(function(key) {
    $scope.labels.push(key);
    $scope.data.push(Data.get()[$scope.$parent.key].byHour[key]);
  });
});

// Time of Day Card Controller
app.controller('TimeOfDayCardCtrl', function ($scope, Data) {
  $scope.data = Data.get();
});

// Data Service
app.factory('Data', function() {
  var data = {
    sunday: {
      byDay: 23533,
      bestTime: '9am - 10pm',
      byHour: {
        '12a': 5326,
        '1a': 2634,
        '2a': 4743,
        '3a': 3465,
        '4a': 2326,
        '5a': 8753,
        '6a': 2354,
        '7a': 2365,
        '8a': 7423,
        '9a': 7414,
        '10a': 4378,
        '11a': 2263,
        '12p': 2853,
        '1p': 9952,
        '2p': 1636,
        '3p': 3475,
        '4p': 6437,
        '5p': 3745,
        '6p': 7742,
        '7p': 4632,
        '8p': 5674,
        '9p': 7224,
        '10p': 9423,
        '11p': 3464
      }
    },
    monday: {
      byDay: 2343,
      bestTime: '3pm - 5pm',
      byHour: {
        '12a': 2345,
        '1a': 2345,
        '2a': 2345,
        '3a': 2345,
        '4a': 2345,
        '5a': 2345,
        '6a': 2345,
        '7a': 2345,
        '8a': 2345,
        '9a': 2345,
        '10a': 2345,
        '11a': 2345,
        '12p': 2345,
        '1p': 2345,
        '2p': 2345,
        '3p': 2345,
        '4p': 2345,
        '5p': 2345,
        '6p': 2345,
        '7p': 2345,
        '8p': 2345,
        '9p': 2345,
        '10p': 2345,
        '11p': 3543
      }
    },
    tuesday: {
      byDay: 2343,
      bestTime: '3pm - 5pm',
      byHour: {
        '12a': 2345,
        '1a': 2345,
        '2a': 2345,
        '3a': 2345,
        '4a': 2345,
        '5a': 2345,
        '6a': 2345,
        '7a': 2345,
        '8a': 2345,
        '9a': 2345,
        '10a': 2345,
        '11a': 2345,
        '12p': 2345,
        '1p': 2345,
        '2p': 2345,
        '3p': 2345,
        '4p': 2345,
        '5p': 2345,
        '6p': 2345,
        '7p': 2345,
        '8p': 2345,
        '9p': 2345,
        '10p': 2345,
        '11p': 3543
      }
    },
    wednesday: {
      byDay: 2343,
      bestTime: '3pm - 5pm',
      byHour: {
        '12a': 2345,
        '1a': 2345,
        '2a': 2345,
        '3a': 2345,
        '4a': 2345,
        '5a': 2345,
        '6a': 2345,
        '7a': 2345,
        '8a': 2345,
        '9a': 2345,
        '10a': 2345,
        '11a': 2345,
        '12p': 2345,
        '1p': 2345,
        '2p': 2345,
        '3p': 2345,
        '4p': 2345,
        '5p': 2345,
        '6p': 2345,
        '7p': 2345,
        '8p': 2345,
        '9p': 2345,
        '10p': 2345,
        '11p': 3543
      }
    },
    thursday: {
      byDay: 2343,
      bestTime: '3pm - 5pm',
      byHour: {
        '12a': 2345,
        '1a': 2345,
        '2a': 2345,
        '3a': 2345,
        '4a': 2345,
        '5a': 2345,
        '6a': 2345,
        '7a': 2345,
        '8a': 2345,
        '9a': 2345,
        '10a': 2345,
        '11a': 2345,
        '12p': 2345,
        '1p': 2345,
        '2p': 2345,
        '3p': 2345,
        '4p': 2345,
        '5p': 2345,
        '6p': 2345,
        '7p': 2345,
        '8p': 2345,
        '9p': 2345,
        '10p': 2345,
        '11p': 3543
      }
    },
    friday: {
      byDay: 2343,
      bestTime: '3pm - 5pm',
      byHour: {
        '12a': 2345,
        '1a': 2345,
        '2a': 2345,
        '3a': 2345,
        '4a': 2345,
        '5a': 2345,
        '6a': 2345,
        '7a': 2345,
        '8a': 2345,
        '9a': 2345,
        '10a': 2345,
        '11a': 2345,
        '12p': 2345,
        '1p': 2345,
        '2p': 2345,
        '3p': 2345,
        '4p': 2345,
        '5p': 2345,
        '6p': 2345,
        '7p': 2345,
        '8p': 2345,
        '9p': 2345,
        '10p': 2345,
        '11p': 3543
      }
    },
    saturday: {
      byDay: 2343,
      bestTime: '3pm - 5pm',
      byHour: {
        '12a': 2345,
        '1a': 2345,
        '2a': 2345,
        '3a': 2345,
        '4a': 2345,
        '5a': 2345,
        '6a': 2345,
        '7a': 2345,
        '8a': 2345,
        '9a': 2345,
        '10a': 2345,
        '11a': 2345,
        '12p': 2345,
        '1p': 2345,
        '2p': 2345,
        '3p': 2345,
        '4p': 2345,
        '5p': 2345,
        '6p': 2345,
        '7p': 2345,
        '8p': 2345,
        '9p': 2345,
        '10p': 2345,
        '11p': 3543
      }
    }
  };
  return {
    get: function() {
      return data;
    }
  }
});