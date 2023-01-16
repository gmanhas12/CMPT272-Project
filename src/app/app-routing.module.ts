import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditPigFormComponent } from './edit-pig-form/edit-pig-form.component';
import { DisplayFormComponent } from './display-form/display-form.component';
import { MoreInfoComponent } from './more-info/more-info.component';
import { DeletePigComponent } from './delete-pig/delete-pig.component';
import { StartPageComponent } from './start-page/start-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'start', pathMatch: 'full' },
  { path: 'start', component: StartPageComponent },
  { path: 'info/:id', component: MoreInfoComponent },
  { path: 'edit/:id', component: EditPigFormComponent },
  { path: 'delete/:id', component: DeletePigComponent },
  { path: 'create', component: DisplayFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}