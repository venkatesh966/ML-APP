import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from '../component/admin/admin.component';
import { UserComponent } from '../component/user/user.component';
import { MainComponent } from '../component/main/main.component';
import { RouterModule, Routes } from '@angular/router';
import { GuardService } from '../services/guard.service';

const routes: Routes = [
  {
       
      path: '', component: MainComponent,
      children: [
          { path: 'admin',canActivate:[GuardService], component: AdminComponent },
          { path: 'user',canActivate:[GuardService], component: UserComponent },

      ],
    
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
    exports: [RouterModule]
})

export class RoutingModule { }
