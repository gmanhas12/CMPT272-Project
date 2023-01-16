import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoreInfoComponent } from './more-info/more-info.component';
import { StartPageComponent } from './start-page/start-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DisplayFormComponent} from './display-form/display-form.component';
import { PigMapComponent } from './pig-map/pig-map.component';
import { MainTableComponent } from './main-table/main-table.component';
import { PigCreateFormComponent } from './pig-create-form/pig-create-form.component';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { EditPigFormComponent } from './edit-pig-form/edit-pig-form.component';
import { DeletePigComponent } from './delete-pig/delete-pig.component';

@NgModule({
  declarations: 
  [AppComponent, 
  MainTableComponent, 
  StartPageComponent, 
  DisplayFormComponent, 
  PigMapComponent,
  PigCreateFormComponent,  
  EditPigFormComponent, 
  DeletePigComponent, 
  MoreInfoComponent,],

  imports:
  [BrowserModule, 
  AppRoutingModule, 
  FormsModule,
  HttpClientModule, 
  NoopAnimationsModule,
  ReactiveFormsModule],
  providers: [],
  entryComponents:[],
  bootstrap: [AppComponent],
})
export class AppModule {}
