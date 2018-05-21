import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AceEditorModule } from 'ng2-ace-editor';

import { AppComponent } from './app.component';
import { LevelselectComponent } from './levelselect/levelselect.component';
import { GamescreenComponent } from './gamescreen/gamescreen.component';
import { TitlescreenComponent } from './titlescreen/titlescreen.component';


const appRoutes: Routes = [
  { path: '', component: TitlescreenComponent },
  { path: 'level-select', component: LevelselectComponent },
  { path: 'game/:id',      component: GamescreenComponent  }
];

@NgModule({
  declarations: [
    AppComponent,
    LevelselectComponent,
    GamescreenComponent,
    TitlescreenComponent
  ],
  imports: [
    BrowserModule,
    AceEditorModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
