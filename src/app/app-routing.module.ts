import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './Component/header/header.component';
import { MainPageComponent } from './Pages/main-page/main-page.component';

const routes: Routes = [
  //{path:'',component:HeaderComponent},
  {path:'',component:MainPageComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
