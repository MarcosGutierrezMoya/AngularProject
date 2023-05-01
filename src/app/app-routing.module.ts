import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'accion', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },
  { path: 'aventuras', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },
  { path: 'humor', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },
  { path: 'isekai', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },
  { path: 'juegos', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },
  { path: 'militar', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },
  { path: 'misterio', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },
  { path: 'peleas', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },
  { path: 'policiacas', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },
  { path: 'psicologicas', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
