import { Routes, RouterModule } from '@angular/router';


const appRoutes: Routes = [
    {
      path: 'hero',
      loadChildren: './shared/shared.module#SharedModule'
    },
    {
      path: 'admin',
      loadChildren: './admin/admin.module#AdminModule'
    },
    {
      path: '',
      redirectTo: '',
      pathMatch: 'full'
    }
  ];


export const routing = RouterModule.forRoot(appRoutes);
