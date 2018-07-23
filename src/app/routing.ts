import {Routes,RouterModule} from '@angular/router';
import{GroupsearchComponent} from '../app/groupsearch/groupsearch.component';
import{LoginComponent} from '../app/login/login.component';
const Mainroute : Routes=[
    {path:'login', component:LoginComponent},
    {path:'groupsearch/:un', component:GroupsearchComponent}
];

export const app_routing = RouterModule.forRoot(Mainroute);