import {Routes,RouterModule} from '@angular/router';
import{GroupsearchComponent} from '../app/groupsearch/groupsearch.component';
const Mainroute : Routes=[
    {path:'groupsearch', component:GroupsearchComponent}
];

export const app_routing = RouterModule.forRoot(Mainroute);