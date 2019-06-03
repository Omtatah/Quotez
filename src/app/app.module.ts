import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { DateCountPipe } from './date-count.pipe'

import { AppComponent } from './app.component';
import { QuotesComponent } from './quotes/quotes.component';
import { QuotesDetailsComponent } from './quotes-details/quotes-details.component';
import { QuotesFormComponent } from './quotes-form/quotes-form.component';
import { VotesComponent } from './votes/votes.component';
import { DateCountPipe } from './date-count.pipe';


@NgModule({
  declarations: [
    AppComponent,
    QuotesComponent,
    QuotesDetailsComponent,
    QuotesFormComponent,
    VotesComponent,
<<<<<<< HEAD
    DateCountPipe
=======
    DateCountPipe,
    
>>>>>>> gh-pages
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
