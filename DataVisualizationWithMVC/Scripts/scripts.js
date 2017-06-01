
var app = angular.module('myApp', ['zingchart-angularjs']);

app.controller('ChartController', function ($scope) {

    $scope.pieChart = {
        globals: {
            shadow: false,
            fontFamily: "Verdana",
            fontWeight: "100"
        },
        type: "pie",
        backgroundColor: "#fff",
        legend: {
            layout: "x5",
            position: "50%",
            borderColor: "transparent",
            marker: {
                borderRadius: 10,
                borderColor: "transparent"
            }
        },
        tooltip: {
            text: "%v million"
        },
        plot: {
            refAngle: "-90",
            borderWidth: "0px",
            valueBox: {
                placement: "in",
                text: "%npv %",
                fontSize: "15px",
                textAlpha: 1,
            }
        },
        series: [{
            text: "China",
            values: [1388],
            backgroundColor: "#DE2910"
        }, {
            text: "India",
            values: [1342],
            backgroundColor: "#ed760e"
        }, {
            text: "United States",
            values: [326],
            backgroundColor: "#104aa8"
        }, {
            text: "Indonesia",
            values: [263],
            backgroundColor: "#e01123"
        }, {
            text: "Brazil",
            values: [211],
            backgroundColor: "#3daf21",
        }]
    };

    $scope.barChart = {
        type: "bar",
        backgroundColor: "white",
        "scale-x": {
            "labels": ["1970", "1980", "1990", "2000", "2010"],
            "label": {
                "text": "Time period(in decade of years)",
                "font-size": 14,
                "offset-y": 15
            }
        },
        "scale-y": {
            "values": "0:2.20:0.20",
            "label": {
                "text": "Population growth (in %)",
                "font-size": 14,
                "offset-x": 0
            }
        },
        series: [
          {
              values: [1.86, 1.72, 1.45, 1.31, 1.18],
              backgroundColor: "#4DC0CF"
          }
        ]
    };
});