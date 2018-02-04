import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LearnComponent } from './learn/learn.component';
import { DoComponent } from './do/do.component';

import { AppComponent } from './app.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch:'full' },
  { path: 'home', component: HomeComponent },
  { path: 'learn', component: LearnComponent },
  { path: 'do', component: DoComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LearnComponent,
    DoComponent
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
