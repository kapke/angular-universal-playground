import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal';

import { App, Home } from './app/app';
import {NoteRepositoryToken} from "./app/NoteRepository";
import { NotesComponent} from './app/NotesComponent';
import {HttpNoteRepository} from "./app/HttpNoteRepository";

import "rxjs/add/operator/map";


@NgModule({
  bootstrap: [ App ],
  declarations: [ App, Home, NotesComponent ],
  imports: [
    UniversalModule, // BrowserModule, HttpModule, and JsonpModule are included
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: Home, pathMatch: 'full' },
      { path: 'notes', component: NotesComponent}
    ])
  ],
  providers: [
    {provide: NoteRepositoryToken, useClass: HttpNoteRepository}
  ]
})
export class MainModule {
}
