import { NgModule } from '@angular/core';
import { MarkdownComponent } from './components';

@NgModule({
  declarations: [ MarkdownComponent ],
  exports:    [ MarkdownComponent ]
})
export class SharedModule { }
