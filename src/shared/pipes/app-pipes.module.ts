import { NgModule } from '@angular/core';
import { SafeHtmlPipe, SafeUrlPipe } from './safe-html.pipe';

const pipes = [
  SafeHtmlPipe,
  SafeUrlPipe,
];

@NgModule({
  declarations: [...pipes],
  imports: [],
  exports: [...pipes],
})
export class AppPipesModule { }
