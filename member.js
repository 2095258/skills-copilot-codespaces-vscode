function skillsMember(){
    return {
        restrict: 'E',
        templateUrl: 'modules/skills/members,html',
        controller: 'SkillsMemberController',
        controllerAs: 'vm',
        bindToController: true,
        scope: {
        member: '='
        }
    };
}