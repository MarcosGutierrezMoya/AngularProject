import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccionComponent } from './pages/accion/accion.component';
import { AventurasComponent } from './pages/aventuras/aventuras.component';
import { HumorComponent } from './pages/humor/humor.component';
import { IsekaiComponent } from './pages/isekai/isekai.component';
import { JuegosComponent } from './pages/juegos/juegos.component';
import { MilitarComponent } from './pages/militar/militar.component';
import { MisterioComponent } from './pages/misterio/misterio.component';
import { PeleasComponent } from './pages/peleas/peleas.component';
import { PoliciacasComponent } from './pages/policiacas/policiacas.component';
import { PsicologicasComponent } from './pages/psicologicas/psicologicas.component';

const routes: Routes = [
  // { path: 'accion', component: AccionComponent },
  // { path: 'aventuras', component: AventurasComponent },
  { path: 'humor', component: HumorComponent },
  { path: 'isekai', component: IsekaiComponent },
  { path: 'juegos', component: JuegosComponent },
  { path: 'militar', component: MilitarComponent },
  { path: 'misterio', component: MisterioComponent },
  { path: 'peleas', component: PeleasComponent },
  { path: 'policiacas', component: PoliciacasComponent },
  { path: 'psicologicas', component: PsicologicasComponent },
  { path: 'accion', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },
  { path: 'aventuras', loadChildren: () => import('./pages/pages.module').then(m => m.PagesModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
