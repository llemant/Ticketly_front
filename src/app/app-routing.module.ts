import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionComponent } from './connexion/connexion.component';
import { AchatTokensComponent } from './achat-tokens/achat-tokens.component';

const routes: Routes = [
  {path: 'buytokens', component: AchatTokensComponent},


  {path: 'login', component: ConnexionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
