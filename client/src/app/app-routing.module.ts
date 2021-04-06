import { NgModule } from "@angular/core";
import { Routes, RouterModule } from '@angular/router';
import { UserEditComponent } from "./users/user-edit/user-edit.component";
import { UserListComponent } from "./users/user-list/user-list.component";

const routes: Routes  = [
    {path: '', component: UserListComponent},
    {path: 'user/edit/:id', component: UserEditComponent} 
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule{}