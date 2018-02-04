import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LearnComponent } from './learn/learn.component';
import { StoryComponent } from './story/story.component';
import { DoComponent } from './do/do.component';
import { ReflectComponent } from './reflect/reflect.component';

import { AppComponent } from './app.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch:'full' },
  { path: 'home', component: HomeComponent },
  { path: 'learn', component: LearnComponent },
  { path: 'story', component: StoryComponent },
  { path: 'do', component: DoComponent },
  { path: 'reflect', component: ReflectComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LearnComponent,
    StoryComponent,
    DoComponent,
    ReflectComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
