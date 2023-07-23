import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ListaTareasComponent  } from './lista-tareas/lista-tareas.component';
import { CommonModule } from '@angular/common';




@NgModule({
  declarations: [
    AppComponent,
    ListaTareasComponent,

  ],


  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
