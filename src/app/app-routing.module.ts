import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { AchatTokensComponent } from './achat-tokens/achat-tokens.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { InscriptionOrganisateurComponent } from './inscription-organisateur/inscription-organisateur.component';
import { EvenementComponent } from './evenement/evenement.component';
import { MesticketsComponent } from './mestickets/mestickets.component';
import { AmisComponent } from './amis/amis.component';
import { MarketplaceComponent } from './marketplace/marketplace.component';
import { BoutiqueComponent } from './boutique/boutique.component';
import { MessagerieComponent } from './messagerie/messagerie.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {path: 'buytokens', component: AchatTokensComponent},
  {path: 'login', component: ConnexionComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'inscription', component: InscriptionComponent},
  {path: 'evenement', component : EvenementComponent },
  {path: 'mestickets', component : MesticketsComponent},
  {path: 'mestickets', component : MesticketsComponent},
  {path: 'mesamis', component : AmisComponent},
  {path: 'marketplace', component : MarketplaceComponent},
  {path: 'boutique', component : BoutiqueComponent},
  {path: 'messagerie', component : MessagerieComponent},
  {path: 'profile', component : ProfileComponent},
];




 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
