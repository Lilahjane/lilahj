import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatSlideToggleModule } from '@angular/material/slide-toggle'; // Import MatSlideToggleModule

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule // Add MatSlideToggleModule to imports
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
import {Component} from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';

/**
 * @title Basic buttons
 */
@Component({
  selector: 'button-overview-example',
  templateUrl: 'button-overview-example.html',
  styleUrls: ['button-overview-example.css'],
  standalone: true,
  imports: [MatButtonModule, MatDividerModule, MatIconModule],
})
export class ButtonOverviewExample {}
