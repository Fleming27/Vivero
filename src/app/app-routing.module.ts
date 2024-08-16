import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SuculentasComponent } from './plantas/suculentas/suculentas.component';

const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'suculentas',
    component: SuculentasComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
