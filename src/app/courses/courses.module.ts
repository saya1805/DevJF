import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { LanguageComponent } from './language/language.component';
import { YouTubePlayerModule } from '@angular/youtube-player';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CoursesRoutingModule,
    YouTubePlayerModule
  ]
})
export class CoursesModule { }
