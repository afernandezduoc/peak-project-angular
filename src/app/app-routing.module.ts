import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { PasswordRecoveryComponent } from './components/password-recovery/password-recovery.component';
import { ProfileModificationComponent } from './components/profile-modification/profile-modification.component';
import { AdminSectionComponent } from './components/admin-section/admin-section.component';
import { PrivateSectionComponent } from './components/private-section/private-section.component';
import { PdfViewerComponent } from './components/pdf-viewer/pdf-viewer.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'password-recovery', component: PasswordRecoveryComponent },
  { path: 'profile-modification', component: ProfileModificationComponent },
  { path: 'admin-section', component: AdminSectionComponent },
  { path: 'private-section', component: PrivateSectionComponent },
  { path: 'pdf-viewer', component: PdfViewerComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
