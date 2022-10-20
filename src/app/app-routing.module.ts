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
import { LieuComponent } from './lieu/lieu.component';
import { ModifCompteComponent } from './modif-compte/modif-compte.component';
import { ModifCompteOrgaComponent } from './modif-compte-orga/modif-compte-orga.component';
import { MesticketspassesComponent } from './mesticketspasses/mesticketspasses.component';
import { CreationEventComponent } from './creation-event/creation-event.component';
import { MesevenementsComponent } from './mesevenements/mesevenements.component';
import { MesevenementspassesComponent } from './mesevenementspasses/mesevenementspasses.component';

const routes: Routes = [
  { path: 'buytokens', component: AchatTokensComponent },
  { path: 'login', component: ConnexionComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'inscription', component: InscriptionComponent },
  { path: 'evenement', component: EvenementComponent },
  { path: 'mestickets', component: MesticketsComponent },
  { path: 'amis', component: AmisComponent },
  { path: 'marketplace', component: MarketplaceComponent },
  { path: 'boutique', component: BoutiqueComponent },
  { path: 'messagerie', component: MessagerieComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'inscriptionOrganisateur', component: InscriptionOrganisateurComponent },
  { path: 'lieu', component: LieuComponent },
  { path: 'modifCompte', component: ModifCompteComponent },
  { path: 'modifCompteOrga', component: ModifCompteOrgaComponent },
  { path: 'mesticketspasses', component: MesticketspassesComponent },
  { path: 'creationEvent', component: CreationEventComponent },
  { path: 'mesevenements', component: MesevenementsComponent },
  { path: 'mesevenementspasses', component: MesevenementspassesComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
