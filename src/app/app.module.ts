import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AmisComponent } from './amis/amis.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { FormsModule } from '@angular/forms';
import { AchatTokensComponent } from './achat-tokens/achat-tokens.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Buy10tokensComponent } from './buy10tokens/buy10tokens.component';
import { Buy100tokensComponent } from './buy100tokens/buy100tokens.component';
import { Buy200tokensComponent } from './buy200tokens/buy200tokens.component';

@NgModule({
  declarations: [
    AppComponent,
    AmisComponent,
    DashboardComponent,
    ProfileComponent,
    ConnexionComponent,
    AchatTokensComponent,
    Buy10tokensComponent,
    Buy100tokensComponent,
    Buy200tokensComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
