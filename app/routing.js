angular.module('antismash.ui.bacterial.routing', [
  'ui.router',
]).config([
  '$stateProvider',
  '$urlRouterProvider',
  function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/start');

    $stateProvider.
      state('start', {
        url: '/start',
        templateUrl: 'start/start.html'
      }).
      state('show', {
        url: '/show',
        abstract: true,
        template: '<ui-view/>'
      }).
      state('show.job', {
        url: '/job/:id',
        template: '<div class="wide-container"><as-job job-id="{{ctrl.id}}"></as-job></div>',
        controller: function ($stateParams) {
          this.id = $stateParams.id;
        },
        controllerAs: 'ctrl'
      }).
      state('download', {
        url: '/download',
        templateUrl: 'download/download.html'
      }).
      state('about', {
        url: '/about',
        templateUrl: 'about/about.html'
      }).
      state('help', {
        url: '/help',
        templateUrl: 'help/help.html'
      });

  }]);
