import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from '../component/admin/admin.component';
import { UserComponent } from '../component/user/user.component';
import { MainComponent } from '../component/main/main.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
      path: 'main', component: MainComponent,
      children: [
          { path: 'admin', component: AdminComponent },
          { path: 'user', component: UserComponent },

      ],

  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
    exports: [RouterModule]
})

export class RoutingModule { }
