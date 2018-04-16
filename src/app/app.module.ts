import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PatternValidator } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { UserListComponent } from './user-list/user-list.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { LoginComponent } from './login/login.component';
import { CommonModule } from '@angular/common';
import { UserService } from './user.service';

const appRoutes: Routes = [
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
  { path: 'user/:id', component: UserDetailComponent },
  { path: 'users', component: UserListComponent, data: { title: 'User List' } },
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    UserDetailComponent,
    RegistrationComponent,
    PageNotFoundComponent,
    NavComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,    
    RouterModule.forRoot(appRoutes),
    FormsModule,
    CommonModule
  ],
  providers: [
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
