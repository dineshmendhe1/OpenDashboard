(function(angular){
    'use strict';
    
    angular
    .module('OpenDashboard')
    .controller('NavigationController', function($log,$scope,
                                            ContextService) {
    	$scope.isStudent = ContextService.getCurrentUser().isStudent();
    });
    
    angular
    .module('OpenDashboard')
    .controller('OpenDashboardController', function($log, $scope, $location,contextMapping) {
        $scope.contextMapping = contextMapping;
        // routing logic
        // TODO move to routes
        if (contextMapping && contextMapping.id) {
            $scope.contextMapping = contextMapping;
            
            var dashboards = contextMapping.dashboards;
            var url = null;
            if (!dashboards || dashboards.length == 0) {
                url = '/cm/' + contextMapping.id + '/dashboard';
            }
            else {
                var dashboard = dashboards[0];
                url = '/cm/' + contextMapping.id + '/dashboard/' + dashboard.id;
            }
            
            $location.path(url);
        }        
        else {
            $location.path('/cm/welcome');
        }

    });

})(angular);