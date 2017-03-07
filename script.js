'use strict';
// Bootstrap the App
var app = angular.module('app', ['chart.js', 'ngAnimate']);
app.config(function(ChartJsProvider) {
  ChartJsProvider.setOptions('global', {
    backgroundColor: '#E52542',
    defaultFontFamily: "'Salesforce Sans'",
    defaultFontColor: "#54698D",
    defaultFontSize: 11,
  });
  ChartJsProvider.setOptions({
    chartColors: ['#1A6FDB', '#3892BB', '#49A9A3', '#17C406', '#FFD52F', '#F2842A', '#E52542', '#E34AA4', '#8C4BF5']
  });
})
// By Day Graph Controller
app.controller('ByDayGraphCtrl', function($scope, Data) {
  $scope.colors = [{
    backgroundColor: "#1A6FDB",
    borderWidth: 0
  }];
  $scope.options = {
    layout: {
      padding: {
        left: 6
      }
    },
    scales: {
      xAxes: [{
        gridLines: {
          color: "#DADFE7",
        }
      }],
      yAxes: [{
        ticks: {
          min: 0,
          max: 100,
          stepSize: 20,
          callback: function(value) {
            return value + "%"
          }
        },
        gridLines: {
          color: "#DADFE7",
        }
      }]
    }
  };
  $scope.labels = [];
  $scope.data = [];
  Object.keys(Data.get()).forEach(function(key) {
    var day;
    switch (key) {
      case 'monday':
        day = "Mon";
        break;
      case 'tuesday':
        day = "Wed";
        break;
      case 'wednesday':
        day = "Wed";
        break;
      case 'thursday':
        day = "Thu";
        break;
      case 'friday':
        day = "Fri";
        break;
      case 'saturday':
        day = "Sat";
        break;
      case 'sunday':
        day = "Sun";
    }
    $scope.labels.push(day);
    $scope.data.push(Data.get()[key].byDay);
  });
});
// By Day Hour Controller
app.controller('ByHourGraphCtrl', function($scope, Data) {
  $scope.labels = ['12a', '', '', '', '4a', '', '', '', '8a', '', '', '', '12p', '', '', '', '4p', '', '', '', '8p', '', '', ''];
  $scope.data = [];
  $scope.options = {
    scales: {
      xAxes: [{
        gridLines: {
          color: "#DADFE7",
        },
      }],
      yAxes: [{
        ticks: {
          min: 0,
          stepSize: 20,
          max: 100,
          callback: function(value) {
            return value + "%"
          }
        },
        gridLines: {
          color: "#DADFE7",
        }
      }]
    }
  };
  Object.keys(Data.get()[$scope.$parent.key].byHour).forEach(function(key) {
    //$scope.labels.push(key);
    $scope.data.push(Data.get()[$scope.$parent.key].byHour[key]);
  });
});
// Time of Day Card Controller
app.controller('TimeOfDayCardCtrl', function($scope, Data) {
  $scope.data = Data.get();
});
// Data Service
app.factory('Data', function() {
  var data = {
    sunday: {
      byDay: 78,
      bestTime: '1pm - 4pm',
      byHour: {
        '12a': 20,
        '1a': 17,
        '2a': 19,
        '3a': 20,
        '4a': 33,
        '5a': 38,
        '6a': 39,
        '7a': 45,
        '8a': 44,
        '9a': 46,
        '10a': 46,
        '11a': 43,
        '12p': 45,
        '1p': 47,
        '2p': 51,
        '3p': 46,
        '4p': 46,
        '5p': 45,
        '6p': 45,
        '7p': 44,
        '8p': 38,
        '9p': 28,
        '10p': 23,
        '11p': 20
      }
    },
    monday: {
      byDay: 79,
      bestTime: '3pm - 6pm',
      byHour: {
        '12a': 20,
        '1a': 16,
        '2a': 16,
        '3a': 19,
        '4a': 27,
        '5a': 36,
        '6a': 39,
        '7a': 44,
        '8a': 43,
        '9a': 43,
        '10a': 46,
        '11a': 46,
        '12p': 45,
        '1p': 45,
        '2p': 45,
        '3p': 47,
        '4p': 46,
        '5p': 48,
        '6p': 46,
        '7p': 44,
        '8p': 34,
        '9p': 28,
        '10p': 26,
        '11p': 18
      }
    },
    tuesday: {
      byDay: 80,
      bestTime: '12pm - 4pm',
      byHour: {
        '12a': 18,
        '1a': 17,
        '2a': 20,
        '3a': 23,
        '4a': 31,
        '5a': 36,
        '6a': 40,
        '7a': 46,
        '8a': 45,
        '9a': 45,
        '10a': 48,
        '11a': 46,
        '12p': 50,
        '1p': 49,
        '2p': 50,
        '3p': 49,
        '4p': 49,
        '5p': 49,
        '6p': 47,
        '7p': 44,
        '8p': 37,
        '9p': 26,
        '10p': 24,
        '11p': 20
      }
    },
    wednesday: {
      byDay: 80,
      bestTime: '11am - 2pm',
      byHour: {
        '12a': 18,
        '1a': 16,
        '2a': 19,
        '3a': 26,
        '4a': 35,
        '5a': 39,
        '6a': 42,
        '7a': 45,
        '8a': 45,
        '9a': 47,
        '10a': 45,
        '11a': 48,
        '12p': 50,
        '1p': 47,
        '2p': 47,
        '3p': 45,
        '4p': 45,
        '5p': 44,
        '6p': 42,
        '7p': 35,
        '8p': 28,
        '9p': 23,
        '10p': 20,
        '11p': 18
      }
    },
    thursday: {
      byDay: 80,
      bestTime: '12pm - 3pm',
      byHour: {
        '12a': 19,
        '1a': 13,
        '2a': 22,
        '3a': 25,
        '4a': 36,
        '5a': 38,
        '6a': 40,
        '7a': 43,
        '8a': 45,
        '9a': 48,
        '10a': 46,
        '11a': 45,
        '12p': 49,
        '1p': 47,
        '2p': 46,
        '3p': 47,
        '4p': 47,
        '5p': 46,
        '6p': 44,
        '7p': 42,
        '8p': 35,
        '9p': 28,
        '10p': 22,
        '11p': 22
      }
    },
    friday: {
      byDay: 79,
      bestTime: '1pm - 4pm',
      byHour: {
        '12a': 20,
        '1a': 20,
        '2a': 20,
        '3a': 26,
        '4a': 38,
        '5a': 37,
        '6a': 39,
        '7a': 42,
        '8a': 46,
        '9a': 45,
        '10a': 46,
        '11a': 46,
        '12p': 46,
        '1p': 49,
        '2p': 48,
        '3p': 47,
        '4p': 48,
        '5p': 44,
        '6p': 45,
        '7p': 41,
        '8p': 38,
        '9p': 29,
        '10p': 25,
        '11p': 20
      }
    },
    saturday: {
      byDay: 80,
      bestTime: '12pm - 3pm',
      byHour: {
        '12a': 19,
        '1a': 16,
        '2a': 20,
        '3a': 25,
        '4a': 36,
        '5a': 40,
        '6a': 41,
        '7a': 43,
        '8a': 46,
        '9a': 46,
        '10a': 43,
        '11a': 46,
        '12p': 47,
        '1p': 50,
        '2p': 46,
        '3p': 47,
        '4p': 45,
        '5p': 46,
        '6p': 45,
        '7p': 39,
        '8p': 34,
        '9p': 29,
        '10p': 21,
        '11p': 20
      }
    }
  };
  return {
    get: function() {
      return data;
    }
  }
});