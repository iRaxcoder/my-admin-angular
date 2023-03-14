import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PagesRoutingModule } from './pages/pages.routing.module';
import { NotfoundComponent } from './notfound/notfound.component';
import { AuthRoutingModule } from './auth/auth.routing.module';

const routes: Routes = [
  /* 
  path: /dashboard = pagesRoutingModule
  path: /auth = AuthRoutingModule
  etc
 */
  { path: '**', component: NotfoundComponent },
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    PagesRoutingModule,
    AuthRoutingModule,
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
