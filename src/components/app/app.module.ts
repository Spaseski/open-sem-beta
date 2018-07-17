import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { TextAnalyzerComponent } from '../text-analyzer/text-analyzer.component';
import { ModalDetailsComponent } from '../modal-details/modal-details.component';
import { SentenceComponent } from '../sentence/sentence.component';
import { WordComponent } from '../word/word.component';

@NgModule({
  declarations: [
    AppComponent,
    TextAnalyzerComponent,
    ModalDetailsComponent,
    SentenceComponent,
    WordComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
