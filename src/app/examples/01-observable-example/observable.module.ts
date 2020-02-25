import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarkdownModule } from 'ngx-markdown';

import { ObservableComponent, ObservableArticleMarkdownComponent } from '.';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    ObservableComponent,
    ObservableArticleMarkdownComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MarkdownModule.forChild(),
  ],
  exports: [ObservableComponent, ObservableArticleMarkdownComponent]
})
export class ObservableModule { }
