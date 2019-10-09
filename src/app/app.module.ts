import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import { MDBBootstrapModulesPro, ButtonsModule, PopoverModule, ModalModule,NavbarModule, TooltipModule, CarouselModule,InputsModule, WavesModule, LightBoxModule, SidenavModule, AccordionModule, SmoothscrollModule, CardsModule } from 'ng-uikit-pro-standard';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MDBSpinningPreloader } from 'ng-uikit-pro-standard';
import {DefaultPageComponent} from './default-page/default-page.component'; 
import {MainPageComponent} from './main-page/main-page.component';
import { ContactComponent } from './contact/contact.component'
import { BlogComponent } from './blog/blog.component';
import { OrderComponent } from './order/order.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultPageComponent,
    MainPageComponent,
    ContactComponent,
    BlogComponent,
    OrderComponent,
    HomeComponent
  
  ],
  imports: [
    AccordionModule,
    AppRoutingModule,
    BrowserModule,
    ButtonsModule,
    CardsModule,
    CarouselModule,
    FormsModule,
    InputsModule,
    LightBoxModule,
    MDBBootstrapModulesPro.forRoot(),
    ModalModule,
    NavbarModule,
    NgbModule,
    PopoverModule,
    ReactiveFormsModule,
    SidenavModule,
    SmoothscrollModule,
    TooltipModule,
    WavesModule
  
  ],
  providers: [MDBSpinningPreloader],
  bootstrap: [AppComponent]
})
export class AppModule { }
