import { Routes } from '@angular/router';
import { RegistrationComponent } from './register/registration/registration.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './contents/home/home.component';
import { LayoutComponent } from './shared/layout/layout.component';
import { LogoutComponent } from './auth/logout/logout.component';
// import { AuthGuard } from './auth/auth.guard';
import { ProjectsComponent } from './contents/projects/projects.component';
import { CollabsComponent } from './contents/collabs/collabs.component';
import { ReviewComponent } from './contents/review/review.component';
import { AccountComponent } from './contents/account/account.component';

export const routes: Routes = [
    { path: 'app',
        component: LayoutComponent,
        children: [
            { path: '', component: HomeComponent/*, canActivate: [AuthGuard] */ },
            { path: 'register', component: RegistrationComponent, },
            { path: 'login', component: LoginComponent, },
            { path: 'logout', component: LogoutComponent, },
            { path: 'project', component: ProjectsComponent/*, canActivate: [AuthGuard] */ },
            { path: 'collab', component: CollabsComponent/*, canActivate: [AuthGuard] */ },
            { path: 'review', component: ReviewComponent/*, canActivate: [AuthGuard] */ },
            { path: 'account', component: AccountComponent/*, canActivate: [AuthGuard] */ },
        ],
    },
    { path: '**', redirectTo: 'app' },
];
