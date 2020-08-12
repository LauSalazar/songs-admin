import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then(m => m.HomePageModule)
      },
      {
        path: 'counter/:counterTab',
        loadChildren: () => import('../counter/counter.module').then(m => m.CounterPageModule)
      },
      {
        path: 'info',
        loadChildren: () => import('../info/info.module').then(m => m.InfoPageModule)
      },
      {
        path: 'navigator',
        loadChildren: () => import('../navigator/navigator.module').then(m => m.NavigatorPageModule)
      },
      {
        path: 'info-dev',
        loadChildren: () => import('../info-dev/info-dev.module').then(m => m.InfoDevPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'counter/:counterTab',
    loadChildren: () => import('../counter/counter.module').then( m => m.CounterPageModule)
  },
  {
    path: 'navigator',
    loadChildren: () => import('../navigator/navigator.module').then( m => m.NavigatorPageModule)
  },
  {
    path: 'info',
    loadChildren: () => import('../info/info.module').then( m => m.InfoPageModule)
  },
  {
    path: 'info-dev',
    loadChildren: () => import('../info-dev/info-dev.module').then( m => m.InfoDevPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
