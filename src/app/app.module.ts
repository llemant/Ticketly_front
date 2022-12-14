import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AmisComponent } from './amis/amis.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { FormsModule } from '@angular/forms';
import { AchatTokensComponent } from './achat-tokens/achat-tokens.component';
import { HttpClientModule } from '@angular/common/http';
import { InscriptionComponent } from './inscription/inscription.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Buy10tokensComponent } from './buy10tokens/buy10tokens.component';
import { Buy100tokensComponent } from './buy100tokens/buy100tokens.component';
import { Buy200tokensComponent } from './buy200tokens/buy200tokens.component';
import { InscriptionOrganisateurComponent } from './inscription-organisateur/inscription-organisateur.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BuycustomtokensComponent } from './buycustomtokens/buycustomtokens.component';
import { MesticketsComponent } from './mestickets/mestickets.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { BoutiqueComponent } from './boutique/boutique.component';
import { MessagerieComponent } from './messagerie/messagerie.component';
import { EvenementComponent } from './evenement/evenement.component';
import { ModifCompteComponent } from './modif-compte/modif-compte.component';
import { ModifCompteOrgaComponent } from './modif-compte-orga/modif-compte-orga.component';
import { MesticketspassesComponent } from './mesticketspasses/mesticketspasses.component';
import { CreationEventComponent } from './creation-event/creation-event.component';
import { MesevenementsComponent } from './mesevenements/mesevenements.component';
import { MesevenementspassesComponent } from './mesevenementspasses/mesevenementspasses.component';
import { MesAmisComponent } from './amis/mes-amis/mes-amis.component';
import { MesDemandeAmisComponent } from './amis/mes-demande-amis/mes-demande-amis.component';
import { AjoutAmiComponent } from './amis/ajout-ami/ajout-ami.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MsgInfoComponent } from './amis/msg-info/msg-info.component';

@NgModule({
  declarations: [
    AppComponent,
    AmisComponent,
    DashboardComponent,
    ProfileComponent,
    ConnexionComponent,
    AchatTokensComponent,
    InscriptionComponent,
    Buy10tokensComponent,
    Buy100tokensComponent,
    Buy200tokensComponent,
    InscriptionOrganisateurComponent,
    BuycustomtokensComponent,
    MesticketsComponent,
    MarketplaceComponent,
    BoutiqueComponent,
    MessagerieComponent,
    ModifCompteComponent,
    ModifCompteOrgaComponent,
    MesticketspassesComponent,
    CreationEventComponent,
    MesevenementsComponent,
    MesevenementspassesComponent,
    EvenementComponent,
    MesAmisComponent,
    MesDemandeAmisComponent,
    AjoutAmiComponent,
    MsgInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
