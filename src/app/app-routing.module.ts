import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DefaultPageComponent} from './default-page/default-page.component'; 
import {MainPageComponent} from './main-page/main-page.component';
import {BlogComponent} from './blog/blog.component'; 
import {OrderComponent} from './order/order.component';
import {ContactComponent} from './contact/contact.component';
import {HomeComponent} from './home/home.component';



const routes: Routes = [ 
  {path: 'default', component: DefaultPageComponent},
  {path:'main-page', component: MainPageComponent},
  {path:'blog', component: BlogComponent},
  {path:'order', component: OrderComponent},
  {path:'contact', component: ContactComponent},
  {path: 'home', component: HomeComponent}
]; 



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
