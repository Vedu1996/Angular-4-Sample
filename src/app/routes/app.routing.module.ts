import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostComponent } from '../components/post/post.component';
import { UserComponent } from '../components/user/user.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';

const routes:Routes=[
    {path:'', component:UserComponent},
    {path:'index', component:UserComponent},
    {path:'home', component:UserComponent},
    {path:'post', component:UserComponent},
    {path:'posts', component:UserComponent},
    {path:'dashboard', component:UserComponent},
    {path:'post/:id', component:PostComponent},
    {path:'posts/:id', component:PostComponent},
    {path:'**', component:PageNotFoundComponent},
];
@NgModule({
    imports:[
        RouterModule.forRoot(routes)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule{}
export const routingComponents=[UserComponent, PageNotFoundComponent, PostComponent];
