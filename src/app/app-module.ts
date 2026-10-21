import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { App } from './app';
import { DeportesComponent } from './deportes.component/deportes.component';
import { FormsModule } from '@angular/forms';
import { FormsBindingComponent } from './forms.binding.component/forms.binding.component';

@NgModule({
  declarations: [App, DeportesComponent, FormsBindingComponent],
  imports: [BrowserModule, FormsModule],
  providers: [provideBrowserGlobalErrorListeners()],
  bootstrap: [App],
})
export class AppModule {}
