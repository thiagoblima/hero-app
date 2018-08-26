import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';


const appRoutes: Routes = [
    {
      path: 'hero',
      loadChildren: './shared/shared.module#SharedModule'
    },
    {
      path: '',
      redirectTo: '',
      pathMatch: 'full'
    }
  ];


export const routing = RouterModule.forRoot(appRoutes);
