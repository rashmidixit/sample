import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TodoService } from './services/todo.service';

import { AppComponent } from './app.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ExploreRendererDirective } from './directives/explore-renderer.directive';

@NgModule({
  declarations: [
    AppComponent,
    ExploreRendererDirective
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    TodoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(){}
}
