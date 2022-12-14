import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//Firebase Services + environment module
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './components/verify-email/verify-email.component';

//Auth Service
import { AuthService } from './shared/services/auth.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ViewProfileComponent } from './view-profile/view-profile.component';
import { AboutComponent } from './about/about.component';
import { UpdateProfileComponent } from './update-profile/update-profile.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { AddUserInListComponent } from './add-user-in-list/add-user-in-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ViewProfileComponent,
    AboutComponent,
    UpdateProfileComponent,
    ListUsersComponent,
    AddUserInListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    [
      AngularFireModule.initializeApp(environment.firebase),
      AngularFireAuthModule,
      AngularFirestoreModule,
      AngularFireStorageModule,
      AngularFireDatabaseModule,
    ],
    [FormsModule, ReactiveFormsModule],
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
