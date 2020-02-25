import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';

import { OperatorComponent, OperatorMarkdownComponent } from '.';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
      OperatorComponent,
      OperatorMarkdownComponent
  ],
  imports: [
      CommonModule,
      SharedModule,
      MarkdownModule.forChild()
  ],
  exports: [OperatorComponent, OperatorMarkdownComponent]
})
export class OperatorModule { }
