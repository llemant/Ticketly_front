import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { AchatTokensComponent } from './achat-tokens/achat-tokens.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { InscriptionComponent } from './inscription/inscription.component';
import { InscriptionOrganisateurComponent } from './inscription-organisateur/inscription-organisateur.component';

const routes: Routes = [
  {path: 'buytokens', component: AchatTokensComponent},
  {path: 'login', component: ConnexionComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'inscription', component: InscriptionComponent},
  {path: 'inscriptionOrganisateur', component: InscriptionOrganisateurComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
