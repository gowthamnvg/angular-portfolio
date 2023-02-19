import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Component/header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgVerticalTimelineModule  } from 'ng-vertical-timeline';
import { MainPageComponent } from './Pages/main-page/main-page.component';
import { FeedComponent } from './Component/feed/feed.component';
import { SkillsComponent } from './Component/skills/skills.component';
import { MzdTimelineModule } from 'ngx-mzd-timeline';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainPageComponent,
    FeedComponent,
    SkillsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    NgVerticalTimelineModule,
    MzdTimelineModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
