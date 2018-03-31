import { RouterModule } from '@angular/router';
import { RootComponent } from './root/root.component';
import { HomeComponent } from './home/home.component';
import { SettingsComponent } from './settings/settings.component';
import { AuthGuard } from '../auth.guard';
export const routing = RouterModule.forChild([
    {
        path: 'dashboard',
        component: RootComponent, canActivate: [AuthGuard],
        children: [
            { path: '', component: HomeComponent },
            { path: 'home', component: HomeComponent },
            { path: 'settings', component: SettingsComponent },
        ]
    }
]);
//# sourceMappingURL=dashboard.routing.js.map