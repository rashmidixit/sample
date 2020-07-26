import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TodoService } from './services/todo.service';

import { AppComponent } from './app.component';
import { EditableComponent } from './editable/editable.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [
    AppComponent,
    EditableComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  providers: [
    TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(library: FaIconLibrary){
    library.addIconPacks(fas);
  }
}
