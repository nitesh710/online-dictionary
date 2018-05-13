angular.module('homeController', [])
    .controller('homeCtrl', ['$scope', '$http', function($scope, $http) {
        var data_json, words, def;
        var match;
        $scope.toggle = false;
        $scope.notfound = false;

        $scope.searchWord = function() {
            $http.get('data.json')
                .then(function onSuccess(response) {
                    console.log("successfully got it!");
                    data_json = JSON.parse(JSON.stringify(response.data));

                    // words = JSON.stringify($scope.word);
                    // console.log(words);

                    def = data_json[$scope.word];

                    if (!def) {
                        $http.post('/getMatches/', obj)
                            .then(function onSuccess(response) {
                                console.log("Got It!");
                                console.log(response.data);
                                match = response.data;
                                def = data_json[match];

                                if (def) {
                                	$scope.word = match;
                                    $scope.toggle = true;
                                    $scope.notfound = false;
                                    $scope.content = def;
                                } else {
                                    $scope.toggle = false;
                                    $scope.notfound = true;
                                }
                            }, function onError(response) {
                                console.log('Error got!');
                            });
                    }

                    if (def) {
                        $scope.toggle = true;
                        $scope.notfound = false;
                        $scope.content = def;
                    } 
                    // else {
                    //     $scope.toggle = false;
                    //     $scope.notfound = true;
                    // }


                }, function onError(response) {
                    console.log("got error!", response);
                });

            var obj = {
                word: $scope.word
            }


        };
    }]);