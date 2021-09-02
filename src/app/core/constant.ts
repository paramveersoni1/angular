export const GlobalVariable = {

    SITE_NAME: 'Debican Admin',
    PATTERNS: {
        email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    },
    tokenKey: 'debican_token'

};

export const SideBarList = {
    list: [
         {path: 'dashboard', name: 'Dashboard', icon: 'fa fa-flag'},
         {path: 'banklist', name: 'Bank List', icon: 'fa fa-university'},
         {path : 'userlist', name:'User List', icon: ' fa fa-user-o'},
         {path : 'charities', name:'charities List', icon: 'fa fa-codiepie'},
         { path: 'subscribeplans', name:'Subscriblan', icon:'fa fa-scribd'},
         { path: 'task-list', name:'task-list', icon:'fa fa-tasks'},
         { path: 'appdata', name:'appdata', icon:'fa fa-area-chart'},
        //  { path: 'message', name:'message', icon:'fa fa-area-chart'},
    ]
};

export const CONSTANT = {
    languages: [{name: 'English', id: 1}, {name: 'Spanish', id: 2}]
};

