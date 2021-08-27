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
         {path: 'banklist', name: 'Banklist', icon: 'fa fa-university'},
         {path : 'userlist', name:'userlist', icon: ' fa fa-user-o'}
    ]
};

export const CONSTANT = {
    languages: [{name: 'English', id: 1}, {name: 'Spanish', id: 2}]
};

