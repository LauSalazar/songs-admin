import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule) },
  { path: 'song/:id', loadChildren: () => import('./song/song.module').then( m => m.SongPageModule)},
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule) },
  {
    path: 'navigator',
    loadChildren: () => import('./navigator/navigator.module').then( m => m.NavigatorPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
