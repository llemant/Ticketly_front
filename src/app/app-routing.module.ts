import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AchatTokensComponent } from './achat-tokens/achat-tokens.component';

const routes: Routes = [
  {path: 'buytokens', component: AchatTokensComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
